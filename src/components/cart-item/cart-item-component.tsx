import { FunctionComponent, useContext } from "react";

import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton,
} from "./cart-item-styled";

import Cart from "../../types/cart.types";
import { CartContext } from "../../contexts/cart.context";

interface CartItemProps {
  product: Cart;
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const { removeProductFromCart, increaseProductQuantity } =
    useContext(CartContext);

  const handleRemoveClick = () => {
    removeProductFromCart(product.id);
  };

  const handleIncreaseClick = () => {
    increaseProductQuantity(product.id);
  };

  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>{product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus size={20} />
          <p>{product.quanty}</p>
          <AiOutlinePlus size={20} onClick={handleIncreaseClick} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveClick}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  );
}

export default CartItem;
