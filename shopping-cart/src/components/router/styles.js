import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background: #262626;
  position: relative;
  top: 50vh;
  padding: 2rem;
  font-size: 1.8rem;
  border-radius: 20px;
  color: #d923ba;
  text-align: center;
`;

const ErrorMessage = styled.p`
  margin-top: 1rem;
  font-weight: light;
`;

const LinkWrapper = styled.div`
  color: #04588c;
  margin-top: 1rem;
`;

export { Wrapper, ErrorMessage, LinkWrapper };
