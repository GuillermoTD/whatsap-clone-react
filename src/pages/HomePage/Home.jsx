import React from "react";
import { HomeStyles, SideBar, ChatContainer } from "./HomeStyles";
import UserBox from "../../components/UserBox/UserBox";
import SearchBar from "../../components/SearchBar/SearchBar";
import ChatsBox from "../../components/ChatsBox/ChatsBox";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import ChatBody from "../../components/ChatBody/ChatBody";
import ChatFooter from "../../components/ChatFooter/ChatFooter";
const Home = () => {
  return (
    <HomeStyles>
      <SideBar>
        <UserBox />
        <SearchBar />
        <ChatsBox />
      </SideBar>
      <ChatContainer>
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
      </ChatContainer>
    </HomeStyles>
  );
};
export default Home;
