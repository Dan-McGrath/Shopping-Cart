import Slider from "react-slick";
import { useState, useEffect } from "react";
import Card from "../Card";

const Recommendation = () => {
  const [productArray, setProductArray] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    className: "item",
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=7",
        { mode: "cors" },
      );
      const data = await response.json();
      setProductArray(data);
    };
    fetchProducts();
  }, []);

  const products = productArray.map((ele) => (
    <Card
      style={{ margin: "10em auto" }}
      key={ele.id}
      id={ele.id}
      title={ele.title}
      price={ele.price}
      category={ele.category}
      description={ele.description}
      image={ele.image}
    />
  ));

  return (
    <>
      <section className="recommendations">
        <h2>Recommendations</h2>
        <div className="wrapper">
          <Slider {...settings} style={{ margin: "1em auto", padding: "1em" }}>
            {products}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Recommendation;
