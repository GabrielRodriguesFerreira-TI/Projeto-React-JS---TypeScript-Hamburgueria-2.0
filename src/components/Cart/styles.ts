import styled from "styled-components";
import { iCategory } from "./types";

export const LiMain = styled.li`
  margin-top: 10px;
  margin-bottom: 20px;
  height: 100px;

  display: flex;
  justify-content: space-between;
  animation: fadeIn 1s ease 0s 1 normal forwards;
  transition: 0.3s ease-in-out;
  -webkit-filter: brightness(85%);

  &:hover {
    -webkit-filter: brightness(100%);
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const FigureLi = styled.figure<iCategory>`
  display: flex;
  border-radius: 6px;
  justify-content: center;
  background: #e0e0e0;

  > img {
    width: 100px;
    height: 90px;
    transform: ${({ categoryimg }) =>
      categoryimg === "Bebidas" && "translateY(-15px)"};
  }
`;

export const DivDescription = styled.div`
  width: 80%;
  padding: 5px 5px 0px 15px;
  height: 90px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  > div h2 {
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-weight: 700;
  }

  > div p {
    color: #828282;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
  }

  > div div {
    margin-top: 19px;

    width: 100%;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background: #F2F2F2;
  }


  > div div span:nth-child(1) {
    width: 30px;
    height: 33px;

    font-weight: 200;
    font-size: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    color: red;

    cursor: pointer;
  }

  > div div span:nth-child(2) {
    width: 35px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #ffffff;
  }

  > div div span:nth-child(3) {
    width: 30px;
    height: 33px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 22px;
    font-weight: 900;
    color: red;

    cursor: pointer;
  }

  > i {
    cursor: pointer;
    font-size: 18px;
    color: #BDBDBD;
  }
`;
