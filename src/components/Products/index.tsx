import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { ButtonApp } from "../Button";
import { DivDescription, FigureLi, LiStyled } from "./styles";
import { iTypesProducts } from "./types";

export const Products = ({ element }: iTypesProducts) => {
  const { addProcuToCart } = useContext(CartContext);

  const objItems = {
    id: element.id,
    name: `${element.name}`,
    category: `${element.category}`,
    price: element.price,
    img: `${element.img}`,
    counter: 1,
  };

  return (
    <LiStyled position={objItems.id}>
      <FigureLi categoryimg={objItems.category}>
        <img title="products" src={objItems.img} />
      </FigureLi>
      <DivDescription>
        <h2>{objItems.name}</h2>
        <p>{objItems.category}</p>
        <span>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(Number(objItems.price))}
        </span>
        <ButtonApp onClickProps={() => {addProcuToCart(objItems)}} variant="buttonList" type="submit" to="">
          Adicionar
        </ButtonApp>
      </DivDescription>
    </LiStyled>
  );
};
