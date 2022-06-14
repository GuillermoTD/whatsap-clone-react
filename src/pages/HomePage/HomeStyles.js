import styled from "styled-components";
import bg from "../../img/pattern.png";
export const HomeStyles = styled.div`
  width: 80%;
  height: 90vh;
  display: flex;
  overflow-x: hidden;
  margin-top: 0.8rem;
  box-shadow: 4px 4px 10px 2px #0004;
  position: relative;
`;

export const SideBar = styled.div`
  background: #fff;
  width: 28rem;
  overflow: hidden;
  height: 100%;
  border-right: 1px solid #0002;
  position: relative;
`;

export const ChatContainer = styled.div`
  /* background: #f0f2f5; */
  background: url(${bg});
  background-position: center;
  background: #f0f2f5;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;
