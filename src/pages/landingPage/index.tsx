import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Input from "../../components/input";
import { Wrapper } from "./style";

const LandingPage: React.FC = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Header />
        <Input />
        <Footer />
      </Wrapper>
    </React.Fragment>
  );
};

export default LandingPage;
