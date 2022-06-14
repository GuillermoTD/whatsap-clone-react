import styled from "styled-components";

export const UserBoxStyles = styled.div`
  background: #f0f2f5;
  display: flex;
  justify-content: space-between;
  height: 3.4rem;
  align-items: center;
  padding: 0 1rem;

  .UserImage {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: lightblue;
  }

  .UserActions {
    display: flex;
    gap: 1rem;
    cursor: pointer;
  }
`;
