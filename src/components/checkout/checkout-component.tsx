import { FunctionComponent, useContext } from "react";
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

const Checkout: FunctionComponent = () => {
  const { productTotalPrice, products } = useContext(CartContext);
  return (
    <>
      <CheckoutContainer>
        <CheckoutTitle>Checkout</CheckoutTitle>
        {products.length > 0 ? (
          <>
            <CheckoutProducts>
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </CheckoutProducts>

            <CheckoutTotal>Total: R${productTotalPrice}</CheckoutTotal>

            <CustomButton startIcon={<BsBagCheckFill />}>
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
