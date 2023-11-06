import styled from "styled-components";

const CartWrapper = styled.div`
  background: #262626;
  width: 80%;
  margin: 1rem auto;
  padding: 1rem;
  min-height: 500px;
  border-radius: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #0bb3d9;
  font-size: 3rem;
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
`;

const GameWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const GameImg = styled.img`
  max-width: 500px;
`;

const GameRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Quantity = styled.p``;

const Total = styled.div`
  text-align: right;
  margin-right: 2rem;
  color: #d923ba;
  font-size: 2rem;
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
