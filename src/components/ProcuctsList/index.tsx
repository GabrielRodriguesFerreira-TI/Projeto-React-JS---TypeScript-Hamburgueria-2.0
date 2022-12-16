import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { UserContext } from "../../contexts/userContext";
import { ButtonApp } from "../Button";
import { Products } from "../Products";
import { DivProducts, TitleSearch, Ulmain } from "./styles";

export const ProductsList = () => {
  const { products, setProducts, showProducts } = useContext(UserContext);
  const { setSearchValue, searchValue } = useContext(CartContext);

  const searchClear = () => {
    setProducts(showProducts);
    setSearchValue("");
  };

  return (
    <>
      <DivProducts>
        {searchValue?.length !== 0 && (
          <header>
            <TitleSearch>
              Resultados para: <span> {searchValue} </span>
            </TitleSearch>
            <ButtonApp variant="buttonClearSearch" onClickProps={() => searchClear()} type="submit" to="">Limpar busca</ButtonApp>
          </header>
        )}
        <Ulmain>
          {products.map((element, index) => {
            return <Products element={element} key={index} />;
          })}
        </Ulmain>
      </DivProducts>
    </>
  );
};
