import CustomButton from "../../components/custom-button/custom-button";
import Header from "../../components/header/header.component";
import './login.style'
import { LoginContainer, LoginContent, LoginInputContainer, LoginSubtitle } from "./login.style";
import {BsGoogle} from 'react-icons/bs'
import {FiLogIn} from 'react-icons/fi'

const Login = () => {
    return (
      <>
        <Header />
        <LoginContainer>
          <LoginContent>
            <LoginSubtitle>Entre com a sua Conta</LoginSubtitle>

            <CustomButton startIcon={<BsGoogle size={18}/>}>Entrar com o Google</CustomButton>

            <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

            <LoginInputContainer>{/* email input */}</LoginInputContainer>
            <LoginInputContainer>{/* password input */}</LoginInputContainer>

            <CustomButton startIcon={<FiLogIn size={18}/>}>Entrar</CustomButton>
          </LoginContent>
        </LoginContainer>
      </>
    );
}

export default Login;