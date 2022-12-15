import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { DivDescription, FigureLi, LiMain } from "./styles";
import { iProductsCart } from "./types";
import { motion } from "framer-motion";

export const CartApp = ({ products }: iProductsCart) => {
  const { addProcuToCart, removeProducToCart } = useContext(CartContext);

  return (
    <LiMain>
      <FigureLi categoryimg={products.category}>
        <img title="img-products" src={products.img}></img>
      </FigureLi>

      <DivDescription>
        <div>
          <h2>{products.name}</h2>
          <div>
            <span
              onClick={() => removeProducToCart(products, false)}
              className="spanAdd"
            >
              -
            </span>
            <span>{products.counter}</span>
            <span onClick={() => addProcuToCart(products)} className="spanLess">
              +
            </span>
          </div>
        </div>
        <i
          onClick={() => removeProducToCart(products, true)}
          className="fa-solid fa-trash"
        ></i>
      </DivDescription>
    </LiMain>
  );
};
