import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 1em;
  background: #262626;
  margin: 1rem;
  padding: 2rem;
  padding-bottom: 3rem;
  border-radius: 20px;

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px #d923ba;
    height: 10px;
  }

  *::-webkit-scrollbar-corner {
    display: none;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #04588c;
  margin-bottom: 1rem;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const GameWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-height: 500px;
  max-width: 1500px;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    max-height: 500px;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  width: 100%;
  background: no-repeat cover center;
  height: auto;
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: 900px) {
    max-height: 200px;
    max-width: 80%;
    margin: 0 auto;
  }
`;

const SideWrapper = styled.div`
  color: #04588c;
  /* remove scroll if not needed */
  overflow-y: auto;

  @media (max-width: 900px) {
    overflow-y: visible;
  }
`;

const ButtonWrapper = styled.div``;

const Button = styled.button`
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

  @media (max-width: 400px) {
    font-size: 1rem;
    padding: 0.5em;
  }
`;

const InfoWrapper = styled.div`
  color: #d923ba;
  font-size: 1.2rem;
`;

const Rating = styled.p``;

const Released = styled.p``;

const DescriptionWrapper = styled.div`
  max-height: 300px;
  /* remove scroll if not needed */
  overflow-y: auto;
  margin: 1rem 0;

  @media (max-width: 900px) {
    max-height: 20%;
  }

  @media (max-width: 400px) {
    max-height: 15%;
  }
`;

const DescriptionTitle = styled.h2`
  font-size: 1.8rem;
  color: #0bb3d9;
  margin-bottom: 1rem;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.div`
  max-width: 90%;
  font-size: 1.2rem;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

export {
  Wrapper,
  Title,
  GameWrapper,
  ImgWrapper,
  Image,
  SideWrapper,
  ButtonWrapper,
  Button,
  Rating,
  Released,
  Description,
  DescriptionWrapper,
  InfoWrapper,
  DescriptionTitle,
};
