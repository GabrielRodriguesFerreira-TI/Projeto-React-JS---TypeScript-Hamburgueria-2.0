import styled, { css } from "styled-components";
import { Link as LinkStyled } from "react-router-dom";
import { iProps } from "./types";

export const ButtonStyled = styled.button<iProps>`
  ${({ typeButton }) => {
    switch (typeButton) {
      case "buttonRegister":
        return css`
          background: #219653;
          border: 1px solid #219653;
          color: #ffffff;
        `;
      case "buttonLogin":
        return css`
          background: #219653;
          border: 1px solid #219653;
          color: #ffffff;
        `;
      case "buttonList":
        return css`
          background: #bdbdbd;
          border: 2px solid #bdbdbd;
          color: #ffffff;
        `;
    }
  }}

  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  gap: 10px;

  border-radius: 8px;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  transition: 0.3s ease-in-out;
`;

export const ButtonStyledLink = styled(LinkStyled)<iProps>`
  ${({ typelink }) => {
    switch (typelink) {
      case "linkLogin":
        return css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          height: 50px;
          padding: 0px 40px;
          gap: 10px;

          background: #f5f5f5;
          border: 1px solid #f5f5f5;
          border-radius: 8px;

          font-size: 16px;
          line-height: 28px;
        `;
      case "linkRegister":
        return css`
          background: transparent;
          border: 1px solid transparent;
          border-bottom: 2px solid #828282;
        `;
    }
  }}

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  color: #828282;
`;
