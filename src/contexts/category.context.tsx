import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useState,
} from "react";

import Category from "../types/category.types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.config";
import { categoryConverter } from "../converte/firestore.converte";

interface ICategoryContext {
  isLoading: boolean
  categories: Category[];
  fetchCategories: () => Promise<void>;
}


export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCategories: () => Promise.resolve(),
  isLoading: false
});

const CategoryContextProvider: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    try {

        setIsLoading(true)

      const categoriesFromFirestore: Category[] = [];

      const querySnapshot = await getDocs(
        collection(db, "categories").withConverter(categoryConverter)
      );

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data());
      });

      setCategories(categoriesFromFirestore);
    } catch (error) {
      console.log({ error });
    }
    finally{
        setIsLoading(false);
    }
  };

  return (
    <CategoryContext.Provider
      value={{ categories, fetchCategories, isLoading }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
