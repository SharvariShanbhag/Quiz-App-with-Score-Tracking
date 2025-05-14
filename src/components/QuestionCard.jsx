import React from 'react';

const QuestionCard = ({ 
  question, 
  options, 
  correctAnswer,  // Added this prop
  selectedAnswer, 
  handleAnswer, 
  isAnswered 
}) => (
  <div className="card mb-4">
    <div className="card-body">
      <h4 className="card-title">{question}</h4>
      <div className="d-grid gap-2">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(option)}
            className={`btn ${
              isAnswered 
                ? option === correctAnswer 
                  ? 'btn-success' 
                  : selectedAnswer === option 
                    ? 'btn-danger' 
                    : 'btn-outline-secondary'
                : selectedAnswer === option 
                  ? 'btn-primary' 
                  : 'btn-outline-primary'
            }`}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default QuestionCard;