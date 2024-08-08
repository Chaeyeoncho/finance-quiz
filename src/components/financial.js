import React from "react";
import "./Quiz.css";

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
          <div key={index} className="keyword-button">
            {keyword}
          </div>
        ))}
      </div>
      <button className="generate-quiz-button">퀴즈 생성하기</button>
    </div>
  );
};

export default Quiz;
