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
      <nav
        style={{
          margin: "1em 0",
          padding: "1em",
          border: "1px solid black",
          width: "150px",
          cursor: "pointer",
          height: "80vh",
          display: "flex",
          position: "absolute",
          top: "15%",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "100%",
          }}
        >
          {categoriesArray}
        </ul>
      </nav>
    </>
  );
};

export default Categories;
