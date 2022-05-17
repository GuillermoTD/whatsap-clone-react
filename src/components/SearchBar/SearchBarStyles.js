import styled from "styled-components";

export const SearchBarStyles = styled.div`
  background: #fff;
  width: 100%;
  height: 3.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .SearchBarBox {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f2f5;
    padding-left: 1rem;
    width: 90%;
    border-radius: 5px;

    input {
      background: none;
      padding: 0.3rem 3.5rem;
      border: none;
      position: relative;
      left: -2rem;
    }
    svg {
      width: 2rem;
      height: 2rem;
      position: absolute;
    }
  }
`;
