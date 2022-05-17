import { ChatFooterStyles } from "./ChatFooterStyles";
import EmojiIcon from "../../img/emoticon.svg";
import ClipIcon from "../../img/clip.svg";
import MicIcon from "../../img/mic.svg";
const ChatFooter = () => {
  return (
    <ChatFooterStyles>
      <div className="MessageActions">
        <img src={EmojiIcon} alt="" />
        <img src={ClipIcon} alt="" />
      </div>
      <input type="text" placeholder="Escribe un mensaje" />
      <img src={MicIcon} alt="" />
    </ChatFooterStyles>
  );
};

export default ChatFooter;
