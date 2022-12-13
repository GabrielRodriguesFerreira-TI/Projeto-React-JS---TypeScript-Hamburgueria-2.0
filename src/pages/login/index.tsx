import { FormApp } from "../../components/Form";
import {
  Container,
  DivContent,
  DivDescription,
  DivTitle,
  FigureStyled,
  MainDiv,
} from "./styles";
import groupBolls from "../../assets/Group 135.svg";

export const LoginPage = () => {
  return (
    <Container>
      <MainDiv>
        <FormApp typeForm={true} />
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
      </MainDiv>
    </Container>
  );
};
