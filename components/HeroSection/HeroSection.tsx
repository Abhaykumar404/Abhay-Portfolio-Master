"use client";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

function HeroSection() {
  const [languageIndex, setLanguageIndex] = useState<number>(0);

  const language: string[] = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "नमस्ते",
    "Zdravstvuyte",
    " مرحبا",
    "こんにちは ",
    "Hei",
    "Yia sas",
  ];

  useEffect(() => {
    const languageInterval = setInterval(() => {
      //   setCurrentIndex((prevIndexImage) => (prevIndexImage + 1) % 4);
      setLanguageIndex((prevIndex) => (prevIndex + 1) % language.length);
    }, 2000);
    Aos.init();
    return () => clearInterval(languageInterval);
  }, [language.length]);
  return (
    <section className="flex flex-col justify-center items-center h-[80vh]">
      <div className="text-center  ">
        <h3
          className="title-head uppercase transition-all duration-500  font-bold title-head-gradient pt-[30vh]"
          id="languageDisplay"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000"
        >
          {language[languageIndex]}
        </h3>
      </div>
      <div
        className="flex justify-center items-center mt-auto"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
      >
        <a href="#abhay" aria-label="Link to abhay section">
          <img
            src="homepage/down.png"
            alt="Download Icon"
            className="animate-bounce w-8 h-8 "
          />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
