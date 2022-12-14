import React from "react";
import { iUserForm } from "../@types/types";
import { SubmitHandler } from "react-hook-form/dist/types";


interface iUserLogin {
    email?: string;
    id?: number;
    name?: string;
}

export interface iLoginObject {
    accessToken?: string;
    user?: iUserLogin
}

export interface iProductsList {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iUserContext {
  loading: boolean;
  techLoading?: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userState: iLoginObject;
  setUserState: React.Dispatch<React.SetStateAction<iLoginObject>>;
  loginSubmit: SubmitHandler<iUserForm>;
  registerSubmit: SubmitHandler<iUserForm>;
  products: iProductsList[];
}

export interface iDefaultErrorResponse {
  error: string;
}