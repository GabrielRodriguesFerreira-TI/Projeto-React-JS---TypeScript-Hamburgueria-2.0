import groupBolls from "../../assets/Group 135.svg";
import { DivContent, DivDescription, DivTitle, FigureStyled } from "./styles";

export const LogoDescription = () => {
  return (
    <DivContent>
      <DivTitle>
        <h1>Burguer</h1>
        <span>Kenzie</span>
      </DivTitle>
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
