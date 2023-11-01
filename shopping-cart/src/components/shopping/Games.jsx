import { useState } from "react";
import { Outlet, useLoaderData, Form, Link } from "react-router-dom";
import { fetchGames } from "../../apiHelpers/games";

export const loader = async () => {
  const games = await fetchGames();
  return { games };
};

const Games = () => {
  const [quantity, setQuantity] = useState(1);
  const { games } = useLoaderData();

  return (
    <>
      <h1>Games</h1>
      <Outlet />
      <div className="games">
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <Link to={`game/${game.id}`}>
                <h3>{game.name}</h3>
                <img src={game.background_image} alt={game.title} />
                <div className="info">
                  <p className="rating">Rating: {game.rating}</p>
                  <p className="released">Released: {game.released}</p>
                  <ul className="genre">{game.tagsArray}</ul>
                </div>
                <div className="product-form">
                  <Form>
                    <button>Remove from Cart</button>
                  </Form>
                  <Form>
                    <label htmlFor="quantity">Quantity</label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="99"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </Form>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Games.propTypes = {};

export default Games;
