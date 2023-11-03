import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";

const Games = () => {
  const { products } = useContext(CartContext);
  return (
    <>
      <h1>Games</h1>
      <div className="games">
        {products.map((game) => (
          <>
            <div className="game" key={game.id}>
              <Link to={`game/${game.id}`}>
                <h2>{game.name}</h2>
                <img src={game.background_image} alt={game.name} />
                <div className="game-info">
                  {game.tags.map((tag) => (
                    <div className="tag" key={tag.id}>
                      <p>{tag.name}</p>
                    </div>
                  ))}
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Games;
