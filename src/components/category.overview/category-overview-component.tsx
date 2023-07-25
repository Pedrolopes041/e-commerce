import React, { useEffect } from "react";
import {FunctionComponent, useContext} from 'react'
import {Container} from "./category.overview";
import { CategoryContext } from '../../contexts/category.context'

const CategoriesOverview: FunctionComponent = () => {
  const { categories, fetchCategories } = useContext(CategoryContext);

  useEffect (() => {
    fetchCategories()
  }, [])

  return (
    <>
      <Container>
        {categories.map((category) => (
          <p key={category.id}>{category.displayName}</p>
        ))}
      </Container>
    </>
  );
};

export default CategoriesOverview;