import js
import json
import os
from pyodide.ffi import create_proxy

def load_chat_history():
    chat_history_cookie = js.document.cookie
    # Find the chat_history cookie
    chat_history_str = ""
    for item in chat_history_cookie.split(";"):
        if item.strip().startswith("chat_history="):
            chat_history_str = item.strip().split("=", 1)[1]
            break
    if chat_history_str:
        try:
            chat_history = json.loads(chat_history_str)
            return chat_history
        except json.JSONDecodeError:
            print("Failed to decode chat history.")
            return []
    return []

def save_chat_history(history):
    # Convert history to a JSON string
    chat_history_str = json.dumps(history)
    # Ensure the chat history doesn't exceed cookie size limitations
    if len(chat_history_str) > 4000:
        print("Chat history size exceeds cookie limits.")
        return
    js.document.cookie = f"chat_history={chat_history_str}; path=/{history.json}"

chat_data = load_chat_history()

def add_message(role, content):
    js.document.getElementById('chat-log').innerHTML += f"<div><strong>{role.capitalize()}:</strong> {content}</div>"

def send_message():
    user_input = js.document.getElementById('user-input').value
    if user_input.strip().lower() in ["goodbye", "exit"]:
        add_message("user", user_input)
        add_message("chatbot", "Goodbye!")
        chat_data.append({"role": "user", "content": user_input})
        chat_data.append({"role": "chatbot", "content": "Goodbye!"})
        save_chat_history(chat_data)
        js.document.getElementById('user-input').value = ""
        return

    add_message("user", user_input)
    chat_data.append({"role": "user", "content": user_input})

    js.window.fetch_response(user_input, os.getenv("CHAT_GBT_API"))

def on_send_button_click(event):
    send_message()

def on_key_press(event):
    if event.key == "Enter":
        if event.shiftKey:
            return
        else:
            event.preventDefault()
            send_message()

def reset_chat(event):
    js.document.getElementById('chat-log').innerHTML = ""
    js.document.getElementById('user-input').value = ""
    chat_data.clear()
    save_chat_history(chat_data)

send_button = js.document.getElementById('send-btn')
send_button.addEventListener('click', create_proxy(on_send_button_click))

user_input = js.document.getElementById('user-input')
user_input.addEventListener('keypress', create_proxy(on_key_press))

reset_button = js.document.getElementById('reset-btn')
reset_button.addEventListener('click', create_proxy(reset_chat))

def handle_message(event):
    print("Raw message data:", event.data)
    try:
        if isinstance(event.data, str):
            data = json.loads(event.data)
            if isinstance(data, dict):
                if data.get("type") == "response_message":
                    add_message("chatbot", data.get("text", ""))
                elif data.get("type") == "response_error":
                    add_message("chatbot", data.get("text", ""))
                else:
                    add_message("chatbot", "Received unexpected message type.")
            else:
                add_message("chatbot", "Received unexpected message format.")
        else:
            add_message("chatbot", "Received non-string message data.")
    except json.JSONDecodeError as e:
        print("JSON Decode Error:", e)
        add_message("chatbot", "Failed to parse message data.")

js.window.addEventListener('message', create_proxy(handle_message))

for message in chat_data:
    add_message(message["role"], message["content"])
