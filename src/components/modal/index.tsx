import React from "react";
import { Container } from "./style";

// import { Container } from './styles';
interface modalProps {
  children: React.ReactElement;
}
const Modal: React.FC<modalProps> = ({ ...Props }) => {
  return <Container>{Props.children}</Container>;
};

export default Modal;
