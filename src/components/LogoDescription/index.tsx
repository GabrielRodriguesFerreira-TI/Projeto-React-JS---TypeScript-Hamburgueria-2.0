import groupBolls from "../../assets/Group 135.svg";
import { LogoApp } from "../Logo";
import { DivContent, DivDescription, FigureStyled } from "./styles";

export const LogoDescription = () => {
  return (
    <DivContent>
      <LogoApp />
      <DivDescription>
        <i className="fa-solid fa-shopping-bag"></i>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os
          <strong> melhores </strong>
          ingredientes.
        </p>
      </DivDescription>
      <FigureStyled>
        <img title="bolls" src={groupBolls} />
      </FigureStyled>
    </DivContent>
  );
};
