import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Category from "./Category";

const Categories = ({ clickHandler }) => {
  const [categories, setCategories] = useState([""]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories",
        { mode: "cors" },
      );
      const data = await response.json();
      data.unshift("all");
      setCategories(data);
    };
    fetchCategories();
  }, [categories]);

  const categoriesArray = categories.map((ele) => (
    <Category key={ele} name={ele} clickHandler={clickHandler} />
  ));

  return (
    <>
      <nav
        style={{
          margin: "1em 0",
          padding: "1em",
          border: "1px solid black",
          width: "150px",
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

Categories.propTypes = {
  clickHandler: PropTypes.func,
};

export default Categories;
