import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "../src/components/Quiz";
import QuizDetail from "../src/components/QuizDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/detail" element={<QuizDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
