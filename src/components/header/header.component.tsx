import React from "react";
import "./header.styles.css";
import { BsCart3 } from "react-icons/bs";
import { HeaderContainer } from "./header.style";

const Header = () => {
  return (
    <HeaderContainer>
      <h2 className="header-title">CLUB CLOTHING</h2>
      <div className="header-items">
        <div className="header-item">Explorar</div>
        <div className="header-item">Login</div>
        <div className="header-item">Criar Conta</div>
        <div className="header-item">
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
