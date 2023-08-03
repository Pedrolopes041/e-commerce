import { FunctionComponent, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome,
} from "react-icons/ai";

// Styles
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent,
} from "./payment.styled";

// Components
import Header from "../../components/header/header.component";

// Utilities
import Colors from "../../theme/theme.color";
import CustomButton from "../../components/custom-button/custom-button";
import { CartContext } from "../../contexts/cart.context";

const PaymentConfirmationPage: FunctionComponent = () => {

  const [searchParams] = useSearchParams();

  const status = searchParams.get("success");
  const isCanceled = searchParams.get("canceled") === "true";

  const {clearCart} = useContext(CartContext)
  
  const navigate = useNavigate();

  const handleGoToHomePageClick = () => {
    navigate("/");
  };

  useEffect (() => {
    if (status === 'true') {
      clearCart()
    }
  }, [status])

  return (
    <>
      <Header />
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {status === "true" && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.success} />
              <p>Sua compra foi finalizada com sucesso!</p>
            </>
          )}

          {(status === "false" || isCanceled) && (
            <>
              <AiOutlineCloseCircle size={120} color={Colors.error} />
              <p>
                Ocorreu um erro ao finalizar sua compra. Por favor, tente
                novamente.
              </p>
            </>
          )}

          <CustomButton
            startIcon={<AiOutlineHome />}
            onClick={handleGoToHomePageClick}
          >
            Ir para a Página Inicial
          </CustomButton>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  );
};

export default PaymentConfirmationPage;
