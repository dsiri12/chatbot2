import React from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMessages } from "./components/ChatMessages";
import type { ChatMessageType } from "./types/ChatMessageType";

export const App = () => {
  const [chatMessages, setChatMessages] = React.useState<ChatMessageType[]>([
   
  ]);
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  const addMessages = (userQuestion: string, robotAnswer: string) => {
        const newChatMessages = [
      ...chatMessages,
      {
        message: userQuestion,
        sender: "user",
        id: new Date().getTime(),
      },
      {
        message: robotAnswer,
        sender: "robot",
        id: new Date().getTime() + 1,
      },
    ];

    setChatMessages(newChatMessages);
  }
  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />

      <ChatInput
        addMessages={addMessages}
      />
    </div>
  );
};
