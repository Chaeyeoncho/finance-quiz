import React, { useState, useEffect, StrictMode } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import partyPopperImage from "../assets/img/party_popper.jpg";
import Splash from "./Splash";

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
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);
  const quiz_result = location.state.quiz_result || {};
  const keyword_list = location.state.keyword_list || {};

  const handleBackToQuiz = () => {
    navigate("/");
  };

  console.log(keyword_list)

  const similarity = quiz_result.similarity
  let headerMessage = "축하해요";
  let resultMessage = "로 거의 맞췄어요!";

  if (similarity < 50) {
    headerMessage = "이 문제는";
    resultMessage = "로 학습이 더 필요해요.";
  } else if (similarity < 75) {
    headerMessage = "괜찮은 답이에요";
    resultMessage = "로 정답과 유사해요.";
  }

  

  if (showSplash) {
    return <Splash />;
  }
  return (
    <Container>
      <Header>
        <BackButton onClick={handleBackToQuiz}>←</BackButton>
      </Header>
      
      <ResultText>
      {headerMessage}
      <br />
      유사도{" "}
      <HighlightedText>
        {similarity + "%"|| "알 수 없음 %"}
      </HighlightedText>
      {resultMessage}
    </ResultText>
      <Image src={partyPopperImage} alt="Party Popper" />
      {"퀴즈 정답: " + quiz_result.answer}
      <ButtonList>
        {keyword_list.length > 0 ? (
          keyword_list.map((keyword, index) => {
            const buttonText = `${keyword.trim()}(이) 뭔가요?`;
            return (
              <Button key={index} onClick={() => handleQuestionClick(buttonText)}>
                {buttonText}
              </Button>
            );
          })
        ) : (
          <p>키워드가 없습니다.</p>
        )}
        <LastButton onClick={() => handleQuestionClick("질문에 대한 해설")}>
          질문에 대한 해설 더 알아보러 가기
        </LastButton>
      </ButtonList>
    </Container>
  );
};

export default QuizResult;
