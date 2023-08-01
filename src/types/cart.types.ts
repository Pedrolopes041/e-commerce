import Product from "./product.types";

interface Cart extends Product {
  quantity: number;
}

export default Cart