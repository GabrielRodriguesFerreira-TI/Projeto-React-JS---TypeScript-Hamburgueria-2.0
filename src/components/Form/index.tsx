import { useForm } from "react-hook-form";
import { LoginSchema, RegisterSchema } from "./formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { DivTitle, MainForm, Title } from "./styles";
import { iForm, iUser } from "./types";
import { InputApp } from "../Input";
import { ButtonApp } from "../Button";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { DivCenter, Ring, SpanLoading } from "./stylesLoading";

export const FormApp = ({ typeForm }: iForm) => {
  const { loading, loginSubmit, registerSubmit } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUser>({
    mode: "onBlur",
    resolver: yupResolver(typeForm === true ? LoginSchema : RegisterSchema),
  });

  return (
    <>
      {typeForm === true ? (
        <MainForm noValidate onSubmit={handleSubmit(loginSubmit)}>
          {loading === false ? (
            <>
              <Title>Login</Title>
              <InputApp
                errorInput={errors.email?.message}
                register={register("email")}
                type="email"
              >
                Email
              </InputApp>
              {errors.email?.message && <p>{errors.email.message}</p>}
              <InputApp
                errorInput={errors.password?.message}
                register={register("password")}
                type="password"
              >
                Senha
              </InputApp>
              {errors.password?.message && <p>{errors.password.message}</p>}
              <ButtonApp to="/register" type="submit">
                Login
              </ButtonApp>
              <span>
                Crie sua conta para saborear muitas delícias e matar sua fome!
              </span>
              <ButtonApp to="/register">Cadastrar</ButtonApp>
            </>
          ) : (
            <DivCenter>
              <Ring />
              <SpanLoading>Loading...</SpanLoading>
            </DivCenter>
          )}
        </MainForm>
      ) : (
        <MainForm noValidate onSubmit={handleSubmit(registerSubmit)}>
          {loading === false ? (
            <>
              <DivTitle>
                <Title>Cadastro</Title>
                <ButtonApp to="/login">Retornar para o login</ButtonApp>
              </DivTitle>
              <InputApp
                errorInput={errors.name?.message}
                register={register("name")}
                type="text"
              >
                Nome
              </InputApp>
              {errors.name?.message && <p>{errors.name.message}</p>}
              <InputApp
                errorInput={errors.email?.message}
                register={register("email")}
                type="email"
              >
                Email
              </InputApp>
              {errors.email?.message && <p>{errors.email.message}</p>}
              <InputApp
                errorInput={errors.password?.message}
                register={register("password")}
                type="password"
              >
                Senha
              </InputApp>
              {errors.password?.message && <p>{errors.password.message}</p>}
              <InputApp
                errorInput={errors.confirmPassword?.message}
                register={register("confirmPassword")}
                type="password"
              >
                Confirmar senha
              </InputApp>
              {errors.confirmPassword?.message && (
                <p>{errors.confirmPassword.message}</p>
              )}
              <ButtonApp to="/register" variant="buttonRegister" type="submit">
                Cadastrar
              </ButtonApp>
            </>
          ) : (
            <DivCenter>
              <Ring />
              <SpanLoading>Loading...</SpanLoading>
            </DivCenter>
          )}
        </MainForm>
      )}
    </>
  );
};
