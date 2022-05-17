import styled from "styled-components";

export const ChatFooterStyles = styled.div`
  background: #f0f2f5;
  height: 4rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .MessageActions {
    display: flex;
    gap: 0.4rem;
  }

  input {
    outline: none;
    border: none;
    background: #fff;
    border-radius: 3rem;
    text-align: left;
    width: 35rem;
    height: 2.4rem;
    padding-left: 1rem;
    font-size: 0.89rem;
  }
`;
