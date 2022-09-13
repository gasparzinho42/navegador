import React from "react";
import { Container, Letter } from "./style";
import { letterObject } from "./types";

interface Props {
  letters: letterObject[];
  onClick: () => void;
}
const Logo: React.FC<Props> = ({ letters, onClick }) => {
  return (
    <Container onClick={onClick}>
      {letters.map((letter, index) => (
        <Letter key={index} color={letter.color}>
          {letter.letter}
        </Letter>
      ))}
    </Container>
  );
};

export default Logo;
