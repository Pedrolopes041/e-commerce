import { FunctionComponent, useContext, useState } from "react";
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal,
} from "./checkout-styled";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item-component";
import CustomButton from "../custom-button/custom-button";
import { BsBagCheckFill } from "react-icons/bs";
import axios from "axios";
import Loading from "../loading/loading";

const Checkout: FunctionComponent = () => {
  const { productTotalPrice, products } = useContext(CartContext);
  const [isLoading, setIsLoading ] = useState(false)

  const handleFinishPurchaseClick = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/create-checkout-session`, {
          products
        }
      );
      window.location.href = data.url
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <CheckoutContainer>
        {isLoading && <Loading/>}
        <CheckoutTitle>Checkout</CheckoutTitle>
        {products.length > 0 ? (
          <>
            <CheckoutProducts>
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </CheckoutProducts>

            <CheckoutTotal>Total: R${productTotalPrice}</CheckoutTotal>

            <CustomButton startIcon={<BsBagCheckFill />} onClick={handleFinishPurchaseClick}>
              Finalizar Compra
            </CustomButton>
          </>
        ) : (
          <p>Seu Carrinho está vazio</p>
        )}
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
