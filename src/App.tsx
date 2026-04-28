import React from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMessages } from "./components/ChatMessages";
import type { ChatMessageType } from "./types/ChatMessageType";

export const App = () => {
  const [chatMessages, setChatMessages] = React.useState<ChatMessageType[]>([
    {
      message: "hello chatbot2",
      sender: "user",
      id: 1,
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: 2,
    },
    {
      message: "can you get me todays date?",
      sender: "user",
      id: 3,
    },
    {
      message: "Today is September 27",
      sender: "robot",
      id: 4,
    },
  ]);
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
};
