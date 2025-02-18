import WorkCard from "@/components/WorkCard/WorkCard";
import WorkSwiper from "@/components/WorkSwiper/WorkSwiper";
import React from "react";

function page() {
  return (
    <div className="lg:mx-0 mx-5">
      <div className="flex h-[75vh]  flex-col items-center justify-center mb-24">
        <div className="w-[130px] h-[130px] bg-white px-7 pt-[25px] rounded-full flex justify-center items-center my-9">
          <img className="" src="mojis/mojiWorkOne.png" alt="" />
        </div>
        <div className="text-2xl font-semibold text-center  title-head-gradient md:w-[70%] title-head gap-3">
          I like making fun, <br /> interactive things with code.
        </div>
      </div>

      <WorkCard />
      <WorkSwiper />

      <div className="flex h-[80vh]  flex-col items-center justify-center bg-white rounded-2xl mb-10 max-w-[1200px] mx-auto">
        <h1 className="title-head sm:w-[70%] lg:w-[90%] font-semibold text-center   title-head-gradient ">
          Want to create something amazing together?{" "}
          <span className="text-gray-600 underline cursor-pointer">
            {" "}
            <a href="/contact#calender">Let&lsquo;s chat</a>{" "}
          </span>
          !
        </h1>
        <a
          href="/contact#calender"
          className="px-10 py-3 bg-black text-white mt-8 rounded-full cursor-pointer"
        >
          Let&lsquo;s chat
        </a>
      </div>
    </div>
  );
}

export default page;
