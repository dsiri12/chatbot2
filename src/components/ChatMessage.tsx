type Props = {
  message: string;
  sender: string;
};

export const ChatMessage = ({message, sender}: Props) => {
  return (
    <div>
      {sender === "robot" &&  <img src="robot.png" width={50} />}

      {message}

       {sender === "user" &&  <img src="user.png" width={50} />}
    </div>
  );
};
