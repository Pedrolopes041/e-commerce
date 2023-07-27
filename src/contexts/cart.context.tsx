import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useState,
} from "react";

import Cart from "../types/cart.types";

// o que vai ter na nossa aplicação ?
interface ICartContext {
  isVisible: boolean;
  products: Cart[];
  toggleCart: () => void;
}
// add as informações ao nosso context
export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
});
//criando o provider
const CartContextProvider: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [products] = useState<Cart[]>([]);

  const toggleCart = () => {
    //ta pegando o state anterior que é false 
    setIsVisible((previsible) => !previsible);
  };

  return (
    <CartContext.Provider value={{ isVisible,products,toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
