import React from "react";
import { Link, useNavigate } from "react-router-dom";
import lotiImg from "../../assets/img/Animation - 1743225810587.lottie";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <section className="bg-base-200 min-h-screen">
      <div className="container mx-auto px-6 py-12 lg:flex lg:items-center lg:gap-12">
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-medium text-gray-200">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-400 md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500">
            Sorry, the page you are looking for doesn't exist. Here are some
            helpful links:
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <button 
              onClick={handleGoBack}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-blue-200 border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>Go back</span>
            </button>

            <Link
              to="/"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-500 rounded-lg shrink-0 sm:w-auto hover:bg-gray-600"
            >
              Take me home
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <DotLottieReact 
            src={lotiImg} 
            loop 
            autoplay
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;