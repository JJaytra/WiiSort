import React from "react";

const HeroContent = () => {
  return (
    <div
      className="h-2/5 flex bg-slate-200 p-4 items-center justify-center mx-80 h-80 rounded-3xl mb-10"
      style={{
        backgroundImage: "url('/homebg.png')",
        backgroundSize: "cover",
      }}
    >
      <div>
        <p className="text-4xl">Sort hundreds of Wii games</p>
        <input
          type="text"
          className="rounded-lg w-80 h-12 mr-1 px-2 bg-gray-100"
          placeholder="Search"
        />
        <button className="bg-wiiBlue rounded-lg w-16 h-12 text-white">
          Go
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
