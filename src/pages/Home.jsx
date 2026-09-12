import React from "react";
import { useNavigate } from "react-router-dom";
import { Wallet, ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import logo from "../assets/logo.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Main Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">

        <div className="w-full max-w-6xl mx-auto text-center">

          {/* Logo + Name */}
          <div className="flex items-center justify-center gap-4 mb-8">

            {/* Logo */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl
                            flex items-center justify-center">
              <img
                src={logo}
                alt="Expense Tracker Logo"
                className="w-35 h-35 md:w-35 md:h-35 object-contain"
                />
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Expense <span className="text-blue-600">Tracker</span>
            </h1>

          </div>


          {/* Description */}
          <div className="max-w-3xl mx-auto">

            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
              Take control of your finances with Expense Tracker.
            </p>

            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                Take control of your finances with Expense Tracker. Easily manage your income and expenses, monitor your spending, and understand where your money goes — all in one place.
            </p>

          </div>


          {/* Get Started Button */}
          <button
            onClick={() => navigate("/login")}
            className="mt-10 inline-flex items-center gap-3
                       bg-blue-600 hover:bg-blue-700
                       text-white font-semibold
                       px-8 py-4 rounded-full
                       text-lg shadow-lg
                       transition-all duration-300
                       hover:scale-105"
          >
            Get Started

            <ArrowRight size={22} />
          </button>


          {/* Illustration / Dashboard Preview */}
          <div className="relative mt-16 flex justify-center items-end">

            {/* Background Circle */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96
                            bg-blue-50 rounded-full
                            -z-0">
            </div>


            {/* Mobile Dashboard Card */}
            <div className="relative z-10
                            w-64 md:w-72
                            bg-white
                            rounded-3xl
                            border border-gray-100
                            shadow-2xl
                            p-5">

              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">

                <div className="text-left">
                  <p className="text-xs text-gray-400">
                    Total Balance
                  </p>

                  <p className="text-2xl font-bold text-gray-900">
                    ₹12,500
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-blue-100
                                flex items-center justify-center">

                  <Wallet
                    size={20}
                    className="text-blue-600"
                  />

                </div>

              </div>


              {/* Chart */}
              <div className="flex items-end justify-center gap-3
                              h-28 mb-6">

                <div className="w-7 bg-blue-200 rounded-t-lg h-12"></div>

                <div className="w-7 bg-blue-300 rounded-t-lg h-20"></div>

                <div className="w-7 bg-blue-400 rounded-t-lg h-16"></div>

                <div className="w-7 bg-blue-500 rounded-t-lg h-24"></div>

                <div className="w-7 bg-blue-600 rounded-t-lg h-28"></div>

              </div>


              {/* Income */}
              <div className="flex items-center justify-between
                              bg-green-50 rounded-xl p-3 mb-3">

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 bg-green-100 rounded-full
                                  flex items-center justify-center">

                    <TrendingUp
                      size={18}
                      className="text-green-600"
                    />

                  </div>

                  <div className="text-left">
                    <p className="text-xs text-gray-500">
                      Income
                    </p>

                    <p className="font-semibold text-gray-800">
                      ₹5,000
                    </p>
                  </div>

                </div>

                <span className="text-green-600 font-semibold">
                  +₹5,000
                </span>

              </div>


              {/* Expense */}
              <div className="flex items-center justify-between
                              bg-red-50 rounded-xl p-3">

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 bg-red-100 rounded-full
                                  flex items-center justify-center">

                    <TrendingDown
                      size={18}
                      className="text-red-500"
                    />

                  </div>

                  <div className="text-left">
                    <p className="text-xs text-gray-500">
                      Expense
                    </p>

                    <p className="font-semibold text-gray-800">
                      ₹2,500
                    </p>
                  </div>

                </div>

                <span className="text-red-500 font-semibold">
                  -₹2,500
                </span>

              </div>

            </div>


            {/* Wallet Decoration */}
            <div className="hidden md:flex absolute right-[15%] bottom-4
                            w-32 h-24
                            bg-blue-600
                            rounded-2xl
                            shadow-xl
                            items-center justify-center">

              <Wallet
                size={45}
                className="text-white"
              />

            </div>


            {/* Coins Decoration */}
            <div className="hidden md:flex absolute left-[18%] bottom-0
                            flex-col items-center">

              <div className="w-16 h-5 bg-yellow-400 rounded-full shadow-md"></div>

              <div className="w-16 h-5 bg-yellow-500 rounded-full
                              -mt-2 shadow-md"></div>

              <div className="w-16 h-5 bg-yellow-400 rounded-full
                              -mt-2 shadow-md"></div>

            </div>

          </div>

        </div>

      </main>


      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-400">
        Manage your money. Track your progress. Build better habits.
      </footer>

    </div>
  );
};

export default Home;