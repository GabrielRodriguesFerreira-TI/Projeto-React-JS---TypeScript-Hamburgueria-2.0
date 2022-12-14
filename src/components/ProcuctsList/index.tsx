import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Products } from "../Products";
import { Ulmain } from "./styles";

export const ProductsList = () => {
  const { products } = useContext(UserContext);

  console.log(products);
  return (
    <Ulmain>
      {products.map((element, index) => {
        return (
          <Products
            img={element.img}
            price={element.price}
            id={element.id}
            name={element.name}
            category={element.category}
            key={index}
          />
        );
      })}
    </Ulmain>
  );
};
