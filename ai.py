import js
import json
from pyodide.ffi import create_proxy

# Load previous chat history from cookies
def load_chat_history():
    chat_history = js.document.cookie
    if chat_history:
        try:
            chat_history = json.loads(chat_history)
            return chat_history
        except:
            return []
    return []

# Save chat history to cookies
def save_chat_history(history):
    js.document.cookie = f"chat_history={json.dumps(history)}; path=/"

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

    # Display user input
    add_message("user", user_input)
    chat_data.append({"role": "user", "content": user_input})

    # Send user input to the JavaScript function for API call
    js.window.fetch_response(user_input)

def on_send_button_click(event):
    send_message()

def on_key_press(event):
    if event.key == "Enter":
        if event.shiftKey:
            return  # Allow new line
        else:
            event.preventDefault()  # Prevent default action and send message
            send_message()

def reset_chat(event):
    js.document.getElementById('chat-log').innerHTML = ""
    js.document.getElementById('user-input').value = ""
    chat_data.clear()
    save_chat_history(chat_data)

# Add event listeners
send_button = js.document.getElementById('send-btn')
send_button.addEventListener('click', create_proxy(on_send_button_click))

user_input = js.document.getElementById('user-input')
user_input.addEventListener('keypress', create_proxy(on_key_press))

reset_button = js.document.getElementById('reset-btn')
reset_button.addEventListener('click', create_proxy(reset_chat))

# Initialize chat log with previous history
for message in chat_data:
    add_message(message["role"], message["content"])
