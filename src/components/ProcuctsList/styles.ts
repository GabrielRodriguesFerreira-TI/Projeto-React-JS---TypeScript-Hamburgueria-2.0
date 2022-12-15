import styled from "styled-components";

export const Ulmain = styled.ul`
  width: 100%;
  display: flex;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const DivProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  > div {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    animation: upAnimy 1s ease 0s 1 normal forwards;
  }

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
  }

  @media (min-width: 950px) {
    padding-top: 15px;
    width: 950px;
    height: 760px;
    align-items: flex-start;

    > div {
      padding-bottom: 38px;
    }

    > div > Button {
      margin-top: -10px;
      margin-right: 25px;
    }
  }
`;

export const TitleSearch = styled.h2`
  margin-left: 20px;
  margin-bottom: 20px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;

  > span {
    color: #828282;
  }
`;
