import { useContext } from "react";
import { CartContext } from "../../../contexts/cartContext";
import { ButtonApp } from "../../Button";
import { DivTotal } from "./styles";

export const TotalCartApp = () => {
  const { productsCart, setProductsCart } = useContext(CartContext);

  const result = productsCart.reduce((previousValue, currentValue) => {
    return (currentValue.price * currentValue.counter) + previousValue;
  }, 0);

  const removeAllCards = () => {
    setProductsCart([])
  }

  return (
    <DivTotal>
      <div>
        <p>Total</p>
        <span>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(result)}
        </span>
      </div>
      <ButtonApp onClickProps={() => removeAllCards()} variant="buttonRemoveModal" type="submit" to="">
        Remover todos
      </ButtonApp>
    </DivTotal>
  );
};
