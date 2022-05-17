import styled from "styled-components";

export const ChatHeaderStyles = styled.div`
  display: flex;
  background: #f0f2f5;
  padding-left: 0.7rem;
  height: 4rem;
  border-bottom: 1px solid #0001;

  .ChatInfo {
    display: flex;
    align-items: center;
    gap: 1rem;

    .ChatInfo_Img {
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      overflow: hidden;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    .Chat_UserDescription {
      display: flex;
      flex-direction: column;
    }
    .ChatActions {
      display: flex;
      gap: 1rem;
      margin-left: 26rem;
    }
  }
`;
