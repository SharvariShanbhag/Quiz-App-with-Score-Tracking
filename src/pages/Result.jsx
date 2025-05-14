import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };
  const pastScores = JSON.parse(localStorage.getItem('quizScores') || '[]');

  return (
    <div className="container mt-5 text-center">
      <h2>Your Score: {score}/{total}</h2>
      <p className="fs-4">
        {score === total ? 'Perfect! 🎉' : score > total/2 ? 'Good job! 👍' : 'Keep practicing! 💪'}
      </p>
      <button 
        className="btn btn-primary mt-3"
        onClick={() => navigate('/quiz')}
      >
        Retake Quiz
      </button>
      
      {pastScores.length > 0 && (
        <div className="mt-5">
          <h4>Previous Scores:</h4>
          <ul className="list-group">
            {pastScores.reverse().map((s, idx) => (
              <li key={idx} className="list-group-item d-flex justify-content-between">
                <span>{s.score}/{s.total}</span>
                <span className="text-muted">
                  {new Date(s.date).toLocaleDateString()} at {new Date(s.date).toLocaleTimeString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Result;