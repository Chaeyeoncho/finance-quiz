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
  const quiz_result = location.state || {};

  const handleBackToQuiz = () => {
    navigate("/");
  };

  const similarity = quiz_result.quiz_result.similarity
  let headerMessage = "축하해요";
  let resultMessage = "로 거의 맞췄어요!";

  if (similarity < 50) {
    headerMessage = "이 문제는";
    resultMessage = "로 학습이 더 필요해요.";
  } else if (similarity < 75) {
    headerMessage = "아쉬워요";
    resultMessage = "로 정답과 유사해요.";
  }

  const handleQuestionClick = async (question) => {
    if (question === "질문에 대한 해설") {
      setShowSplash(true);
      try {
        // API에 POST 요청 보내기
        const response = await fetch(
          "http://localhost:8000/api/user/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              content: "금리가 오르면 부동산 가격이 대체로 내려갑니다.",
              answer_id: 2,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("API 요청에 실패했습니다.");
        }

        const data = await response.json();
        console.log("API 응답:", data);

        setTimeout(() => {
          navigate("/explanation", { state: { similarity: data.similarity } });
        }, 2000);
      } catch (error) {
        console.error("오류:", error);
        alert("해설을 가져오는 중 오류가 발생했습니다.");
      } finally {
        setShowSplash(false);
      }
    } else {
      alert(`"${question}"에 대한 더 많은 정보를 제공합니다.`);
    }
  };

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
      정답률{" "}
      <HighlightedText>
        {similarity + "%"|| "알 수 없음 %"}
      </HighlightedText>
      {resultMessage}
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
