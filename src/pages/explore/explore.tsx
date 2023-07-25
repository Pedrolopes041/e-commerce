import { FunctionComponent } from "react";
import Header from "../../components/header/header.component";
import CategoriesOverview from "../../components/category.overview/category-overview-component";

const ExplorePage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <CategoriesOverview />
    </>
  );
};

export default ExplorePage;
