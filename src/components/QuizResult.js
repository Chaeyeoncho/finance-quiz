import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import partyPopperImage from "../assets/img/party_popper.jpg";
import Splash from "./Splash"; // 스플래시 컴포넌트 import

const Container = styled.div`
  width: 360px;
  height: 640px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding: 10px 0;
`;

const BackButton = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const ResultText = styled.div`
  font-size: 24px;
  color: #333;
  margin: 20px 0;
`;

const HighlightedText = styled.span`
  color: #fdba12;
  font-weight: 700;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: auto;
`;

const Button = styled.div`
  background-color: #f0f0f0;
  color: #333;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #fdba12;
    color: white;
  }
`;

const LastButton = styled(Button)`
  background-color: #fdba12;
  color: white;
  &:hover {
    background-color: #f0f0f0;
    color: #333;
  }
`;

const QuizResult = () => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(false);

  const handleBackToQuiz = () => {
    navigate("/");
  };

  const handleQuestionClick = (question) => {
    if (question === "질문에 대한 해설") {
      // 스플래시 화면을 보여주고 2초 후에 해설 페이지로 이동
      setShowSplash(true);
      setTimeout(() => {
        navigate("/explanation");
      }, 2000);
    } else {
      alert(`"${question}"에 대한 더 많은 정보를 제공합니다.`);
    }
  };

  // 스플래시 화면이 보이는 동안에는 스플래시 컴포넌트만 렌더링
  if (showSplash) {
    return <Splash />;
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBackToQuiz}>←</BackButton>
      </Header>
      <ResultText>
        축하해요
        <br />
        정답률 <HighlightedText>78%</HighlightedText>로 거의 맞췄어요!
      </ResultText>
      <Image src={partyPopperImage} alt="Party Popper" />
      <ButtonList>
        <Button onClick={() => handleQuestionClick("중앙은행이란?")}>
          중앙은행이란?
        </Button>
        <Button onClick={() => handleQuestionClick("통화정책이란?")}>
          통화정책이란?
        </Button>
        <LastButton onClick={() => handleQuestionClick("질문에 대한 해설")}>
          질문에 대한 해설 더 알아보러 가기
        </LastButton>
      </ButtonList>
    </Container>
  );
};

export default QuizResult;
