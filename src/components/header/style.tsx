import styled from "styled-components";

export const CustomHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 10px 14px;
  & a {
    text-decoration: overline;
    color: white;
    font-weight: 100;
  }
  & .headerItem {
    margin-right: 25px;
  }
`;
export const Dots = styled.img`
  color: white;
`;
