import styled from "styled-components";
import { ReactComponent as AILogo } from "../assets/img/aimentor.svg";

const Splash = () => {
  return (
    <Wrapper>
      <span>AI가 도와주는 금융 멘토,</span>
      <AILogo />
    </Wrapper>
  );
};

export default Splash;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  width: 360px;
  height: 100vh;

  background-color: #fdba12;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  transform: translateX(-50%);

  span {
    font-size: 20px;
    font-weight: 700;
    color: white;
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
