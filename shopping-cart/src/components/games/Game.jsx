import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchGame } from "../../helpers/api";
import { CartContext } from "../App";
import { useContext } from "react";

export const loader = async ({ params }) => {
  const game = await fetchGame(params.gameId);
  return { game };
};

const Game = () => {
  const { addToCart, products } = useContext(CartContext);
  const { game } = useLoaderData();
  const product = products.find((ele) => ele.id === game.id);

  // remove html elements
  const formatDescription = (description) => {
    const descriptionArray = description.split("");

    descriptionArray.forEach((char) => {
      if (char === "<") {
        descriptionArray.splice(descriptionArray.indexOf(char), 3);
      }
      if (char === "/") {
        descriptionArray.splice(descriptionArray.indexOf(char), 2);
      }
    });
    descriptionArray.forEach((char) => {
      if (char === ">") {
        descriptionArray.splice(descriptionArray.indexOf(char), 1);
      }
    });
    const newString = descriptionArray.join("");
    return newString;
  };

  const gameStyles = {
    display: "grid",
    gap: "1em",
    background: "#262626",
    margin: "1rem",
    padding: "1rem",
    paddingBottom: "3rem",
    borderRadius: "10px",
  };

  const gameImageStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  };

  const buttonStyles = {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "20px",
    border: "none",
    background: "#553B8C",
    margin: "1rem",
  };

  return (
    <>
      <div className="game" style={gameStyles}>
        <h2 style={{ textAlign: "center", fontSize: "24px", color: "#D923BA" }}>
          {game.name}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            maxHeight: "500px",
            maxWidth: "1500px",
            margin: "0 auto",
            gap: "1rem",
          }}
        >
          <div className="img" style={gameImageStyles}>
            <img
              src={game.background_image}
              alt={game.title}
              style={{
                width: "100%",
                background: "no-repeat cover center",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="info" style={{ color: "#04588C" }}>
            <p>Rating: {game.rating}</p>
            <p>Released: {game.released}</p>
            <div className="description">
              {formatDescription(game.description)}
            </div>
            <div className="add-to-cart">
              <button
                type="button"
                onClick={() => addToCart(product)}
                style={buttonStyles}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Game.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
  released: PropTypes.string,
  tags: PropTypes.array,
};

export default Game;
