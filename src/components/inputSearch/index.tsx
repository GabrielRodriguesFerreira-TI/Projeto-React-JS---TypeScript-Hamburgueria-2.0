import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext";
import { UserContext } from "../../contexts/userContext";
import { FormInput, IconLup, InputStyled } from "./styled";

export const InputSearch = ({}) => {
  const { setProducts, showProducts } = useContext(UserContext);
  const { setSearchValue } = useContext(CartContext);
  const [inputSearch, setInputSearch] = useState("");

  const renderInput = () => {
    const findProducts = showProducts?.filter((element) => {
      return (
        element?.category
          .toLowerCase()
          .normalize("NFD")
          .replace(/\p{Mn}/gu, "")
          .includes(inputSearch.toLowerCase()) ||
        element?.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/\p{Mn}/gu, "")
          .includes(inputSearch.toLowerCase())
      );
    });
    setProducts(findProducts)
    setSearchValue(inputSearch.trim())
    setInputSearch("")
  };

  return (
    <FormInput onChange={(event) => event.preventDefault()} noValidate>
      <InputStyled value={inputSearch} onChange={(event) => setInputSearch(event.target.value)} placeholder="Digitar pesquisa..." />
      <IconLup onClick={() => renderInput()} className="fa-solid fa-search" />
    </FormInput>
  );
};
