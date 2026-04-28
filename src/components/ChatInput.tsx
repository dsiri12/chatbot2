import { useState, type ChangeEvent } from "react";
import { Chatbot } from "supersimpledev";
import type { ChatMessageType } from "../types/ChatMessageType";

type Props = {
  chatMessages: ChatMessageType[];
  setChatMessages: React.Dispatch<React.SetStateAction<ChatMessageType[]>>;
}

export const ChatInput = ({ chatMessages, setChatMessages }: Props) => {
  const [inputText, setInputText] = useState("");

  function saveInputText(
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const useMessage = inputText.trim();
    if (useMessage.length === 0) {
      alert("Please input a message.");
      return;
    }

    const response = Chatbot.getResponse(useMessage);

    const newChatMessages = [
      ...chatMessages,
      {
        message: useMessage,
        sender: "user",
        id: new Date().getTime(),
      },
      {
        message: response,
        sender: "robot",
        id: new Date().getTime() + 1,
      },
    ];

    setChatMessages(newChatMessages);

    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size={30}
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        onKeyDown={(event) => event.key === "Enter" && sendMessage()}
      />

      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
};
