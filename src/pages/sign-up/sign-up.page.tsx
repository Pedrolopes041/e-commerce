import CustomButton from "../../components/custom-button/custom-button";
import CustomInput from "../../components/custom-input/custom-input";
import Header from "../../components/header/header.component";
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer,
} from "./sign-up.styles";

import { FiLogIn } from "react-icons/fi";

const SignUpPage = () => {
  return (
    <>
      <Header />
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie a sua Conta</SignUpHeadline>
          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput placeholder="Digite seu nome" />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput placeholder="Digite seu Sobrenome" />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput placeholder="Digite seu E-mail" />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput placeholder="Digite sua Senha" type="password" />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirmar senha</p>
            <CustomInput placeholder="Confirme sua senha" type="password" />
          </SignUpInputContainer>
          <CustomButton startIcon={<FiLogIn size={18}/>}>Criar Conta</CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  );
};

export default SignUpPage;
