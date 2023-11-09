import Nav from "./Nav";
import logo from "../../assets/logo.svg";
import { MainHeader, Logo } from "./headerStyles";

const Header = () => {
  return (
    <MainHeader>
      <Logo src={logo} alt="logo"></Logo>
      <Nav />
    </MainHeader>
  );
};

export default Header;
