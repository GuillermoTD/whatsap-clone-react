import styled from "styled-components";
import bg from "../../img/pattern.png";

export const ChatBodyStyles = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: url(${bg});
  background-attachment: fixed;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    display: block;
    position: absolute;
    background: #0001;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .Chat_Message {
    /* background: #fff; */
    background: lightgreen;
    width: 10rem;
    height: 2.5rem;
    margin-top: 2rem;
    word-break: normal;
    overflow: hidden;
    border-radius: 10px 10px 10px 0;
    margin-left: 1rem;
    padding-left: 1rem;
    display: flex;
    align-items: center;
  }
  .Chat_Message_Receiver {
    position: absolute;
    top: 5rem;
    right: 0;
    margin-right: 1rem;
    border-radius: 10px 10px 0 10px;
  }
`;
