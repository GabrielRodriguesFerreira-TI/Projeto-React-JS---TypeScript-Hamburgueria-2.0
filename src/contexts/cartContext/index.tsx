import { createContext, useState } from "react";
import { iCounterContextProps } from "../@types/types";
import { iCartContext, iProductsList } from "./types";

export const CartContext = createContext({} as iCartContext);

export const CartProviders = ({ children }: iCounterContextProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productsCart, setProductsCart] = useState<iProductsList[]>([]);

  return (
    <CartContext.Provider value={{ isModalOpen, setIsModalOpen, productsCart }}>
      {children}
    </CartContext.Provider>
  );
};
