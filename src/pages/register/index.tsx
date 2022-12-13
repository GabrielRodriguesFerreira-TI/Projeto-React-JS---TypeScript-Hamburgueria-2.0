import { Container, MainDiv } from "./styles";
import { FormApp } from "../../components/Form";
import { LogoDescription } from "../../components/LogoDescription";

export const RegisterPage = () => {
  return (
    <Container>
      <MainDiv>
       <LogoDescription />
        <FormApp typeForm={false}/>
      </MainDiv>
    </Container>
  );
};
