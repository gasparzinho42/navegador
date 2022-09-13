import React from "react";
import { Container, Letter } from "./style";
import { letterObject } from "./types";

interface Props {
  letters: letterObject[];
  onClick: () => void;
  isSubLogo?: boolean;
}
const Logo: React.FC<Props> = ({ letters, onClick, isSubLogo }) => {
  return (
    <Container onClick={onClick}>
      {letters.map((letter, index) => (
        <Letter
          key={index}
          color={letter.color}
          isSubLogo={isSubLogo ? isSubLogo : false}
        >
          {letter.letter}
        </Letter>
      ))}
    </Container>
  );
};

export default Logo;
