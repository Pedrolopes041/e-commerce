import Category from "../../types/category.types";
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer,
} from "../category-overview/category-overview-styled";

import {FunctionComponent} from 'react'

interface CategoryOverviewProps {
  category: Category
}

const CategorytOverview: FunctionComponent<CategoryOverviewProps> = ({category}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>
      <ProductsContainer></ProductsContainer>
    </CategoryContainer>
  )
}

export default CategorytOverview;
