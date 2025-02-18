"use client";
import React, { useEffect } from "react";
import Aos from "aos";

function AboutIntro() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="lg:mx-0 mx-5 h-screen">
      <div
        className="flex h-[75vh]  flex-col items-center justify-center"
   
      >
        <h1 className="text-2xl font-semibold text-center mt-5  title-head-gradient md:w-[70%] title-head">
          <span className="text-gray-400">
            About Me<span className="text-black">?{" "}</span>
          </span>
          My Story Begins Here!
        </h1>
      </div>
    </div>
  );
}

export default AboutIntro;
