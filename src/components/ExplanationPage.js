import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 10px 0 20px 0;
`;

const Section = styled.div`
  margin: 20px 0;
  text-align: left;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #fdba12;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.5;
`;

const ExplanationPage = () => {
  const navigate = useNavigate();

  const handleBackToQuiz = () => {
    navigate("/result"); // 이전 페이지로 이동 (퀴즈 결과 페이지)
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBackToQuiz}>←</BackButton>
      </Header>
      <Title>금리 조정의 영향</Title>
      <Section>
        <SectionTitle>소비와 투자</SectionTitle>
        <Paragraph>
          금리가 낮아지면 대출이 더 저렴해지므로 가계와 기업이 돈을 빌려 소비와
          투자를 늘리게 됩니다. 반대로 금리가 높아지면 대출 비용이 증가해 소비와
          투자가 감소합니다.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>주택 시장</SectionTitle>
        <Paragraph>
          낮은 금리는 주택담보대출 비용을 줄여 주택 구입 수요를 늘릴 수
          있습니다. 반대로 금리가 오르면 주택 구입 비용이 증가해 수요가 줄어들
          수 있습니다.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>환율</SectionTitle>
        <Paragraph>
          금리 인하는 자국 통화 가치를 떨어뜨려 수출 경쟁력을 높일 수 있습니다.
          반대로 금리 인상은 통화 가치를 상승시켜 수출에 불리하게 작용할 수
          있습니다.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default ExplanationPage;
