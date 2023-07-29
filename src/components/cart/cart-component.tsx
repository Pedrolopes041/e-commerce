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

import {FunctionComponent, useContext} from 'react'
import {BsCartCheck} from 'react-icons/bs'

const Cart:FunctionComponent = () => {

    const {isVisible,toggleCart, products,productTotalPrice} = useContext(CartContext)

    return (
        <CartContainer isVisible={isVisible}>
            <CartEscapeArea onClick={toggleCart}/>
            <CartContent>
                <CartTitle>Seu Carrinho</CartTitle>

                {products.map((product) => (
                    <CartItem key={product.id} product={product}/>
                ))}

                <CartTotal>Total: R${productTotalPrice}</CartTotal>
                <CustomButton startIcon={<BsCartCheck />}>
                    Ir para o Chekout
                </CustomButton>
            </CartContent>
        </CartContainer>
    )
}

export default Cart