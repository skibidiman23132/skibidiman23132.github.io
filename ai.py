from openai import OpenAI
import os


client = OpenAI(
    api_key= os.environ['CHAT_GBT_API']
)


end_program = False

while not end_program:
    get_input = input("Enter a prompt:")
    if get_input.lower() == "goodbye" or get_input.lower() == "exit":
        end_program = True
        print("Goodbye!")
    else:
        system_data = [
            {"role": "system", "content": "you an AI chatbot"},
            {"role": "user", "content": get_input}
        ]
        response = client.chat.completions.create(
            model = "gpt-3.5-turbo",
            messages=system_data
        )
        chatbot_response = response.choices[0].message.content
        system_data.append({"role": "assistant", "content": chatbot_response})
        print("ChatBot: " + chatbot_response)