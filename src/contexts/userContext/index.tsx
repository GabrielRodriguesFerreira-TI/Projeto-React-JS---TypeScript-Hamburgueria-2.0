import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "../../api";
import { iCounterContextProps, iLogin, iRegister } from "../@types/types";
import { iDefaultErrorResponse, iLoginObject, iUserContext } from "./types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iCounterContextProps) => {
  const [loading, setLoading] = useState(false);
  const [userState, setUserState] = useState({} as iLoginObject);

  const Navigate = useNavigate();

  useEffect(() => {
    !localStorage.getItem("@Token")
      ? Navigate("/login")
      : Navigate("/dashboard");
  }, []);

  const loginUser: SubmitHandler<iLogin> = async (data) => {
    try {
      const response = await client.post("login", data);
      toast.success("Login feito com sucesso!", {
        autoClose: 1000,
      });
      setLoading(true);
      setUserState(response.data);

      window.localStorage.clear();
      window.localStorage.setItem("@Token", response.data.accessToken);

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

  const loginSubmit: SubmitHandler<iLogin> = async (data) => {
    await loginUser(data);
  };

  const createUser: SubmitHandler<iRegister> = async (data) => {
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

  const registerSubmit: SubmitHandler<iRegister> = async (data) => {
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
