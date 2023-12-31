import "./header.styles.css";

import { BsCart3 } from "react-icons/bs";

import { HeaderContainer, HeaderTitle, HeaderItems, HeaderItem } from "./header.style";

import {useNavigate} from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

const Header = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }
  const handleHomeClick = () => {
    navigate('/')
  }
  const handleSignClick = () => {
    navigate("/sign");
  };

  const handleExplore = () => {
    navigate("/explore")
  }

  const {isAuthenticated} = useContext(UserContext)
  const {toggleCart, productsCount} = useContext(CartContext)

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleHomeClick}>CLUB CLOTHING</HeaderTitle>
      <HeaderItems>
        <HeaderItem onClick={handleExplore}>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignClick}>Criar Conta</HeaderItem>
          </>
        )}
        {isAuthenticated && (
          <>
            <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
          </>
        )}
        <HeaderItem onClick={toggleCart}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
