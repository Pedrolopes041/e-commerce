import { CartContext } from '../../contexts/cart.context'
import Product from '../../types/product.types'
import CustomButton from '../custom-button/custom-button'
import {ProductContainer,ProductImage,ProductInfo} from '../product/product-item-styled'
import {FunctionComponent, useContext} from 'react'
import {BsCartPlus} from 'react-icons/bs'

interface ProductItemProp {
    product: Product
}

const ProductItem: FunctionComponent<ProductItemProp> = ({product}) => {

  const {addProductToCart} = useContext(CartContext)

  const handleAddToCartClick = () => {
    addProductToCart(product)
  }

    return (
      <ProductContainer>
        <ProductImage imageUrl={product.imageUrl}>
          <CustomButton startIcon={<BsCartPlus/>} onClick={handleAddToCartClick}>Adicionar ao carrinho</CustomButton>
        </ProductImage>

        <ProductInfo>
          <p>{product.name}</p>
          <p>R${product.price}</p>
        </ProductInfo>
      </ProductContainer>
    );
}

export default ProductItem;