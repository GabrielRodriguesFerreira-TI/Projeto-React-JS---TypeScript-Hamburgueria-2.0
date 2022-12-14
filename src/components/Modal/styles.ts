import styled from "styled-components";

export const DivWrapper = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.25);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  margin: 0 10px;

  position: relative;
  top: -30px;

  width: 100%;
  max-width: 450px;
  max-height: 500px;

  background: #ffffff;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  padding-bottom: 15px;

  animation: FadeIn 0.5s ease 0s 1 normal forwards;

  @keyframes FadeIn {
    0% {
      opacity: 0;
      transform: translateY(-250px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  header {
    width: 93.3%;
    height: 50px;
    padding: 0 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #27ae60;
    border-radius: 4px 4px 0px 0px;

    h2 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: #ffffff;
    }

    i {
      cursor: pointer;
      font-family: "Inter", sans-serif;
      font-style: normal;
      color: #ffffff;
    }
  }

  div {
    width: 100%;
    height: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap: 10px;

    h2 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      color: #333333;
    }

    span {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      text-align: center
      color: #828282;
    }
  }
`;
