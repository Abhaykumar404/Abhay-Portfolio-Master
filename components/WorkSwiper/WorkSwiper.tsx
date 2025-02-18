"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./workSwiper.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
function WorkSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectNames] = useState([
    {
      name: "HomelyHills",
      discription:
        "Welcome to Homely Hills Homestay, where we are on a mission to introduce you to the enchanting beauty of the Garhwal region in Uttarakhand. Our initiative is all about embracing village tourism and letting you experience the true essence of rural life. ",
    },
    {
      name: "Expelee (Official Company Website Project Leadership)",
      discription:
        " I spearheaded the comprehensive development of the company official website, overseeing the entire journey from initial concept to final launch. I independently designed and programmed the site, ensuring strict adherence to the company branding and goals. Furthermore, I duplicated the website for the company branch, highlighting my flexibility in project management and execution. ",
    },
    {
      name: "Elvate Click",
      discription:
        "  Led end-to-end development of the official company website, from conceptualization to implementation. Personally designed and coded the website, ensuring alignment with company branding and objectives. Additionally, replicated the website for the companys branch Elevate Clicks, demonstrating versatility in project management and execution.",
    },
    {
      name: "Story Book",
      discription:
        "Step into a world where imagination meets innovation with our animated storybook for employees. Dive into captivating narratives brought to life through next-level animation, where each page turn unlocks a new dimension of creativity and engagement. With seamless transitions and immersive visuals, this storybook transcends traditional storytelling. ",
    },
  ]);

  const handleSlideChange = (swiper: {
    activeIndex: React.SetStateAction<number>;
  }) => {
    setCurrentSlide(swiper.activeIndex);
  };
  return (
    <div className=" bg-[#e4e4e43c] h-auto md:py-10 py-5 my-10 max-w-[1200px] mx-auto rounded-2xl shadow-container">
      <div className="flex justify-between items-start md:px-16 px-4 w-full md:flex-row flex-col gap-4">
        <div className="md:text-[30px] text-[20px]  font-semibold md:w-1/2">
          <h1>
            When moments captured every dreams crafted into beautiful reality
          </h1>
        </div>
        <div className="text-lg text-start md:w-1/2">
          <ul className="flex md:justify-center md:items-end flex-col">
            <li className="text-sm">HomelyHills </li>
            <li className="text-sm">Expelee </li>
            <li className="text-sm">Elevate Clicks</li>
            <li className="text-sm">Story Book </li>
          <li className="text-sm font-bold">Brace for AI innovation - coming soon!</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-end flex-wrap md:pl-16 pt-[4rem] w-full h-full md:flex-row flex-col pl-4 md:gap-0 gap-4">
        <div className="md:w-1/3 w-full flex flex-col justify-start items-start h-full pr-4 md:pr-0">
          <h1 className="md:w-3/4 w-full text-[16px] font-semibold mb-2">
            {projectNames[currentSlide]?.name}
          </h1>
          <h1 className="md:w-3/4 w-full text-[12px] mb-3">
            {projectNames[currentSlide]?.discription}
          </h1>
          {/* <div className="flex gap-3 md:pb-5">
            <svg
              width="32px"
              height="32px"
              className="swiper-button-prev cursor-pointer"
              viewBox="-3 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="icomoon-ignore"> </g>{" "}
                <path
                  d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z"
                  fill="#000000"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z"
                  fill="#000000"
                >
                  {" "}
                </path>{" "}
              </g>
            </svg>
            <svg
              width="32px"
              height="32px"
              className="swiper-button-next cursor-pointer"
              viewBox="-3 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="icomoon-ignore"> </g>{" "}
                <path
                  d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z"
                  fill="#000000"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z"
                  fill="#000000"
                >
                  {" "}
                </path>{" "}
              </g>
            </svg>
          </div> */}
        </div>
        <div className="md:w-2/3 w-full py-4">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
               autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
            navigation={{
              prevEl: "swiper-button-prev",
              nextEl: "swiper-button-next",
            }}
            onSlideChange={handleSlideChange}
            modules={[Autoplay, Navigation]}
            className="mySwiper h-full py-5"
          >
            <SwiperSlide className="h-full md:px-5">
              <img
                className="w-full h-full rounded-2xl shadow-container cursor-grabbing"
                src="/project/homelyhillsone.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-full md:px-5 cursor-grabbing ">
              <img
                className="rounded-2xl shadow-container "
                src="/project/elvateclieck.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-full md:px-5 cursor-grabbing">
              <img
                className="rounded-2xl shadow-container"
                src="/project/expelee.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-full md:px-5 cursor-grabbing">
              <img
                className="rounded-2xl shadow-container"
                src="/project/swiggyBook.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default WorkSwiper;
