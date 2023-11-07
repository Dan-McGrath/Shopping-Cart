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
`;

export { MainHeader, Logo };
