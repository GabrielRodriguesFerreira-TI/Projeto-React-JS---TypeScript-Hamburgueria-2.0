import { ButtonStyled, ButtonStyledLink } from "./styles";
import { iButton } from "./types";

export const ButtonApp = ({ children, type, to, variant }: iButton) => {
  return (
    <>
      {type === "submit" ? (
        <ButtonStyled>{children}</ButtonStyled>
      ) : (
        <ButtonStyledLink to={to}>{children}</ButtonStyledLink>
      )}
    </>
  );
};
