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
import { useForm } from 'react-hook-form';

const SignUpPage = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const handleSubimitPress = (data: any) => {
    console.log({data});
  }

  return (
    <>
      <Header />
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie a sua Conta</SignUpHeadline>
          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors?.nome}
              placeholder="Digite seu nome"
              {...register("nome", { required: true })}
            />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors?.sobrenome}
              placeholder="Digite seu Sobrenome"
              {...register("sobrenome", { required: true })}
            />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Digite seu E-mail"
              {...register("email", { required: true })}
            />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.senha}
              placeholder="Digite sua Senha"
              type="password"
              {...register("senha", { required: true })}
            />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirmar senha</p>
            <CustomInput
              hasError={!!errors?.confirme}
              placeholder="Confirme sua senha"
              type="password"
              {...register("confirme", { required: true })}
            />
          </SignUpInputContainer>
          <CustomButton
            startIcon={
              <FiLogIn
                size={18}
                onClick={() => handleSubmit(handleSubimitPress)()}
              />
            }
          >
            Criar Conta
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  );
};

export default SignUpPage;
