import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "../../api";
import { iCounterContextProps, iUserForm } from "../@types/types";
import {
  iDefaultErrorResponse,
  iLoginObject,
  iProductsList,
  iUserContext,
} from "./types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iCounterContextProps) => {
  const [loading, setLoading] = useState(false);
  const [userState, setUserState] = useState({} as iLoginObject);
  const [techLoading, setTechLoading] = useState(false);
  const [products, setProducts] = useState<iProductsList[]>([]);

  const Navigate = useNavigate();

  const getProducts = async () => {
    const token = localStorage?.getItem("@Token");
    console.log(products);
    try {
      setTechLoading(true);
      setLoading(true);
      const response = await client.get("products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data);
    } catch (error) {
      window.localStorage.clear();
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      if (currentError.message === "timeout of 3000ms exceeded") {
        Navigate("/login");
        toast.error("Tempo limite atingido", {
          autoClose: 2500,
        });
      }
      console.error(error);
    } finally {
      setTechLoading(false);
      setLoading(false);
    }
  };

  const getProductsFunction = () => {
    Navigate("/dashboard");
    getProducts();
  };

  useEffect(() => {
    !localStorage.getItem("@Token")
      ? Navigate("/login")
      : getProductsFunction();
  }, []);

  const loginUser: SubmitHandler<iUserForm> = async (data) => {
    try {
      const response = await client.post("login", data);
      toast.success("Login feito com sucesso!", {
        autoClose: 1000,
      });
      setLoading(true);
      setUserState(response.data);

      window.localStorage.clear();
      window.localStorage.setItem("@Token", response.data.accessToken);

      getProductsFunction();
      Navigate("/dashboard");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      toast.error(`${currentError.response?.data}`, {
        autoClose: 2500,
      });
    } finally {
      setLoading(false);
    }
  };

  const loginSubmit: SubmitHandler<iUserForm> = async (data) => {
    await loginUser(data);
  };

  const createUser: SubmitHandler<iUserForm> = async (data) => {
    try {
      setLoading(true);
      const response = await client.post("users", data);
      toast.success("Conta criada com sucesso!", {
        autoClose: 1500,
      });

      Navigate("/login");
    } catch (error) {
      toast.error("Ops! algo deu errado", {
        autoClose: 3500,
      });
    } finally {
      setLoading(false);
    }
  };

  const registerSubmit: SubmitHandler<iUserForm> = async (data) => {
    delete data.confirmPassword;
    await createUser(data);
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        userState,
        setUserState,
        loginSubmit,
        registerSubmit,
        products,
        techLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};