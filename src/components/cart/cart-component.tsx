import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item-component";
import CustomButton from "../custom-button/custom-button";
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal,
} from "./cart-styled";

import { FunctionComponent, useContext } from "react";
import { BsCartCheck, BsFillHandbagFill } from "react-icons/bs";

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart, products, productTotalPrice, productsCount } =
    useContext(CartContext);

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {productsCount > 0 && (
          <>
            <CartTotal>Total: R${productTotalPrice}</CartTotal>
            <CustomButton startIcon={<BsCartCheck />}>
              Ir para o Chekout
            </CustomButton>
          </>
        )}

        {productsCount === 0 && (
            <p><BsFillHandbagFill/> Seu Carrinho está vazio</p>
        )}

      </CartContent>
    </CartContainer>
  );
};

export default Cart;
