import Slider from "react-slick";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Game from "../Game";

const Recommendation = () => {
  const [games, setGames] = useState([]);
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
    const fetchGames = async () => {
      const response = await fetch(
        "https://api.rawg.io/api/games?key=ee5bf1341db9436c98116082abfd714f",
        {
          mode: "cors",
        },
      );
      const data = await response.json();
      setGames(data.results);
    };
    fetchGames();
  }, []);

  console.log(games);

  const gamesArray = games.map((ele) => (
    <Game
      style={{ margin: "10em auto" }}
      key={ele.id}
      slug={ele.slug}
      title={ele.name}
      rating={ele.rating}
      genre={ele.tags[0].name}
      description={ele.description}
      image={ele.background_image}
    />
  ));

  return (
    <>
      <section className="recommendations">
        <h2>Recommendations</h2>
        <div className="wrapper">
          <Slider {...settings} style={{ margin: "1em auto", padding: "1em" }}>
            {gamesArray}
          </Slider>
        </div>
      </section>
    </>
  );
};

Recommendation.propTypes = {
  games: PropTypes.array,
};

export default Recommendation;
