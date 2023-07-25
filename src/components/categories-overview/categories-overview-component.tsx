import React, { useEffect } from "react";
import {FunctionComponent, useContext} from 'react'
import {Container} from "./categories-overview";
import { CategoryContext } from '../../contexts/category.context'
import CategorytOverview from "../category-overview/category-overview-component";

const CategoriesOverview: FunctionComponent = () => {
  const { categories, fetchCategories } = useContext(CategoryContext);

  useEffect (() => {
    fetchCategories()
  }, [])

  return (
    <>
      <Container>
        {categories.map((category) => (
          <CategorytOverview key={category.id} category={category}/>
        ))}
      </Container>
    </>
  );
};

export default CategoriesOverview;