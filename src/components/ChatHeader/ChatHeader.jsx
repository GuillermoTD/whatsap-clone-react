import { ChatHeaderStyles } from "./ChatHeaderStyles";
import UserImg from "../../img/user1.jpg";
import SearchIcon from "../../img/search.svg";
import MoreIcon from "../../img/more-vert.svg";
import ClipIcon from "../../img/clip.svg";
const ChatHeader = () => {
  return (
    <ChatHeaderStyles>
      <div className="ChatInfo">
        <div className="ChatInfo_Img">
          <img src={UserImg} alt="" />
        </div>

        <div className="Chat_UserDescription">
          <span className="ChatName">Fulanito Fernandez</span>
          <span>En linea</span>
        </div>

        <div className="ChatActions">
          <img src={SearchIcon} alt="" />
          <img src={ClipIcon} alt="" />
          <img src={MoreIcon} alt="" />
        </div>
      </div>
    </ChatHeaderStyles>
  );
};

export default ChatHeader;
