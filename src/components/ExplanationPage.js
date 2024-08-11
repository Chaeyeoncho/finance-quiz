import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect, StrictMode } from "react";
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
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);
  const detail = location.state.detail || {}

  const handleBackToQuiz = () => {
    navigate("/result");
  };

  const parts = detail.content.split(/(<[^>]+>)/g);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBackToQuiz}>←</BackButton>
      </Header>
      <div>
      {parts.map((part, index) => {
        if (part.startsWith('<')) {
          return (
            <div key={index}>
              <br />
              <br />
              {part}
            </div>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </div>
    </Container>
  );
};

export default ExplanationPage;
