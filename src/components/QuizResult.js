import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import partyPopperImage from "../assets/img/party_popper.jpg"; // 이미지를 가져옵니다

const Container = styled.div`
  width: 360px;
  height: 640px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 수직 상단 정렬 */
  align-items: center; /* 수평 가운데 정렬 */
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
  margin-bottom: auto; /* 이미지를 맨 아래로 내리기 */
`;

const QuizResult = () => {
  const navigate = useNavigate();

  const handleBackToQuiz = () => {
    navigate("/");
  };

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
    </Container>
  );
};

export default QuizResult;
