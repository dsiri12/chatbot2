import { useState, type ChangeEvent } from "react";
import { Chatbot } from "supersimpledev";

type Props = {
  addMessages: (userQuestion: string, robotAnswer: string) => void;
};

export const ChatInput = ({ addMessages }: Props) => {
  const [inputText, setInputText] = useState("");

  function saveInputText(
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const userQuestion = inputText.trim();
    if (userQuestion.length === 0) {
      alert("Please input a message.");
      return;
    }

    const response = Chatbot.getResponse(userQuestion);

    addMessages(userQuestion, response);

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
