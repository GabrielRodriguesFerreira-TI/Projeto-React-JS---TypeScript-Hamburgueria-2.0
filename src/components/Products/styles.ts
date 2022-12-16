import styled, { css } from "styled-components";
import { iCategory, iPosition } from "./types";

export const LiStyled = styled.li<iPosition>`
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  min-width: 280px;
  height: 95%;
  max-height: 346px;
  transition: 0.3s ease-in-out;
  -webkit-filter: brightness(85%);
  animation: myAnim 1s ease 0s 1 normal forwards;

  ${({ position }) => {
    switch (position) {
      case 0:
        return css`
          animation: myAnim 2.5s ease 0s 1 normal forwards;
        `;
      case 1:
        return css`
          animation: myAnim 2s ease 0s 1 normal forwards;
        `;
      case 2:
        return css`
          animation: myAnim 1s ease 0s 1 normal forwards;
        `;
      case 3:
        return css`
          animation: myAnim 2.5s ease 0s 1 normal forwards;
        `;
      case 4:
        return css`
          animation: myAnim 2s ease 0s 1 normal forwards;
        `;
      case 5:
        return css`
          animation: myAnim 1s ease 0s 1 normal forwards;
        `;
    }
  }}

  &:hover {
    border: 2px solid #219653;
    -webkit-filter: brightness(100%);

    button {
      border: 2px solid #219653;
      background: #219653;
    }
  }

  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: translateX(-150px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const FigureLi = styled.figure<iCategory>`
  display: flex;
  border-radius: 6px 6px 0px 0px;
  justify-content: center;
  background: #f5f5f5;

  > img {
    width: 170px;
    height: 150px;
    transition: 0.3s ease-in-out;
    transform: ${({ categoryimg }) =>
      categoryimg === "Bebidas" && "translateY(-15px)"};
  }
`;

export const DivDescription = styled.div`
  padding: 25px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  > h2 {
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-weight: 700;
  }

  > p {
    color: #828282;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
  }

  > span {
    color: #27ae60;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
  }
`;
