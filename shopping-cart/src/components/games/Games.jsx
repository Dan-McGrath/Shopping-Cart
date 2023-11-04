import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";

const Games = () => {
  const { products } = useContext(CartContext);

  const gamesStyles = {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    maxWidth: "100vw",
  };

  const gameImageStyles = {
    maxWidth: "300px",
    maxHeight: "500px",
  };

  const gameTagsStyles = {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
  };

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "2rem", fontSize: "2rem" }}>
        Games
      </h1>
      <div className="games" style={gamesStyles}>
        {products.map((game) => (
          <>
            <div className="game" key={game.id}>
              <Link to={`game/${game.id}`}>
                <h2>{game.name}</h2>
                <img
                  src={game.background_image}
                  alt={game.name}
                  style={gameImageStyles}
                />
                <div className="game-info" style={gameTagsStyles}>
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
