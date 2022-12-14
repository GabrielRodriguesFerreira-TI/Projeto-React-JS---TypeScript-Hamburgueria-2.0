import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 80px;
  background: #f5f5f5;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DivSearch = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const ShoppingCar = styled.i`
  color: #bdbdbd;
  font-size: 20px;
  cursor: pointer;
`;

export const ExitIcon = styled.i`
  color: #bdbdbd;
  font-size: 20px;
  cursor: pointer;
`;
