import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import Card from "../Card";

const Recommendation = () => {
  const [productArray, setProductArray] = useState([]);
  const settings = {
    infiniteLoop: true,
    autoPlay: false,
    stopOnHover: true,
    swipeable: true,
    showThumbs: false,
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
      key={ele.id}
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
          <Carousel {...settings}>{products}</Carousel>
        </div>
      </section>
    </>
  );
};

export default Recommendation;
