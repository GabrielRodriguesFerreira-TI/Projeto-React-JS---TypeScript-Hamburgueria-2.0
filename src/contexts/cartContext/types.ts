import { Dispatch, SetStateAction } from "react";

export interface iProductsList {
    id: number;
    name: string;
    img: string;
  }

export interface iCartContext {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  productsCart: iProductsList[];
}
