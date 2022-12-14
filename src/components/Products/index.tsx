import { ButtonApp } from "../Button";
import { DivDescription, FigureLi, LiStyled } from "./styles";
import { iTypesProducts } from "./types";

export const Products = ({
  id,
  name,
  category,
  price,
  img,
}: iTypesProducts) => {
  return (
    <LiStyled position={id}>
      <FigureLi categoryimg={category}>
        <img title="products" src={img} />
      </FigureLi>
      <DivDescription>
        <h2>{name}</h2>
        <p>{category}</p>
        <span>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </span>
        <ButtonApp variant="buttonList" type="submit" to="">Adicionar</ButtonApp>
      </DivDescription>
    </LiStyled>
  );
};
