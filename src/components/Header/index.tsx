import { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../contexts/cartContext";
import { UserContext } from "../../contexts/userContext";
import { InputSearch } from "../inputSearch";
import Badge from "@mui/material/Badge";
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
  const { setIsModalOpen } = useContext(CartContext);

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
          <Badge badgeContent={0} color="success">
            <ShoppingCar
              onClick={() => setIsModalOpen(true)}
              className="fa-solid fa-cart-shopping"
            />
          </Badge>
          <ExitIcon
            onClick={comeBack}
            className="fa-solid fa-right-from-bracket"
          />
        </DivSearch>
      </Container>
    </HeaderStyled>
  );
};
