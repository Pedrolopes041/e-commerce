import Product from '../../types/product.types'
import {ProductContainer,ProductImage,ProductInfo} from '../product/product-item-styled'
import {FunctionComponent} from 'react'

interface ProductItemProp {
    product: Product
}

const ProductItem: FunctionComponent<ProductItemProp> = ({product}) => {
    return (
        <ProductContainer>
            <ProductImage imageUrl={product.imageUrl}/>

            <ProductInfo>
                <p>{product.name}</p>
                <p>R${product.price}</p>
            </ProductInfo>
        </ProductContainer>
    )
}

export default ProductItem;