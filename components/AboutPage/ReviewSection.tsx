"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function ReviewSection() {
  return (
    <div className="h-screen flex justify-center items-center flex-col w-full px-5">
      <div className="flex flex-col items-center justify-center mx-auto w-full gap-3 my-10 text-center ">
        <h1 className=" title-head  ">
          Testimonials: Words that resonate, stories that inspire
        </h1>
        <p>
          Words that resonate, stories that inspire – discover the power of our
          testimonials.
        </p>
      </div>
      <div className="h-full w-full ">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full w-full"
        >
          <SwiperSlide className=" flex justify-center items-center mt-auto">
            <div className="flex flex-col justify-center items-center md:w-[40%] text-center mx-auto mt-auto relative h-full">
              <svg
                fill="#787878"
                height="256px"
                width="256px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="-3.2 -3.2 70.40 70.40"
                enable-background="new 0 0 64 64"
                xmlSpace="preserve"
                stroke="#787878"
                className="absolute top-32 opacity-25"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Quotemarks-right">
                    {" "}
                    <path d="M14.1933422,9.4116497c-7.8260994,0-14.1922989,6.3662004-14.1922989,14.1924 c0,7.5498009,5.9247999,13.7420998,13.3690996,14.169899c0.1288996,1.3916016,0.0321999,5.1797028-3.5977001,10.4491997 C9.4980431,48.6206512,9.547843,49.1567497,9.888648,49.497551c1.4853945,1.4853973,2.4033947,2.4208984,3.0458946,3.0751991 c0.8408995,0.8554993,1.2247,1.2461014,1.7861996,1.7559013c0.1904001,0.1727982,0.4306002,0.259697,0.6719055,0.259697 c0.2342949,0,0.4676943-0.0819969,0.6561956-0.2450981c6.3251991-5.5038986,13.3515987-16.8759995,12.3349991-30.8115005 C27.7881413,15.3501501,21.820343,9.4116497,14.1933422,9.4116497z M15.4023428,52.2221489 c-0.2723999-0.2684975-0.5830002-0.5848999-1.0410004-1.0508003c-0.5565996-0.5672989-1.3203001-1.3446999-2.4784994-2.5067978 c4.4053001-6.7881012,3.5731993-11.6230011,3.2089996-12.3164024c-0.1729002-0.3290977-0.5274-0.5507965-0.8985004-0.5507965 c-6.7225995,0-12.1922989-5.4697018-12.1922989-12.1933022c0-6.7227001,5.4696999-12.1924,12.1922989-12.1924 c6.5489006,0,11.6777992,5.1582012,12.1963062,12.2646008C27.5322418,39.3501511,18.2168427,49.5268517,15.4023428,52.2221489z"></path>{" "}
                    <path d="M63.9004402,23.5317497v-0.0009995C63.302742,15.3501501,57.3340416,9.4116497,49.7090416,9.4116497 c-7.8261986,0-14.1933937,6.3662004-14.1933937,14.1924c0,7.5498009,5.9257927,13.7420998,13.3710938,14.169899 c0.1289062,1.3906021,0.0312004,5.1767006-3.5996017,10.4491997c-0.2743988,0.3975029-0.2245979,0.9336014,0.1162033,1.2744026 c1.4794998,1.4794998,2.3955002,2.4130974,3.0380974,3.0663986c0.8446999,0.8613014,1.2304993,1.2538986,1.7949028,1.7656021 c0.1903992,0.1718979,0.4315987,0.2587967,0.6718979,0.2587967c0.2344055,0,0.4678001-0.0819969,0.6562004-0.2460976 C57.8896484,48.8383484,64.9160385,37.4663506,63.9004402,23.5317497z M50.917942,52.2221489 c-0.2743988-0.2705002-0.5877991-0.5887985-1.0498009-1.0594978c-0.5565987-0.5665016-1.3172989-1.3418007-2.4706993-2.4981003 c4.4053001-6.7891006,3.5742989-11.6230011,3.2109985-12.3164024c-0.1728973-0.3280983-0.5282974-0.5507965-0.8993988-0.5507965 c-6.7237015,0-12.1933937-5.4697018-12.1933937-12.1933022c0-6.7227001,5.4696922-12.1924,12.1933937-12.1924 c6.5477982,0,11.6777,5.1582012,12.1972008,12.2656002v-0.0009995 C63.0478401,39.3481483,53.7324409,49.5268517,50.917942,52.2221489z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <p>
                Abhay consistently went above and beyond to ensure the
                project&apos;s success. Their attention to detail and commitment
                to quality were evident in every aspect of their work. They
                delivered clean, efficient code and implemented innovative
                solutions that significantly improved the performance and user
                experience of our application.
              </p>
              <h2 className="mt-5 font-semibold">
                Harshit Pandey (Chief Partnerships and People - Zircle)
              </h2>
              <a href="https://www.linkedin.com/in/harshit-pandey-5a4279121/">
              <svg
                  width="34px"
                  height="34px"
                  viewBox="0 0 32 32"
                  className="mt-3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="14"
                      fill="#1275B1"
                    ></rect>{" "}
                    <path
                      d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z"
                      fill="white"
                    ></path>{" "}
                    <path
                      d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z"
                      fill="white"
                    ></path>{" "}
                    <path
                      d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z"
                      fill="white"
                    ></path>{" "}
                  </g>
                </svg>
              </a>
            </div>
          </SwiperSlide>
      
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewSection;
