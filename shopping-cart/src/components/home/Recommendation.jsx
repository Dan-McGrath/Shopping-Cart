import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import Card from "../Card";

const Recommendation = () => {
  const [productArray, setProductArray] = useState([]);

  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
    borderRadius: "20px",
    border: "1px solid black",
  };

  const indicatorStyles = {
    background: "#000",
    opacity: "50%",
    width: 8,
    height: 8,
    display: "inline-block",
    margin: "0 8px",
    borderRadius: "10px",
    cursor: "pointer",
  };

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
          <Carousel
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles, left: 15 }}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles, right: 15 }}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                return (
                  <li
                    style={{
                      ...indicatorStyles,
                      background: "#000",
                      opacity: "100%",
                    }}
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                  />
                );
              }
              return (
                <li
                  style={indicatorStyles}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
            {...settings}
          >
            {products}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Recommendation;
