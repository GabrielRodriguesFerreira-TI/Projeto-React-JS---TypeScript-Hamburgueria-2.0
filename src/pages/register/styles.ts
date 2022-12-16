import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const MainDiv = styled.div`
  width: 98%;
  margin: 200px 0px;

  display: flex;
  justify-content: center;
  gap: 80px;

  @media (max-width: 810px) {
    margin: 100px 0px;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 10px;

    @media (max-width: 810px) {
      flex-direction: column;
    }
  }
`;
