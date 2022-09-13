import styled from "styled-components";
interface letterProps {
  color: string;
}
export const Container = styled.div`
  margin-bottom: 20px;
`;
export const Letter = styled.span<letterProps>`
  color: white;
  font-size: 60px;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  font-weight: normal;
  user-select: none;
  text-shadow: 9px -9px ${(p) => `${p.color}`};
`;
