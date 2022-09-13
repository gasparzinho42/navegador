import styled from "styled-components";
interface letterProps {
  color: string;
  isSubLogo: boolean;
}
export const Container = styled.div`
  margin-bottom: 20px;
`;
export const Letter = styled.span<letterProps>`
  color: white;
  font-size: ${(p) => (p.isSubLogo ? "2em" : "10em")};
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  font-weight: normal;
  user-select: none;
  text-shadow: 9px -9px ${(p) => `${p.color}`};

  @media (max-width: 700px) {
    font-size: 5em;
  }
  // para galaxy Fold
  @media (max-width: 300px) {
    font-size: ${(p) => (p.isSubLogo ? "1em" : "2em")};
  }
`;
