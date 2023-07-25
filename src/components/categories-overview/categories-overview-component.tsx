import React, { useEffect, useState } from "react";
import {FunctionComponent, useContext} from 'react'
import {Container} from "./categories-overview";
import { CategoryContext } from '../../contexts/category.context'
import CategorytOverview from "../category-overview/category-overview-component";
import Loading from "../../components/loading/loading";

const CategoriesOverview: FunctionComponent = () => {
  const { categories, fetchCategories,isLoading } = useContext(CategoryContext);

  useEffect (() => {
    fetchCategories()
  }, [])

  if (isLoading) return <Loading/>

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