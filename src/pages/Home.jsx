import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="text-center mt-5">
      <h1>Welcome to Quiz App</h1>
      <button 
        className="btn btn-primary btn-lg mt-3"
        onClick={() => navigate('/quiz')}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;