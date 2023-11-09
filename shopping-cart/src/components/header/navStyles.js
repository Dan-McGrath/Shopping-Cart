import styled from "styled-components";

const Navigation = styled.nav`
  background: #262626;
  font-size: 20px;
  color: #0bb3d9;
  height: 80px;
  width: 300px;
  border-radius: 0 0 10px 10px;

  @media (max-width: 900px) {
    width: 200px;
    height: 50px;
    font-size: 1rem;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  margin: 1rem;
`;

const CartIcon = styled.div`
  text-align: right;
`;

const LinkItem = styled.li``;

export { Navigation, List, LinkItem, CartIcon };
