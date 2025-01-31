import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../config/routes';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
            404
          </span>
        </h1>
        <h2 className="text-2xl mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate(routes.home)}
          className="px-8 py-3 rounded-md bg-neon-blue text-black font-semibold hover:bg-neon-blue/90 transition-colors"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
