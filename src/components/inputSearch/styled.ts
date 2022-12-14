import styled from "styled-components";

export const FormInput = styled.form`
  width: 100%;
  max-width: 325px;

  display: flex;
  padding: 5px;

  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  transition: 0.3s ease-in-out;

  :hover {
    border: 2px solid #333333;
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  border: none;
  outline: none;

  padding-left: 15px;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  ::placeholder {
    color: #E0E0E0;
  }
`;

export const IconLup = styled.i`
  height: 40px;

  background: #27ae60;
  border: 2px solid #27ae60;
  border-radius: 8px;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;

  cursor: pointer;
`;
