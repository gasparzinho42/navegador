import React from "react";
import DotsMenu from "../dots";
import { CustomHeader } from "./style";

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <CustomHeader>
      <span>
        <a href="http://https://mail.google.com/mail/?authuser=0&ogbl">Gmail</a>
      </span>
      <span>
        <a href="http://https://www.google.com.br/imghp?hl=pt-BR&authuser=0&ogbl">
          Imagens
        </a>
      </span>
      <DotsMenu />
    </CustomHeader>
  );
};

export default Header;
