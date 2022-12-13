import styled, { css } from "styled-components";
import { Link as LinkStyled } from "react-router-dom";

const buttonVariant = {
  buttonRegister: css`
    width: 100%;
  `
}

export const ButtonStyled = styled.button`

  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  gap: 10px;

  background: #219653;
  border: 1px solid #219653;
  border-radius: 8px;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
`;

export const ButtonStyledLink = styled(LinkStyled)`
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  gap: 10px;

  background: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 8px;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  text-decoration: none;
  color: #999999;
`;
