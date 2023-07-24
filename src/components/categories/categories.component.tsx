import { useContext, useEffect, useState } from "react";

// Utilities
import Category from "../../types/category.types";
import CategoryItem from '../category-item/category-item.component';

// Styles
import "./categories.styles.css";
import { CategoriesContainer, CategoriesContent } from "./categories.style";
import { CategoryContext } from "../../contexts/category.context";
import Loading from "../loading/loading";

const Categories = () => {

  const {categories, fetchCategories, isLoading} = useContext(CategoryContext)

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContainer>
      {isLoading && <Loading/>}
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
};

export default Categories;
