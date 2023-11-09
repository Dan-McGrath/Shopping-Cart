import styled from "styled-components";

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  max-width: 125px;
  max-height: 125px;
  border-radius: 500px;
  background: #262626;
  margin-top: 1em;
  margin-left: 1em;

  @media (max-width: 1300px) {
    max-height: 75px;
    max-width: 75px;
    margin-top: 0.2em;
    margin-left: 0.2em;
  }

  @media (max-width: 900px) {
    max-height: 50px;
  }
`;

export { MainHeader, Logo };
