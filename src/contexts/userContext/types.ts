import React from "react";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { iLogin, iRegister } from "../@types/types";

interface iUser {
    email: string;
    id: number;
    name: string;
}

export interface iLoginObject {
    accessToken: string;
    user: iUser
}
export interface iUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userState: iLoginObject;
  setUserState: React.Dispatch<React.SetStateAction<iLoginObject>>;
  loginSubmit?: SubmitHandler<iLogin> | any;
  registerSubmit?: SubmitHandler<iRegister> | any;
}

export interface iDefaultErrorResponse {
  error: string;
}
