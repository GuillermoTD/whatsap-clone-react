import React from "react";
import { UserBoxStyles } from "./UserBoxStyles";
import donutIcon from "../../img/donut-large.svg";
import chatIcon from "../../img/chat.svg";
import moreIcon from "../../img/more-vert.svg";
const UserBox = () => {
  return (
    <UserBoxStyles>
      <div className="UserImage"></div>
      <div className="UserActions">
        <img src={donutIcon} alt="" />
        <img src={chatIcon} alt="" />
        <img src={moreIcon} alt="" />
      </div>
    </UserBoxStyles>
  );
};

export default UserBox;
