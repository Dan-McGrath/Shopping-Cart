import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories",
        { mode: "cors" },
      );
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, [categories]);

  const categoriesArray = categories.map((ele) => (
    <Category key={ele} name={ele} />
  ));

  return (
    <>
      <nav>
        <ul>{categoriesArray}</ul>
      </nav>
    </>
  );
};

export default Categories;
