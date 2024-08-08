import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 360px;
  height: 570px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 요소들을 세로 방향으로 분배 */
`;

const Header = styled.div`
  font-size: 16px;
  color: #fdba12;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const BackButton = styled.div`
  font-size: 18px;
  cursor: pointer;
  text-align: left;
`;

const Question = styled.div`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;

const Blanks = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
`;

const AnswerInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 30px;
  font-size: 16px;
  text-align: center;
  box-sizing: border-box;

  &::placeholder {
    color: #6e6259;
    font-weight: 500;
  }
`;

const CharCount = styled.div`
  color: #888;
  font-size: 14px;
  margin-top: 20px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto; /* 버튼들을 맨 밑으로 내리기 */
`;

const Button = styled.button`
  flex: 1;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin: 0 5px;

  &.hint-button {
    background-color: #f0f0f0;
    color: black;
  }

  &.submit-button {
    background-color: #fdba12;
    color: black;
  }
`;

const QuizDetail = () => {
  const [charCount, setCharCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10분을 초로 환산
  const location = useLocation();
  const navigate = useNavigate();
  const { keyword } = location.state || {};

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    setCharCount(e.target.value.length);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleCheckAnswer = () => {
    navigate("/result");
  };

  return (
    <Container>
      <div>
        <BackButton onClick={() => navigate(-1)}> ← </BackButton>
        <Header>{formatTime(timeLeft)} 남음</Header>
        <Question>
          위험을 분산시키기 위해 다양한 종류의 주식이나 채권 등을 한데 묶어 놓은
          투자상품을 무엇이라고 하나요?
        </Question>
        <AnswerInput
          type="text"
          placeholder="빈칸에 정답을 입력해주세요"
          maxLength={2}
          onChange={handleInputChange}
        />
        <CharCount>{charCount}/2자</CharCount>
      </div>
      <Buttons>
        <Button className="hint-button">힌트 보기</Button>
        <Button className="submit-button" onClick={handleCheckAnswer}>
          정답 확인
        </Button>
      </Buttons>
    </Container>
  );
};

export default QuizDetail;
