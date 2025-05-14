import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data';
import QuestionCard from '../components/QuestionCard';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const navigate = useNavigate();

  const correctAnswer = questions[currentQuestion].correct;

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    if (answer === correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
        setIsAnswered(false);
      } else {
        const scores = JSON.parse(localStorage.getItem('quizScores') || '[]');
        scores.push({ 
          score, 
          total: questions.length, 
          date: new Date().toISOString() 
        });
        localStorage.setItem('quizScores', JSON.stringify(scores));
        navigate('/result', { state: { score, total: questions.length } });
      }
    }, 1000);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="progress mb-4">
            <div
              className="progress-bar"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            >
              {currentQuestion + 1}/{questions.length}
            </div>
          </div>
          <QuestionCard
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            correctAnswer={correctAnswer}
            handleAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
            isAnswered={isAnswered}
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;