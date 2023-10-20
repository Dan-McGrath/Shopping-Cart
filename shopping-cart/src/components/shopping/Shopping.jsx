import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Header from "../header/Header";
import Categories from "./Categories";
import Card from "../Card";
import Slider from "react-slick";

const Shopping = ({ isMobile, navHandler, clickLinkHandler, navIsOpen }) => {
  const [activeCategory, setAvtiveCategory] = useState("");
  //electronics/jewlery/mens clothing/womens clothing
  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewlery] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);
  const [womensClothing, setWomensClothing] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    className: "item",
  };

  useEffect(() => {
    const getCategoryItems = async () => {
      if (activeCategory === "") {
        //get electronics
        let responseElectronic = await fetch(
          "https://fakestoreapi.com/products/category/electronics?limit=7",
          { mode: "cors" },
        );
        let dataElectronic = await responseElectronic.json();
        setElectronics(dataElectronic);

        //get Jewlery
        let responseJewlery = await fetch(
          "https://fakestoreapi.com/products/category/jewelery?limit=7",
          { mode: "cors" },
        );
        let dataJewlery = await responseJewlery.json();
        setJewlery(dataJewlery);

        //get mensClothing
        let responseMensClothing = await fetch(
          "https://fakestoreapi.com/products/category/men's%20clothing?limit=7",
          { mode: "cors" },
        );
        let dataMensClothing = await responseMensClothing.json();
        setMensClothing(dataMensClothing);

        //get womensClothing
        let responseWomensClothing = await fetch(
          "https://fakestoreapi.com/products/category/women's%20clothing?limit=7",
          { mode: "cors" },
        );
        let dataWomensClothing = await responseWomensClothing.json();
        setWomensClothing(dataWomensClothing);
      } else if (activeCategory === "electronics") {
        let responseElectronic = await fetch(
          "https://fakestoreapi.com/products/category/electronics",
          { mode: "cors" },
        );
        let dataElectronic = await responseElectronic.json();
        setElectronics(dataElectronic);
      } else if (activeCategory === "jewelery") {
        let responseJewlery = await fetch(
          "https://fakestoreapi.com/products/category/jewelery",
          { mode: "cors" },
        );
        let dataJewlery = await responseJewlery.json();
        setJewlery(dataJewlery);
      } else if (activeCategory === "mens") {
        let responseMensClothing = await fetch(
          "https://fakestoreapi.com/products/category/men's%20clothing",
          { mode: "cors" },
        );
        let dataMensClothing = await responseMensClothing.json();
        setMensClothing(dataMensClothing);
      } else if (activeCategory === "womens") {
        let responseWomensClothing = await fetch(
          "https://fakestoreapi.com/products/category/women's%20clothing",
          { mode: "cors" },
        );
        let dataWomensClothing = await responseWomensClothing.json();
        setWomensClothing(dataWomensClothing);
      }
    };
    getCategoryItems();
  }, [activeCategory]);

  let electronicsArray = electronics.map((ele) => (
    <Card
      style={{ margin: "10em auto" }}
      key={ele.id}
      title={ele.title}
      price={ele.price}
      category={ele.category}
      description={ele.description}
      image={ele.image}
    />
  ));

  let jeweleryArray = jewelery.map((ele) => (
    <Card
      style={{ margin: "10em auto" }}
      key={ele.id}
      title={ele.title}
      price={ele.price}
      category={ele.category}
      description={ele.description}
      image={ele.image}
    />
  ));

  let mensArray = mensClothing.map((ele) => (
    <Card
      style={{ margin: "10em auto" }}
      key={ele.id}
      title={ele.title}
      price={ele.price}
      category={ele.category}
      description={ele.description}
      image={ele.image}
    />
  ));
  let womensArray = womensClothing.map((ele) => (
    <Card
      style={{ margin: "10em auto" }}
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
      <Header
        isMobile={isMobile}
        navHandler={navHandler}
        clickLinkHandle={clickLinkHandler}
        navIsOpen={navIsOpen}
      />
      <h1>Shopping</h1>
      <Slider {...settings} style={{ margin: "1em auto", padding: "1em" }}>
        {electronicsArray}
      </Slider>
      <Slider {...settings} style={{ margin: "1em auto", padding: "1em" }}>
        {jeweleryArray}
      </Slider>
      <Slider {...settings} style={{ margin: "1em auto", padding: "1em" }}>
        {mensArray}
      </Slider>
      <Slider {...settings} style={{ margin: "1em auto", padding: "1em" }}>
        {womensArray}
      </Slider>
      <Categories />
    </>
  );
};

Shopping.propTypes = {
  isMobile: PropTypes.bool,
  navHandler: PropTypes.func,
  clickLinkHandler: PropTypes.func,
  navIsOpen: PropTypes.bool,
};

export default Shopping;
