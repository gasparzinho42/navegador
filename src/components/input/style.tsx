import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const FakeInput = styled.div`
  width: 100%;
  padding: 5px 8px;
  background-color: transparent;
  border-left: 1px solid white;
`;
export const RealInput = styled.input`
  width: 100%;
  padding: 12px 8px;
  border: none;
  background-color: transparent;
  color: white;
  &::placeholder {
    color: whitesmoke;
  }
  // para galaxy Fold
  @media (max-width: 300px) {
    font-size: 7px;
    font-weight: 700;
  }
`;
