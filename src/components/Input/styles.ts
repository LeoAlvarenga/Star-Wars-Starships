import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  border-radius: 10px;
  border: 2px solid yellow;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: yellow;
    text-align: right;
    outline: none;

    &::placeholder {
      color: yellow;
      text-align: center;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      display: none;
    }
  }
`;
