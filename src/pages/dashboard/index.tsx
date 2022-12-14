import { useContext } from "react";
import { HeaderApp } from "../../components/Header";
import { ProductsList } from "../../components/ProcuctsList";
import { UserContext } from "../../contexts/userContext";
import { Container, MainDiv } from "./styles";
import { DivCenter, Ring, SpanLoading } from "./stylesLoading";

export const DashboardPage = () => {
  const { products, loading } = useContext(UserContext);

  if (loading) {
    return;
  }

  console.log(products)

  return (
    <>
      <HeaderApp />
      <Container>
        <MainDiv>
          {products.length > 0 ? (
            <ProductsList />
          ) : (
            <DivCenter>
              <Ring />
              <SpanLoading>Loading...</SpanLoading>
            </DivCenter>
          )}
        </MainDiv>
      </Container>
    </>
  );
};
