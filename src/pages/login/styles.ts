import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const MainDiv = styled.div`
  width: 98%;
  margin: 200px 10px;

  display: flex;
  justify-content: center;
  gap: 80px;
`;

export const DivContent = styled.div`
  width: 100%;
  max-width: 380px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const DivTitle = styled.div`
  height: 35px;

  display: flex;
  gap: 8px;

  h1 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 24px;
    color: #333333;
    animation: SladeIn 1s ease 0s 1 normal forwards;
  }

  @keyframes SladeIn {
    0% {
      opacity: 0;
      transform: translateX(250px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  span {
    display: flex;
    align-items: flex-end;

    height: 30px;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #eb5757;
    animation: SladeIn 2s ease 0s 1 normal forwards;
  }

  @keyframes SladeIn {
    0% {
      opacity: 0;
      transform: translateX(250px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const DivDescription = styled.div`
  width: 90%;
  height: 90px;
  padding: 0 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  animation: SladeIn 1s ease 0s 1 normal forwards;

  @keyframes SladeIn {
    0% {
      opacity: 0;
      transform: translateX(250px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  p {
    width: 75%;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #828282;
    animation: SladeIn 2.5s ease 0s 1 normal forwards;

    strong {
      color: black;
      font-weight: 600;
    }
  }

  @keyframes SladeIn {
    0% {
      opacity: 0;
      transform: translateX(250px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    background: rgba(39, 174, 96, 0.1);
    border-radius: 5px;
    color: #219653;
    border: 2px solid #219653;
    animation: SladeIn 2.5s ease 0s 1 normal forwards;
  }

  @keyframes SladeIn {
    0% {
      opacity: 0;
      transform: translateX(250px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const FigureStyled = styled.figure``;
