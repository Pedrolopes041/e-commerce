import Category from "../../types/category.types";
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer,
} from "../category-overview/category-overview-styled";

import {FunctionComponent} from 'react'
import ProductItem from "../product/product-item-component";

interface CategoryOverviewProps {
  category: Category
}

const CategorytOverview: FunctionComponent<CategoryOverviewProps> = ({category}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>
      <ProductsContainer>{category.products.slice(0,4).map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}</ProductsContainer>
    </CategoryContainer>
  )
}

export default CategorytOverview;
