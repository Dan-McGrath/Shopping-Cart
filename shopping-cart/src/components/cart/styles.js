import styled from "styled-components";

const CartWrapper = styled.div`
  background: #262626;
  width: 80%;
  margin: 1rem auto;
  padding: 1rem;
  min-height: 500px;
  border-radius: 20px;
  @media (max-width: 1400px) {
    margin: 0.8em auto;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #0bb3d9;
  font-size: 3rem;

  @media (max-width: 750px) {
    font-size: 2rem;
  }
`;

const List = styled.ul`
  background: #262626;
  text-align: center;
  margin: 1rem;
  font-size: 20px;
  color: #d923ba;
`;

const ListItems = styled.li``;

const GameTitle = styled.h2`
  margin: 1rem;
  font-size: 1.8rem;

  @media (max-width: 750px) {
    font-size: 1.3rem;
  }
`;

const GamePrice = styled.p``;

const RemoveButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 20px;
  border: none;
  background: #553b8c;
  margin: 1rem 0;
  text-aling: center;
  color: #13f2dc;
  font-size: 1.6rem;
  transition: all ease-in-out 0.4s;
  max-width: 90%;

  &:hover {
    color: #0bb3d9;
    background: #d923ba;
  }

  @media (max-width: 1400px) {
    margin: 0.8em auto;
    max-width: 50%;
  }

  @media (max-width: 750px) {
    font-size: 1rem;
  }
`;

const GameWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`;

const GameImg = styled.img`
  max-width: 500px;
  border-radius: 20px;

  @media (max-width: 1400px) {
    margin: 0.5em auto;
  }

  @media (max-width: 750px) {
    max-width: 90%;
  }
`;

const GameRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Quantity = styled.p`
  margin: 0.5em;
`;

const Total = styled.div`
  text-align: right;
  margin-right: 2rem;
  color: #d923ba;
  font-size: 2rem;

  @media (max-width: 750px) {
    font-size: 1.3rem;
  }
`;

export {
  GameWrapper,
  GameImg,
  GameTitle,
  Title,
  List,
  ListItems,
  CartWrapper,
  Total,
  GamePrice,
  GameRightWrapper,
  RemoveButton,
  Quantity,
};
