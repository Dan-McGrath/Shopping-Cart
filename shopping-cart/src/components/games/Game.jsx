import { useLoaderData, Form } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchGame } from "../../helpers/api";
import { addToCart } from "../../helpers/cart";

export const loader = async ({ params }) => {
  const game = await fetchGame(params.gameId);
  return { game };
};

export const action = async ({ params }) => {
  const newGame = await fetchGame(params.gameId);
  addToCart(newGame);
  return { newGame };
};

const Game = () => {
  const { game } = useLoaderData();
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
          <Form method="post">
            <button type="submit">Add to Cart</button>
          </Form>
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
