import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 1em;
  background: #262626;
  margin: 1rem;
  padding: 1rem;
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
  font-size: 24px;
  color: #d923ba;
`;

const GameWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-height: 500px;
  max-width: 1500px;
  margin: 0 auto;
  gap: 1rem;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  background: no-repeat cover center;
  height: auto;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  color: #04588c;
  overflow: scroll;
`;

const ButtonWrapper = styled.div``;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 20px;
  border: none;
  background: #553b8c;
  margin: 1rem;
  text-aling: center;
  color: #13f2dc;
  font-size: 1.6rem;
  transition: all ease-in-out 0.4s;

  &:hover {
    color: #553b8c;
    background: #13f2dc;
  }
`;

const Rating = styled.p``;

const Released = styled.p``;

const DescriptionWrapper = styled.p``;

const Description = styled.div``;

export {
  Wrapper,
  Title,
  GameWrapper,
  ImgWrapper,
  Image,
  InfoWrapper,
  ButtonWrapper,
  Button,
  Rating,
  Released,
  Description,
  DescriptionWrapper,
};
