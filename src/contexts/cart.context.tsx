import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useMemo,
  useState,
} from "react";

import Cart from "../types/cart.types";
import Product from "../types/product.types";

// o que vai ter na nossa aplicação ?
interface ICartContext {
  isVisible: boolean;
  products: Cart[];
  productTotalPrice: number
  toggleCart: () => void;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
}
// add as informações ao nosso context
export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  productTotalPrice: 0,
  toggleCart: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {}
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
    // verifica se o produto ja esta no carrinho
    const productIsAlreadyInCart = products.some(
      (item) => item.id === product.id
    );
    //se sim -> aumenta sua quantidade
    if (productIsAlreadyInCart) {
      return setProducts((products) =>
        products.map((item) =>
          item.id === product.id ? { ...item, quanty: item.quanty + 1 } : item
        )
      );
    }

    //senão -> adciona o produto
    setProducts((prevState) => [...prevState, { ...product, quanty: 1 }]);
  };

  // Define uma função chamada `removeProductFromCart` que recebe um parâmetro chamado `productId` do tipo `string`.
  const removeProductFromCart = (productId: string) => {
    // Chama a função `setProducts` para atualizar o estado de `products`.
    setProducts((products) =>
      // Filtra a lista de produtos para manter apenas aqueles cujo ID é diferente do valor passado para `productId`.
      products.filter((product) => product.id !== productId)
    );
  };

  const increaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products.map((product) =>
        product.id === productId
          ? { ...product, quanty: product.quanty + 1 }
          : product
      )
    );
  };

  const decreaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products.map((product) =>
        product.id === productId
          ? { ...product, quanty: product.quanty - 1 }
          : product
      )
      .filter((product) => product.quanty > 0)
    );
  }

  const productTotalPrice = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.quanty
    }, 0)
  }, [products])

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        productTotalPrice,
        toggleCart,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
