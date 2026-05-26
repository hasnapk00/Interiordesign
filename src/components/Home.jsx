import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] bg-white px-6 md:px-12 lg:px-20 py-12 flex items-center font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        
        {/* Left Content */}
        <div className="flex flex-col items-start text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold leading-tight text-black tracking-tight">
            Interior Design
          </h1>

          <p className="mt-6 text-zinc-500 max-w-xl leading-relaxed text-sm md:text-base">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            innovation, Allowing you to transform your living spaces into the
            epitome of luxury and sophistication
          </p>

          <Link to="/signup" className="mt-8 bg-black text-white px-8 py-4 rounded-sm font-medium hover:bg-gray-800 transition text-sm">
            Start Project
          </Link>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8 md:gap-16 w-full">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-black">400+</h2>
              <p className="text-zinc-500 text-xs md:text-sm mt-1">Project Complete</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-black">600+</h2>
              <p className="text-zinc-500 text-xs md:text-sm mt-1">Satisfied Clients</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-black">100+</h2>
              <p className="text-zinc-500 text-xs md:text-sm mt-1">Unique Styles</p>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative flex flex-col items-end space-y-12 w-full max-w-md md:max-w-lg mx-auto lg:mx-0">
          {/* Top Image */}
          <img
            src="/home1.jpg"
            alt="Interior Design"
            className="w-4/5 max-w-[320px] lg:max-w-[380px] h-[200px] sm:h-[250px] lg:h-[280px] object-cover rounded-sm shadow-md"
          />
          
          {/* Bottom Image Container */}
          <div className="relative -mt-10 mr-auto w-[90%] max-w-[340px] sm:max-w-[380px] lg:max-w-[440px]">
            {/* Square outline (standard relative layout dimensions) */}
            <div className="absolute -left-4 -top-4 sm:-left-8 sm:-top-8 w-16 h-16 sm:w-24 sm:h-24 border border-zinc-400 z-0" />

            <img
              src="/home2.jpg"
              alt="Living Room"
              className="w-full h-[180px] sm:h-[240px] lg:h-[300px] object-cover relative z-10 rounded-sm shadow-md"
            />

            {/* Scroll Indicator Button */}
            <button className="absolute bottom-0 right-0 w-14 h-14 sm:w-20 sm:h-20 bg-black flex items-center justify-center z-20 text-white text-2xl hover:bg-gray-800 transition cursor-pointer">
              ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
