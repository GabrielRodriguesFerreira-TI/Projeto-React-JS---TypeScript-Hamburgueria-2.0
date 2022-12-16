import { FormApp } from "../../components/Form";
import { Container, MainDiv } from "./styles";
import { LogoDescription } from "../../components/LogoDescription";

export const LoginPage = () => {

  return (
    <Container>
      <MainDiv>
        <div>
          <FormApp typeForm={true} />
          <LogoDescription />
        </div>
      </MainDiv>
    </Container>
  );
};
