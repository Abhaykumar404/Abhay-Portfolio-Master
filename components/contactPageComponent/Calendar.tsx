"use client";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { generateDate, months } from "./components/calender";
import cn from "./components/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { ScheduledMeeting } from "@/model/clientLead";
import {
  convertTimestampToDate,
  formatDateFromTimestamp,
} from "@/common/timeStempToTime";

export default function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [data, setData] = useState<ScheduledMeeting[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const todayDate = new Date();

  const createData = {
    name: name,
    email: email,
    scheduleAt: selectDate.toDate().toDateString(),
    message: message,
  };



  return (
    <div
      id="calender"
      className="flex justify-center items-center flex-col gap-10 lg:h-screen"
    >
      <h3 className="text-3xl font-bold text-center title-head subtitle-heading-bold flex items-center my-16">
        Lets Connect{" "}
      </h3>

      <div className="flex gap-10  justify-center md:w-1/2 mx-auto  items-start sm:flex-row flex-col px-5 md:px-0 h-full">
        <div className="w-full">
          <div className="flex justify-between items-center pb-10">
            <h4 className="select-none font-semibold ">
              {months[today.month()]}, {today.year()}
            </h4>
            <div className="flex gap-10 items-center ">
              <GrFormPrevious
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              />
              <h1
                className=" cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(currentDate);
                }}
              >
                Today
              </h1>
              <GrFormNext
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-7 ">
            {days.map((day, index) => {
              return (
                <h1
                  key={index}
                  className="text-sm text-center grid place-content-center text-gray-500 select-none"
                >
                  {day}
                </h1>
              );
            })}
          </div>

          <div className=" grid grid-cols-7 ">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                  >
                    <h1
                      className={cn(
                        currentMonth ? "" : "text-gray-400",
                        today ? "bg-green-600 text-white" : "",
                        selectDate.toDate().toDateString() ===
                          date.toDate().toDateString()
                          ? "bg-black text-white"
                          : "",
                        "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                      )}
                      onClick={() => {
                        setSelectDate(date);
                      }}
                    >
                      {date.date()}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>

        <div className=" w-full ">
          <h1 className=" font-semibold ">
            Schedule for{" "}
            <span className="underline text">
              {selectDate.toDate().toDateString()}
            </span>
          </h1>
          {data?.length > 0 ? (
            <div className="mt-5">
              {data.slice(0, 3).map((item, index) => (
                <div key={index} className="w-full">
                  <p className="flex justify-between items-center w-full  my-2 ">
                    {item.name ? "" : <div>loading...</div>}
                    <span className="uppercase text-sm">{item.name}</span>{" "}
                    <span className="uppercase text-sm">
                      {item.scheduleAt
                        .toLocaleString("en-US", { timeZone: "UTC" })
                        .slice(0, 10)}
                      {" (30 Min)"}
                    </span>
                  </p>
                  <hr className="h-2" />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-lg mt-5">
              No meeting
              {/* {selectDate.isBefore(todayDate)
                ? "You have not permission to see past metting"
                : ` No meeting for  ${selectDate.toDate().toDateString()}`} */}
            </p>
          )}
          <div className="flex flex-col justify-center items-start gap-5 my-7 w-full h-full">
            <input
              className="w-full py-2 bg-gray-200 px-2 border-2 border-b-black  outline-none "
              type="text "
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
            />
            <input
              className="w-full py-2 bg-gray-200 px-2 border-2 border-b-black  outline-none "
              type="email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
            <input
              className="w-full py-2 bg-gray-200 px-2 border-2 border-b-black  outline-none "
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter Your Message"
            />
            <div
             
              className="px-16 py-2 bg-gray-900 text-white font-semibold rounded-full cursor-pointer"
            >
              {" "}
              Submit{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
