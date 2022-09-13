import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Input from "../../components/input";
import { Wrapper } from "./style";

const GoogleImages: React.FC = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Header isImages />
        <Input isImages />
        <Footer />
      </Wrapper>
    </React.Fragment>
  );
};

export default GoogleImages;
