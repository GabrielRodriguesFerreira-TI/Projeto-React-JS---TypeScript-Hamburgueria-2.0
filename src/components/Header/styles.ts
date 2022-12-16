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

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    margin: 0 10px;
  }
`;

export const DivInputSearch = styled.div`
  width: 100%;
  height: 70px;
  background: transparent;
  position: absolute;
  z-index: 1000;
  animation: upAnimy 0.5s ease 0s 1 normal forwards;

  @keyframes upAnimy {
      0% {
        opacity: 0;
        transform: translateY(-250px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    > div > Button {
      margin-top: -5px;
      margin-right: 20px;
    }
  }

  @media (min-width: 650px) {
    display: none;
  }
`;

export const DivSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 650px) {
    width: 35%;
    justify-content: center;
  }
`;

export const ShoppingCar = styled.i`
  color: #bdbdbd;
  font-size: 20px;
  cursor: pointer;

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const ExitIcon = styled.i`
  color: #bdbdbd;
  font-size: 20px;
  cursor: pointer;

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const SearchIcon = styled.div`
  color: #bdbdbd;
  font-size: 20px;
  display: none;
  cursor: pointer;

  @media (max-width: 650px) {
    display: block;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;
