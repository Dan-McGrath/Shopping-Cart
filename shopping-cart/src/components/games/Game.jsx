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
  const tagsArray = game.tags.map((tag) => (
    <div className="tag" key={tag.id}>
      <p>{tag.name}</p>
    </div>
  ));

  return (
    <>
      <div className="game">
        <h2>{game.name}</h2>
        <img src={game.background_image} alt={game.title} />
        <div className="info">
          <p>Rating: {game.rating}</p>
          <p>Released: {game.released}</p>
          <div className="tags">{tagsArray}</div>
        </div>
        <div className="add-to-cart">
          <button type="button" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
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
