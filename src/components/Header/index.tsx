import { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../contexts/cartContext";
import { UserContext } from "../../contexts/userContext";
import { InputSearch } from "../inputSearch";
import Badge from "@mui/material/Badge";
import { LogoApp } from "../Logo";
import {
  Container,
  DivInputSearch,
  DivSearch,
  ExitIcon,
  HeaderStyled,
  SearchIcon,
  ShoppingCar,
} from "./styles";
import { InputMobile } from "../inputSearchMobile";
import { useOutClick } from "../../hooks/outClick";

export const HeaderApp = () => {
  const { setUserState } = useContext(UserContext);
  const { productsCart, setIsModalOpen, setIsSearchOpen, isSearchOpen } =
    useContext(CartContext);
  const modalRef = useOutClick(() => setIsSearchOpen(false));

  const Navigate = useNavigate();

  const comeBack = () => {
    window.localStorage.clear();
    Navigate("/login");
    setUserState({});
  };

  return (
    <HeaderStyled>
      <Container>
        {isSearchOpen === true && (
          <DivInputSearch ref={modalRef}>
            <InputMobile />
          </DivInputSearch>
        )}
        <LogoApp />
        <DivSearch>
          <InputSearch />
          <SearchIcon
            onClick={() => setIsSearchOpen(true)}
            className="fa-solid fa-search"
          />
          <Badge badgeContent={productsCart.length} color="success">
            <ShoppingCar
              onClick={() => setIsModalOpen(true)}
              className="fa-solid fa-cart-shopping"
            />
          </Badge>
          <button title="buttonExit">
            <ExitIcon
              onClick={comeBack}
              className="fa-solid fa-right-from-bracket"
            />
          </button>
        </DivSearch>
      </Container>
    </HeaderStyled>
  );
};
