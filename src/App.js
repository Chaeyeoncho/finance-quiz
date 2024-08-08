import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "../src/components/Quiz";
import QuizDetail from "../src/components/QuizDetail";
import QuizResult from "../src/components/QuizResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/detail" element={<QuizDetail />} />
        <Route path="/result" element={<QuizResult />} />
      </Routes>
    </Router>
  );
}

export default App;
