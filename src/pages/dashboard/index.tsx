import { useContext } from "react";
import { HeaderApp } from "../../components/Header";
import { ModalApp } from "../../components/Modal";
import { ProductsList } from "../../components/ProcuctsList";
import { CartContext } from "../../contexts/cartContext";
import { UserContext } from "../../contexts/userContext";
import { Container, MainDiv } from "./styles";
import { DivCenter, Ring, SpanLoading } from "./stylesLoading";

export const DashboardPage = () => {
  const { products, loading } = useContext(UserContext);
  const { isModalOpen } = useContext(CartContext);

  if (loading) {
    return null;
  }

  return (
    <>

    {isModalOpen &&  <ModalApp /> }

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
