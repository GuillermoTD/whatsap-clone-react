import { ChatBodyStyles } from "./ChatBodyStyles";

const ChatBody = () => {
  return (
    <ChatBodyStyles>
      <div className="Chat_Message Chat_Message_Sender">klk mio</div>

      <div className="Chat_Message Chat_Message_Receiver">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, fugiat.
        </p>
      </div>
    </ChatBodyStyles>
  );
};

export default ChatBody;
