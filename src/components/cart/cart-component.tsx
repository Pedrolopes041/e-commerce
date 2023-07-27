import { CartContext } from "../../contexts/cart.context";
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

    const {isVisible,toggleCart} = useContext(CartContext)

    return (
        <CartContainer isVisible={isVisible}>
            <CartEscapeArea onClick={toggleCart}/>
            <CartContent>
                <CartTitle>Seu Carrinho</CartTitle>
                <CartTotal>Total: R$1899</CartTotal>
                <CustomButton startIcon={<BsCartCheck />}>
                    Ir para o Chekout
                </CustomButton>
            </CartContent>
        </CartContainer>
    )
}

export default Cart