import { useForm } from "react-hook-form";
import { LoginSchema, RegisterSchema } from "./formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { MainForm, Title } from "./styles";
import { iForm } from "./types";
import { InputApp } from "../Input";
import { ButtonApp } from "../Button";

export const FormApp = ({ typeForm }: iForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(typeForm === true ? LoginSchema : RegisterSchema),
  });

  return (
    <>
      {typeForm === true ? (
        <MainForm
          noValidate
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <Title>Login</Title>
          <InputApp type="text">Nome</InputApp>
          <InputApp type="password">Senha</InputApp>
          <ButtonApp type="submit">Login</ButtonApp>
          <span>
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </span>
          <ButtonApp>Cadastrar</ButtonApp>
        </MainForm>
      ) : (
        <MainForm>
          <Title>Cadastro</Title>
        </MainForm>
      )}
    </>
  );
};
