import { Dispatch, SetStateAction } from "react";

export interface iProductsList {
    id: number;
    name: string;
    img: string;
    price: number;
    counter?: any;
  }

export interface iCartContext {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setProductsCart: React.Dispatch<React.SetStateAction<iProductsList[]>>;
  productsCart: iProductsList[];
  addProcuToCart:(objItems: iProductsList) => void;
  removeProducToCart: (objItems: iProductsList, removeAll: boolean) => void;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}
