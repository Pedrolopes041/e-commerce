import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { useForm } from "react-hook-form";
import validator from "validator";
import {useState} from 'react'

// Components
import Header from "../../components/header/header.component";
import CustomButton from "../../components/custom-button/custom-button";
import CustomInput from "../../components/custom-input/custom-input";
import InputErrorMessage from "../../components/input-error/input-error";

// Styles
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./login.style";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { Googleprovider, auth, db } from "../../config/firebase.config";
import { AuthErrorCodes, AuthError } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

import {useNavigate} from 'react-router-dom'
import {useEffect, useContext} from 'react'
import { UserContext } from "../../contexts/user.context";
import Loading from "../../components/loading/loading";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>();

  const {isAuthenticated} = useContext(UserContext)

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

   useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
   }, [isAuthenticated])

  const handleSubmitPress = async (data: LoginForm) => {
    try {

      setIsLoading(true)

      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log({ userCredentials });
    } catch (error) {
      const _errors = error as AuthError;

      if (_errors.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError("password", { type: "mismatch" });
      }

      if (_errors.code === AuthErrorCodes.USER_DELETED) {
        return setError("email", { type: "notFound" });
      }
      console.log(error);
    }
    finally {
      setIsLoading(false)
    }
  };

  const handleSignInWithGoogle = async () => {
    try {

      setIsLoading(true)

      const userCredentials = await signInWithPopup(auth, Googleprovider);

      const querySnapshot = await getDocs(
        query(
          collection(db, 'users'),
          where('id', '==', userCredentials.user.uid)
        )
      )

      const user = querySnapshot.docs[0]?.data()

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(' ')[0]
        const lastName = userCredentials.user.displayName?.split(" ")[1];

        await addDoc(collection(db, 'users'), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          provider: 'Google'
        })
      }

    } catch (error) {

      console.log(error);
    }
    finally{
      setIsLoading(false)
    }
  };

  return (
    <>
      <Header />

      {isLoading && <Loading/>}

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButton
            startIcon={<BsGoogle size={18} />}
            onClick={handleSignInWithGoogle}
          >
            Entrar com o Google
          </CustomButton>

          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Digite seu e-mail"
              {...register("email", {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value);
                },
              })}
            />
            {errors?.email?.type === "required" && (
              <InputErrorMessage>O e-mail é obrigatório.</InputErrorMessage>
            )}

            {errors?.email?.type === "validate" && (
              <InputErrorMessage>Digite um e-mail válido</InputErrorMessage>
            )}

            {errors?.email?.type === "notFound" && (
              <InputErrorMessage>O e-mail não foi encontrado</InputErrorMessage>
            )}
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              type="password"
              {...register("password", { required: true })}
            />
            {errors?.password?.type === "required" && (
              <InputErrorMessage>A senha é obrigatoria</InputErrorMessage>
            )}

            {errors?.password?.type === "mismatch" && (
              <InputErrorMessage>A senha não corresponde</InputErrorMessage>
            )}
          </LoginInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Entrar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
