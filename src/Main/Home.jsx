import React from "react";
import HomeImg from "../images/home.jpg";

function Home() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-4 py-0 sm:py-24 sm:py-5 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow sm:w-1/2 lg:pr-24 md:pr-16 flex flex-col sm:items-start sm:text-left mb-16 sm:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-white">
            Welcome to MSproduction
            <br className="hidden lg:inline-block" />
            <p className="text-3xl text-red-400">
              Create your website starting at $25.
            </p>
          </h1>
          <p className="mb-8 leading-relaxed">
            Affordable and comprehensive website offering notes and cheat sheets
            for $25 or less. Find concise and valuable resources for various
            subjects to aid your learning journey.Inexpensive cheat sheets
            available for $5 providing quick reference guides for essential
            topics. Simplify your study process with concise and affordable
            aids.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={HomeImg}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
