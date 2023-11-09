import styled from "styled-components";

const Wrapper = styled.div`
  background: #262626;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
  color: #d923ba;
  margin: 1rem auto;
  max-width: 90%;
`;

const GamesList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 80&;

  @media (max-width: 1650px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1250px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin: 2rem;
  font-size: 3rem;
  font-weight: bold;
  color: #0bb3d9;

  @media (max-width: 450px) {
    font-size: 2rem;
  }
`;

const Game = styled.div`
  background: #262626;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
  color: #d923ba;
  @media (max-width: 450px) {
    max-width: auto;
  }
`;

const GameTitle = styled.h2`
  color: #04588c;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem;

  @media (max-width: 450px) {
    font-size: 1.2rem;
  }
`;

const Image = styled.img`
  max-width: 300px;
  max-height: 500px;
  border-radius: 10px;
  margin: 1rem;

  @media (max-width: 450px) {
    max-width: 90%;
  }
`;

const GameInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 450px) {
    font-size: 0.75rem;
    gap: 0.2rem;
  }
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
