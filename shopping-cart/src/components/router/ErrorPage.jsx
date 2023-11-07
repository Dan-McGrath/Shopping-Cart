import { Link, useRouteError } from "react-router-dom";
import { Wrapper, ErrorMessage, LinkWrapper } from "./styles";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Wrapper>
      <h1>Oh no, this route doesn&apos;t exist!</h1>
      <LinkWrapper>
        <Link to="/">
          You can go back to the home page by clicking here, though!
        </Link>
      </LinkWrapper>
      <ErrorMessage>
        <i>{error.statusText || error.message}</i>
      </ErrorMessage>
    </Wrapper>
  );
};

export default ErrorPage;
