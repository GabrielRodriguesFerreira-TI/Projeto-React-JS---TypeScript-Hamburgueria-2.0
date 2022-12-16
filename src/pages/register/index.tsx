import { Container, MainDiv } from "./styles";
import { FormApp } from "../../components/Form";
import { LogoDescription } from "../../components/LogoDescription";

export const RegisterPage = () => {
  return (
    <Container>
      <MainDiv>
        <div>
          <LogoDescription />
          <FormApp typeForm={false} />
        </div>
      </MainDiv>
    </Container>
  );
};
