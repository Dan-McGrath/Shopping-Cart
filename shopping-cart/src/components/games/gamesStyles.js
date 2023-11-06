import styled from "styled-components";

const Wrapper = styled.div`
  background: #262626;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
  color: #d923ba;
  margin: 1rem;
`;

const GamesList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  maxwidth: 100vw;
`;

const Title = styled.h1`
  text-align: center;
  margin: 2rem;
  font-size: 3rem;
  font-weight: bold;
  color: #0bb3d9;
`;

const Game = styled.div`
  background: #262626;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
  color: #d923ba;
`;

const GameTitle = styled.h2`
  color: #04588c;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem;
`;

const Image = styled.img`
  max-width: 300px;
  max-height: 500px;
  border-radius: 10px;
  margin: 1rem;
`;

const GameInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const TagsWrapper = styled.div``;

const Tags = styled.p``;

export {
  Wrapper,
  GamesList,
  Title,
  Game,
  GameTitle,
  Image,
  GameInfo,
  TagsWrapper,
  Tags,
};
