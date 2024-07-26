import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const {portfolioData} = useSelector((state) => state.portfolio);
  const {intro} = portfolioData;
  const{ firstName, lastName, welcomeText, description, caption } = intro
  return (
    <div className="h-auto bg-primary flex flex-col items-start justify-center gap-8 pt-10">
      <p className="text-xl">
        <span className="text-red-600 underline underline-offset-4">Please go to the Admin Page, by using the credentials given below. And update the contents as you wish</span> <br />
        <span className="text-red-400">
          username: siva.s <br />
          password: siva9876
        </span>
      </p>
      <h1 className="text-white">{welcomeText || ''}</h1>
      <h1 className="text-secondary text-7xl sm:text-3xl font-semibold">
        {firstName || ''} {lastName || ''}
      </h1>
      <h1 className="text-white text-6xl sm:text-3xl font-semibold">
        {caption || ''}
      </h1>
      <p className="text-white text-justify w-2/3 sm:w-full">
        {description || ''}
      </p>
      <button className="btn border-2 border-teritary text-teritary text-2xl px-10 py-3 rounded-full">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
