import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  background-color: transparent;
  cursor: pointer;
  &:focus {
    background-color: gray;
  }
`;

export const Dots = styled.img`
  color: white;
`;
