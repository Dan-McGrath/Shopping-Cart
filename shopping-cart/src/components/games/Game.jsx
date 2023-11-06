import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchGame } from "../../helpers/api";
import { CartContext } from "../App";
import { useContext } from "react";
import {
  Wrapper,
  Title,
  GameWrapper,
  ImgWrapper,
  Image,
  InfoWrapper,
  ButtonWrapper,
  Button,
  Rating,
  Released,
  Description,
  DescriptionWrapper,
} from "./gameStyles.js";

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

  return (
    <Wrapper>
      <Title>{game.name}</Title>
      <GameWrapper>
        <ImgWrapper>
          <Image src={game.background_image} alt={game.title}></Image>
        </ImgWrapper>
        <InfoWrapper>
          <Rating>Rating: {game.rating}</Rating>
          <Released>Released: {game.released}</Released>
          <DescriptionWrapper>
            <Description>{formatDescription(game.description)}</Description>
          </DescriptionWrapper>
          <ButtonWrapper>
            <Button type="button" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </ButtonWrapper>
        </InfoWrapper>
      </GameWrapper>
    </Wrapper>
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
