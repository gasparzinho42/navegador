import React from "react";

import { Container, ItemText, ItemImage } from "./style";
export interface itemProps {
  imageUrl: string | undefined;
  text: string;
}
const ModalItem: React.FC<itemProps> = ({ imageUrl, text }) => {
  return (
    <Container>
      <ItemImage>
        <img src={imageUrl} alt="icon" />
      </ItemImage>
      <ItemText>{text}</ItemText>
    </Container>
  );
};

export default ModalItem;
