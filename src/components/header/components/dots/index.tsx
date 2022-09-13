import React, { useState } from "react";
import DotsImage from "../../../../assets/icons/dots.svg";
import youtube from "../../../../assets/icons/youtube.svg";
import maps from "../../../../assets/icons/maps.svg";
import meet from "../../../../assets/icons/meet.svg";
import Modal from "../../../modal";
import ModalItem, { itemProps } from "../../../modal/components/modalItem";
import { Dots, Container } from "./style";
// import { Container } from './styles';

const DotsMenu: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const items: itemProps[] = [
    { imageUrl: meet, text: "Meet", url: "https://meet.google.com" },
    { imageUrl: youtube, text: "Youtube", url: "https://youtube.com" },
    { imageUrl: maps, text: "Maps", url: "https://www.google.com.br/maps" },
  ];
  return (
    <>
      <Container
        onBlur={() => openModal && setOpenModal(false)}
        onFocus={() => !openModal && setOpenModal(true)}
      >
        <Dots src={DotsImage} alt="dots" />
        {openModal && (
          <Modal>
            <div style={{ display: "flex" }}>
              {items.map((item, index) => (
                <ModalItem
                  key={index}
                  imageUrl={item.imageUrl}
                  text={item.text}
                  url={item.url}
                />
              ))}
            </div>
          </Modal>
        )}
      </Container>
    </>
  );
};

export default DotsMenu;
