import { useState } from "react";
import { BoxInput, CssTextField } from "./styles";
import { iInput } from "./types";

export const InputApp = ({ children, type, register, errorInput }: iInput) => {
  const [showPassowrd, setShowPassword] = useState(false);

  return (
    <BoxInput>
      {type === "password" ? (
        <>
          <CssTextField
            error={errorInput ? true : false}
            required={(errorInput && false) || (!errorInput && true)}
            type={showPassowrd ? "text" : "password"}
            id="outlined-basic"
            label={children}
            variant="outlined"
            {...register}
          />
          <i
            onClick={() => setShowPassword(!showPassowrd)}
            className={
              showPassowrd ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
            }
          ></i>
        </>
      ) : (
        <CssTextField
          error={errorInput ? true : false}
          required={(errorInput && false) || (!errorInput && true)}
          type={type}
          id="outlined-basic-1"
          label={children}
          variant="outlined"
          {...register}
        />
      )}
    </BoxInput>
  );
};
