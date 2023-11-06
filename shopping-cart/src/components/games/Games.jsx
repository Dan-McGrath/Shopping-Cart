import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";
import {
  Wrapper,
  GamesList,
  Title,
  Game,
  GameTitle,
  Image,
  GameInfo,
  TagsWrapper,
  Tags,
} from "./gamesStyles.js";

const Games = () => {
  const { products } = useContext(CartContext);

  return (
    <Wrapper>
      <Title>Games</Title>
      <GamesList>
        {products.map((game) => (
          <Game key={game.id}>
            <Link to={`game/${game.id}`}>
              <GameTitle>{game.name}</GameTitle>
              <Image src={game.background_image} alt={game.name}></Image>
              <GameInfo>
                {game.tags.map((tag) => (
                  <TagsWrapper key={tag.id}>
                    <Tags>{tag.name}</Tags>
                  </TagsWrapper>
                ))}
              </GameInfo>
            </Link>
          </Game>
        ))}
      </GamesList>
    </Wrapper>
  );
};

export default Games;
