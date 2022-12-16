import styled from "styled-components";

export const Ulmain = styled.ul`
  width: 100%;
  display: flex;
  max-height: 1000px;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 650px) {
    width: 100%;
    height: 360px;
    flex-direction: row;
    justify-content: unset;
    flex-wrap: nowrap;
    overflow-y: auto;
  }
`;

export const DivProducts = styled.div`
  padding-top: 15px;
  width: 950px;
  height: 760px;
  align-items: flex-start;

  > header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    animation: upAnimy 1s ease 0s 1 normal forwards;

    > button {
      margin-top: -10px;
      margin-right: 22px;
    }
  }

  @media (max-width: 650px) {
    width: 100%;
    height: 560px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;

    > header {
      margin-top: -30px;

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
      margin-right: 20px;
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
