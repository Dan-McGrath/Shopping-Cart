import styled from "styled-components";

const CartWrapper = styled.div`
  background: #262626;
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  min-height: 500px;
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

const Total = styled.div`
  text-align: right;
  margin-right: 2rem;
  color: #d923ba;
`;

export { Title, List, ListItems, CartWrapper, Total };
