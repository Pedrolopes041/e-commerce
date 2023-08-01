import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import Cart from "../types/cart.types";
import Product from "../types/product.types";
import { json } from "stream/consumers";

// o que vai ter na nossa aplicação ?
interface ICartContext {
  isVisible: boolean;
  products: Cart[];
  productTotalPrice: number
  productsCount: number 
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
  productsCount: 0,
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

  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem("cartProducts")!
    );

    setProducts(productsFromLocalStorage);

  }, [])

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(products))
  }, [products])

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
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }

    //senão -> adciona o produto
    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }]);
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
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  }

  const productTotalPrice = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.quantity;
    }, 0)
  }, [products])

  const productsCount = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.quantity;
    },0);
  }, [products])

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        productTotalPrice,
        productsCount,
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
