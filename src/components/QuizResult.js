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
  margin-bottom: 20px; /* 이미지를 버튼들 위로 올리기 위해 조정 */
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* 항목들 사이의 간격 */
  width: 100%;
  margin-top: auto; /* 버튼 리스트를 컨테이너 하단으로 이동 */
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

  const handleBackToQuiz = () => {
    navigate("/");
  };

  const handleQuestionClick = (question) => {
    if (question === "질문에 대한 해설") {
      navigate("/explanation"); // '질문에 대한 해설' 버튼을 클릭하면 ExplanationPage로 이동
    } else {
      alert(`"${question}"에 대한 더 많은 정보를 제공합니다.`);
    }
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
