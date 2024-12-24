import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/tailwind-docs');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Tailwind Documentation</h1>
        <p className="text-xl mb-4">Click the button below to explore the Tailwind CSS sections</p>
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600"
        >
          Open Tailwind Docs
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
