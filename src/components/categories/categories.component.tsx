import { useEffect, useState } from "react";
import axios from "axios";

// Utilities
import Category from "../../types/category.types";
import CategoryItem from '../category-item/category-item.component';

// Styles
import "./categories.styles.css";
import env from "../../config/env.config";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`);

      setCategories(data);
      
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="categories-container">
      <div className="categories-content">
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
