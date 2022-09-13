import React, { useEffect, useState } from "react";
import Logo from "../logo";
import { letterObject } from "../logo/types";
import { Container, FakeInput, RealInput } from "./style";

interface inputProps {
  isImages?: boolean;
}
const Input: React.FC<inputProps> = ({ isImages }) => {
  const [logoInfo, setLogo] = useState<letterObject[]>([]);
  const [subLogoInfo, setSubLogo] = useState<letterObject[]>([]);
  const [value, setValue] = useState<string>("");
  const logoLetters = ["G", "O", "O", "G", "L", "E"];
  const subLogoLetters = ["I", "M", "A", "G", "E", "S"];

  // descomentar pra ativar cores totalmente aleatórias
  //   const colorRandomizer = () => {
  //     const hex: string[] = [];
  //     for (let index = 0; index < 6; index++) {
  //       const hexadecimals = [
  //         "0",
  //         "1",
  //         "2",
  //         "3",
  //         "4",
  //         "5",
  //         "6",
  //         "7",
  //         "8",
  //         "9",
  //         "A",
  //         "B",
  //         "C",
  //         "D",
  //         "E",
  //         "F",
  //       ];
  //       const randomindex = Math.floor(Math.random() * 16);
  //       hex.push(hexadecimals[randomindex]);
  //     }
  //     hex.unshift("#");
  //     return hex.join("");
  //   };
  const colorRandomizer = () => {
    const hexadecimals = ["#4285f4", "#0f9D58", "#f4b400", "#DB4437"];
    const randomindex = Math.floor(Math.random() * hexadecimals.length);
    return hexadecimals[randomindex];
  };
  const loadLogoLetters = () => {
    if (isImages) {
      const result = subLogoLetters.map((letter) => {
        return {
          letter: letter,
          color: colorRandomizer(),
        };
      });
      setSubLogo(result);
    }
    const result = logoLetters.map((letter) => {
      return {
        letter: letter,
        color: colorRandomizer(),
      };
    });
    setLogo(result);
  };

  const handleSubmit = (key: string) => {
    if (key === "Enter") {
      window.open("http://google.com/search?q=" + value, "_self");
    }
  };

  useEffect(() => {
    loadLogoLetters();
    // eslint-disable-next-line
  }, []);
  return (
    <Container>
      <Logo onClick={loadLogoLetters} letters={logoInfo} />
      {isImages && (
        <Logo onClick={loadLogoLetters} letters={subLogoInfo} isSubLogo />
      )}
      <FakeInput>
        <RealInput
          placeholder="O que vamos descobrir hoje?..."
          type="text"
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
          onKeyDown={(evt) => handleSubmit(evt.code)}
        />
      </FakeInput>
    </Container>
  );
};

export default Input;
