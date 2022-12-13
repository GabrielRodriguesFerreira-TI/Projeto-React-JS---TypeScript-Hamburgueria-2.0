import { ButtonStyled, ButtonStyledLink } from "./styles";
import { iButton } from "./types";

export const ButtonApp = ({ children, type }: iButton) => {
  return (
    <>
      {type === "submit" ? (
        <ButtonStyled>{children}</ButtonStyled>
      ) : (
        <ButtonStyledLink>{children}</ButtonStyledLink>
      )}
    </>
  );
};
