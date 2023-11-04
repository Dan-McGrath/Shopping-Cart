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
    borderRadius: "10px",
    margin: "1rem",
  };

  const gameTagsStyles = {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
  };

  const gameStyles = {
    background: "#262626",
    padding: "1rem",
    textAlign: "center",
    borderRadius: "10px",
    color: "#D923BA",
  };

  const gameTitleStyles = {
    fontSize: "20px",
    margin: "1rem",
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          margin: "2rem",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#D7D7D9",
        }}
      >
        Games
      </h1>
      <div className="games" style={gamesStyles}>
        {products.map((game) => (
          <>
            <div className="game" key={game.id} style={gameStyles}>
              <Link to={`game/${game.id}`}>
                <h2 style={gameTitleStyles}>{game.name}</h2>
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
