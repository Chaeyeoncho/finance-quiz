import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";
import Splash from "./Splash"; // Splash 컴포넌트를 import

const keywords = [
  "예산 관리",
  "저축",
  "투자",
  "신용 점수",
  "부채",
  "보험",
  "금리",
  "주식",
  "채권",
  "펀드",
  "부동산",
  "세금",
  "연금",
  "리스크 관리",
  "환율",
  "자산 배분",
  "재무제표",
  "현금 흐름",
  "기업가치평가",
  "파생상품",
  "비트코인",
];

const Quiz = () => {
  const navigate = useNavigate();
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleKeywordClick = (keyword) => {
    setSelectedKeywords((prevSelectedKeywords) =>
      prevSelectedKeywords.includes(keyword)
        ? prevSelectedKeywords.filter((k) => k !== keyword)
        : [...prevSelectedKeywords, keyword]
    );
  };

  const handleQuizCreation = () => {
    if (selectedKeywords.length > 0) {
      navigate("/detail", { state: { keywords: selectedKeywords } });
    } else {
      alert("키워드를 선택해주세요.");
    }
  };

  if (showSplash) {
    return <Splash />;
  }

  return (
    <div className="quiz-container">
      <h2 className="left-align">학습할 키워드를</h2>
      <h2 className="left-align"> 선택해주세요</h2>
      <input
        className="search-input"
        type="text"
        placeholder="원하는 키워드를 입력해주세요"
      />
      <div className="keywords-container">
        {keywords.map((keyword, index) => (
          <div
            key={index}
            className={`keyword-button ${
              selectedKeywords.includes(keyword) ? "selected" : ""
            }`}
            onClick={() => handleKeywordClick(keyword)}
          >
            {keyword}
          </div>
        ))}
      </div>
      <button
        className="generate-quiz-button"
        onClick={handleQuizCreation}
        disabled={selectedKeywords.length === 0}
      >
        퀴즈 생성하기
      </button>
    </div>
  );
};

export default Quiz;
