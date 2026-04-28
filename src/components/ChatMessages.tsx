import React from "react";
import { ChatMessage } from "./ChatMessage";
import type { ChatMessageType } from "../types/ChatMessageType";

type Props = {
  chatMessages: ChatMessageType[]
}
export const ChatMessages = ({ chatMessages }: Props) => {
  const chatMessagesRef = React.useRef(null);

  // React.useEffect(() => {
  //   const messageContainerElem = chatMessagesRef.current;
  //   if (messageContainerElem) {
  //     messageContainerElem.scrollTop = messageContainerElem.scrollHeight;
  //   }
  // }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
};
