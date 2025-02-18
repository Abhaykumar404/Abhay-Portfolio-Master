"use client"
import React, { useEffect } from "react";
import Aos from "aos";


function AboutIntroSecond() {

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="lg:mx-0 mx-5 h-screen">
      <div className="flex h-[80vh]  flex-col items-center justify-center gap-1"   >
        <div className="w-[130px] h-[130px] bg-sky-100 pl-5 px-2 pt-[20px] rounded-full flex justify-center items-center"   data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000">
          <img className="" src="mojis/about.png" alt="" />
        </div>
        <h1 className="  text-center mt-5  md:w-[70%]  bgcliptext md:text-3xl"   data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000">
          I&#39;m Abhay Kumar
        </h1>
        <div className="md:w-[50%] text-center"   data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000">
          <h3 className="  text-2xl  title-head my-3">
            Building Digital Product, Brand and Design Experience
          </h3>
          <p className="md:text-sm text-xs mt-5" >
            Experienced Full Stack Web Developer Dedicated to
            delivering high-quality solutions and integrating AI into projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutIntroSecond;
