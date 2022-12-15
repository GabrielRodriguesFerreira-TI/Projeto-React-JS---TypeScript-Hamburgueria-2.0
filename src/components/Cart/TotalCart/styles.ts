import styled from "styled-components";

export const DivTotal = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  > div {
    padding: 20px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
  }

  > div > p {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
  }

  > div > span {
    color: #828282;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
  }
`;
