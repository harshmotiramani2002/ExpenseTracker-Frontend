import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center px-6">
      
      <div className="text-center text-white max-w-3xl">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Expense Tracker
        </h1>

        <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10">
          Take control of your finances with Expense Tracker. 
          Easily manage your income and expenses, monitor your spending,
          and understand where your money goes — all in one place.
        </p>

        <button
          onClick={handleGetStarted}
          className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg
                     text-lg shadow-lg hover:bg-blue-50 
                     transition duration-300 hover:scale-105"
        >
          Get Started
        </button>

      </div>

    </div>
  );
};

export default Home;