import { ChatInput } from './components/ChatInput'
import { ChatMessage } from './components/ChatMessage';

export const App = () => {
  return ( 
    <>
      <ChatInput />
      
      <ChatMessage message="hello chatbot2" sender="user" />
      <ChatMessage message='Hello! How can I help you?' sender='robot' />
      <ChatMessage message='can you get me todays date?' sender='user' />
      <ChatMessage message='Today is September 27' sender='robot' />
    </>
  );
}
 