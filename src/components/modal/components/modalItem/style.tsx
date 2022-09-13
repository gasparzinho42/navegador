import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 5px;
`;
export const ItemText = styled.span`
  color: white;
  text-align: center;
  font-family: "Raleway", sans-serif;
  & a {
    text-decoration: none;
  }
`;
export const ItemImage = styled.div`
  height: 20px;
  width: 20px;
`;
