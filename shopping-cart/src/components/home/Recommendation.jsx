import Slider from "react-slick";
import PropTypes from "prop-types";


const Recommendation = () => {
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

  return (
    <>
      <section className="recommendations">
        <h2>Recommendations</h2>
        <div className="wrapper">
          <Slider
            {...settings}
            style={{ margin: "1em auto", padding: "1em" }}
          ></Slider>
        </div>
      </section>
    </>
  );
};

Recommendation.propTypes = {
  games: PropTypes.array,
};

export default Recommendation;
