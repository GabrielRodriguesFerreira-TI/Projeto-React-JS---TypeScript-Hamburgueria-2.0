import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/userContext";
import { InputSearch } from "../inputSearch";
import { LogoApp } from "../Logo";
import {
  Container,
  DivSearch,
  ExitIcon,
  HeaderStyled,
  ShoppingCar,
} from "./styles";

export const HeaderApp = () => {
  const { setUserState } = useContext(UserContext);
  const Navigate = useNavigate();

  const comeBack = () => {
    window.localStorage.clear();
    Navigate("/login");
    setUserState({});
  };

  return (
    <HeaderStyled>
      <Container>
        <LogoApp />
        <DivSearch>
          <InputSearch />
          <ShoppingCar className="fa-solid fa-cart-shopping" />
          <ExitIcon
            onClick={comeBack}
            className="fa-solid fa-right-from-bracket"
          />
        </DivSearch>
      </Container>
    </HeaderStyled>
  );
};
