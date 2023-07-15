import { useEffect, useState } from "react";
import {getDocs, collection, doc} from 'firebase/firestore'

// Utilities
import Category from "../../types/category.types";
import CategoryItem from '../category-item/category-item.component';

// Styles
import "./categories.styles.css";
import { CategoriesContainer, CategoriesContent } from "./categories.style";
import { db } from "../../config/firebase.config";
import { categoryConverter } from "../../converte/firestore.converte";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {

      const categoriesFromFirestore: Category[] = []

      const querySnapshot = await getDocs(collection(db, "categories").withConverter(categoryConverter));

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data());
      });

      setCategories(categoriesFromFirestore)

    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContainer>
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
