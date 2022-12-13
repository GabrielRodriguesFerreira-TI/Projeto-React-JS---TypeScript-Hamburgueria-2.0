import { useState } from "react";
import { BoxInput, CssTextField } from "./styles";
import { iInput } from "./types";

export const InputApp = ({ children, type, }: iInput) => {
  const [showPassowrd, setShowPassword] = useState(false);

  return (
    <BoxInput>
      {type === "password" ? (
        <>
          <CssTextField
            type={showPassowrd ? "text" : "password"}
            id="outlined-basic"
            label={children}
            variant="outlined"
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
          type={type}
          id="outlined-basic"
          label={children}
          variant="outlined"
        />
      )}
    </BoxInput>
  );
};
