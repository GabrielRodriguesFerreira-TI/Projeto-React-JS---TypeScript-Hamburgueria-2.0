import styled from "styled-components";

export const MainForm = styled.form`
  width: 90%;
  max-width: 400px;
  padding: 15px 35px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 15px;

  background: #ffffff;
  border: 2px solid #f5f5f5;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  span {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #999999;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #333333;
`;
