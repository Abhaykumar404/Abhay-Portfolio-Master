import React from "react";
// import ReactDatetimeClass from "react-datetime";
// import Datetime from "react-datetime";

function CalenderShadule() {
  return (
    <div className="h-screen flex justify-center w-full">
      <div className="flex justify-center items-center flex-col w-full">
        <div className="flex flex-col items-center justify-center  gap-5 w-full">
          <h1 className="text-3xl font-bold text-center title-head  bgcliptext flex items-center">
            I&apos;m always up for a chat.
          </h1>
          <div className="h-full justify-center w-full items-center flex md:flex-row flex-col gap-10 md:gap-3 ">
            <div className="md:w-1/3 text-center">
              <h1>Address:</h1>
              <h3>Sultanpur, Dehli, India</h3>
            </div>
            <div className="md:w-1/3 text-center">
              <h1>Email:</h1>
              <h3 className="hover:underline cursor-pointer">
                <a href="mailto:shindheabhay@gmail.com">
                  shindheabhay@gmai.com
                </a>
              </h3>
            </div>
            <div className="md:w-1/3 text-center">
              <h1>Contact:</h1>
              <h3 className="hover:underline cursor-pointer">
                <a href="tel:+7017453181">+91 90586-04886</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalenderShadule;
