import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../contexts/cartContext";
import { useOutClick } from "../../hooks/outClick";
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
  const modalRef = useOutClick(
    () => setIsModalOpen(false)
  )

  return (
    <DivWrapper>
      <ModalContent ref={modalRef}>
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
