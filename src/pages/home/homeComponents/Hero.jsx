import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="relative w-full  mx-auto min-h-screen bg-linear-to-b from-[#000A3B] to-black flex flex-col justify-center items-center text-center overflow-hidden">
      
    
      <img
        src="/logo.png"
        alt="logo"
        className="absolute md:left-0 md:top-1/2 top-50 transform -translate-y-1/2 opacity-30 w-[550px] h-auto object-contain"
      />

    
      <div className="relative z-10 px-6 md:px-0">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to the <span className="text-blue-200">RAIN</span><span className="text-[#26FF60]">Drop</span> Convention
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8">
          Join us to learn, share, and explore rainwater conservation techniques
        </p>
        <Link
          to="/register"
          className="bg-[#26FF60] text-black font-bold px-6 py-3 rounded-full hover:bg-green-500 transition"
        >
          Register Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
