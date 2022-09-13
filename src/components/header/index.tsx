import React from "react";
import DotsMenu from "./components/dots";
import { CustomHeader } from "./style";
import { Link } from "react-router-dom";

// import { Container } from './styles';
interface headerProps {
  isImages?: boolean;
}
const Header: React.FC<headerProps> = ({ isImages }) => {
  return (
    <CustomHeader>
      {!isImages && (
        <React.Fragment>
          <span className="headerItem">
            <a href="https://mail.google.com">Gmail</a>
          </span>
          <span className="headerItem">
            <Link to={"/images"}>Imagens</Link>
          </span>
        </React.Fragment>
      )}
      <DotsMenu />
    </CustomHeader>
  );
};

export default Header;
