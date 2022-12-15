import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { CartApp } from "../Cart";
import { TotalCartApp } from "../Cart/TotalCart";
import {
  DivDescription,
  DivPadding,
  DivWrapper,
  ModalContent,
  UlMain,
} from "./styles";

export const ModalApp = () => {
  const { setIsModalOpen, productsCart } = useContext(CartContext);

  return (
    <DivWrapper>
      <ModalContent>
        <header>
          <h2>Carrinho de compras</h2>
          <i onClick={() => setIsModalOpen(false)}>X</i>
        </header>
        {productsCart.length === 0 ? (
          <DivDescription>
            <h2>Sua sacola está vazia</h2>
            <span>Adicione itens</span>
          </DivDescription>
        ) : (
          <>
            <DivPadding>
              <UlMain>
                {productsCart.map((element, index) => {
                  return <CartApp products={element} key={index} />;
                })}
              </UlMain>
            </DivPadding>

            <TotalCartApp />
          </>
        )}
      </ModalContent>
    </DivWrapper>
  );
};
