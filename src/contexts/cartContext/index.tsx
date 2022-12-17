import { createContext, useState } from "react";
import { iCounterContextProps } from "../@types/types";
import { iCartContext, iProductsList } from "./types";

export const CartContext = createContext({} as iCartContext);

export const CartProviders = ({ children }: iCounterContextProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [productsCart, setProductsCart] = useState<iProductsList[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const addProcuToCart = (objItems: iProductsList) => {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((element) => element.id == objItems.id);

    if (!item) {
      copyProductsCart.push(objItems);
    } else {
      item.counter = item.counter + 1;
    }
    setProductsCart(copyProductsCart);
  };

  const removeProducToCart = (objItems: iProductsList, removeAll: boolean) => {
    const copyProductsCart = [...productsCart];

    if (removeAll) {
      const arrayFiltered = copyProductsCart.filter(
        (item) => item.id !== objItems.id
      );
      setProductsCart(arrayFiltered);
    } else {
      const item = copyProductsCart.find(
        (element) => element.id == objItems.id
      );
      if (item) {
        if (item.counter > 1) {
          item.counter = item.counter - 1;
          setProductsCart(copyProductsCart);
        } else {
          const arrayFiltered = copyProductsCart.filter(
            (products) => products.id !== objItems.id
          );
          setProductsCart(arrayFiltered);
        }
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        productsCart,
        setProductsCart,
        addProcuToCart,
        removeProducToCart,
        searchValue,
        setSearchValue,
        isSearchOpen,
        setIsSearchOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
