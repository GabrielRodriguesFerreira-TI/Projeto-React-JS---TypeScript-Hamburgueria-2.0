import styled from "styled-components";

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