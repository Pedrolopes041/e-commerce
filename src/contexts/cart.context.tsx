import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useState,
} from "react";

import Cart from "../types/cart.types";
import Product from "../types/product.types";

// o que vai ter na nossa aplicação ?
interface ICartContext {
  isVisible: boolean;
  products: Cart[];
  toggleCart: () => void;
  addProductToCart: (product: Product) => void
}
// add as informações ao nosso context
export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {}
});
//criando o provider
const CartContextProvider: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<Cart[]>([]);

  const toggleCart = () => {
    //ta pegando o state anterior que é false 
    setIsVisible((prevState) => !prevState);
  };

  const addProductToCart = (product: Product) => {
    setProducts((prevState) => [...prevState, {...product, quanty: 1}]);
  }

  return (
    <CartContext.Provider
      value={{ isVisible, products, toggleCart, addProductToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
