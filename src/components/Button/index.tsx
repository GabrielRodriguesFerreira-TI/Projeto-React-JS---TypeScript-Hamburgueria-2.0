import { ButtonStyled, ButtonStyledLink } from "./styles";
import { iButton } from "./types";

export const ButtonApp = ({ children, type, to, variant }: iButton) => {
  return (
    <>
      {type === "submit" ? (
        <ButtonStyled typeButton={variant}>{children}</ButtonStyled>
      ) : (
        <ButtonStyledLink typelink={variant} to={to}>{children}</ButtonStyledLink>
      )}
    </>
  );
};
