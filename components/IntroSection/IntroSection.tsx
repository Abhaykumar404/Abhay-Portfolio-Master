"use client";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Image from "next/image";

function IntroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/mojis/1.png",
    "/mojis/2.png",
    "/mojis/3.png",
    "/mojis/4.png",
    "/mojis/5.png",
  ];

  useEffect(() => {
    const languageInterval = setInterval(() => {
      setCurrentIndex((prevIndexImage) => (prevIndexImage + 1) % 4);
    }, 2000);
    Aos.init();
    return () => clearInterval(languageInterval);
  }, []);
  return (
    <section
      className="h-screen flex justify-center items-center"
      id="abhay"
    >
      <div className="transition-all duration-500 flex flex-col items-center">
        <p
          className="subtitle-head-bold "
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="800"
        >
          Hello there <span id=""> {" "}👋🏼{" "} </span>I&apos;m{" "}
        </p>
        <h1
          className="title-head uppercase transition-all duration-500  font-bold title-head-gradient text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="800"
        >
          Abhay Kumar
        </h1>
        <h2
          className="subtitle-head-bold"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="800"
        >
          Software Developer
        </h2>
        <Image
          id="sticker"
          src={`${images[currentIndex]}`}
          alt={`Image ${currentIndex + 1}`}
          height={500}
          width={500}
          className=" h-[40vh] w-auto   object-cover  transition-all duration-500 mt-5"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="800"
        />
        <p
          className="subtitle-head-bold text-center  transition-all duration-500"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="800"
        >
          The most minimalist developer <br /> you&lsquo;ve ever seen
        </p>
      </div>
    </section>
  );
}

export default IntroSection;
