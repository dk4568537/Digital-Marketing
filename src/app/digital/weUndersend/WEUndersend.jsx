"use client";
import React, { useEffect, useState } from "react";

const data = [
  { name: "Customised Tool" },
  { name: "Reduced Costs" },
  { name: "Global Reach" },
];
const WEUndersend = () => {
  const [showUndersend, setshowUndersend] = useState("Customised Tool");
  console.log(setshowUndersend);
  return (
    <div className=" flex justify-center items-center bg-[#6171b4]">
      <div className=" h-[100vh] overflow-hidden container md:px-10 text-white pb-5">
        <div className=" py-5 rounded-lg ">
          <h1 className="text-center font-bold font-sans uppercase text-sm md:text-xl lg:text-4xl xl:text-5xl 2xl:text-6xl pt-10 ">
            We Understand your Needs!
          </h1>
          <div className=" flex justify-center items-center gap-2 overflow-hidden md:gap-5 py-7 font-sans">
            {data.map((item, index) => (
              <p
              onClick={() => setshowUndersend(item.name)}
               className={` px-5 py-2 bg-indigo-800 rounded-md ${
                item.name === showUndersend && 'hover:bg-[#ff5c16] shadow-md' 
              }`}>
                {item.name}
              </p>
            ))}
          </div>
        </div>
        {showUndersend === "Customised Tool" && (
          <div className=" flex justify-center items-center pb-10 px-3">
            <div className=" bg-[#33587b] flex justify-center p-5 md:0 rounded-lg items-center md:w-[960px]">
              <p className=" md:py-8 md:w-[750px] md:font-[10px]">
                Many renowned and leading brands use marketing tools to reach
                out to potential customers. Companies adopting social media
                marketing tactics will likely see positive customer retention
                and growth results. Businesses can ensure that their customers
                are constantly engaged and informed about their products or
                serices.
              </p>
            </div>
          </div>
        )}
        {showUndersend === "Reduced Costs" && (
          <div className=" flex justify-center items-center pb-10 px-3">
            <div className=" bg-slate-600 text-gray-300 flex justify-center p-5 md:0 rounded-lg items-center md:w-[960px]">
              <p className=" md:py-8 md:w-[750px] md:font-[10px]">
                Many renowned and leading brands use marketing tools to reach
                out to potential customers. Companies adopting social media
                marketing tactics will likely see positive customer retention
                and growth results. Businesses can ensure that their customers
                are constantly engaged and informed about their products or
                serices.
              </p>
            </div>
          </div>
        )}
         {showUndersend === "Global Reach" && (
          <div className=" flex justify-center items-center pb-10 px-3">
            <div className=" bg-[#33587b] text-green-400 flex justify-center p-5 md:0 rounded-lg items-center md:w-[960px]">
              <p className=" md:py-8 md:w-[750px] md:font-[10px]">
                Many renowned and leading brands use marketing tools to reach
                out to potential customers. Companies adopting social media
                marketing tactics will likely see positive customer retention
                and growth results. Businesses can ensure that their customers
                are constantly engaged and informed about their products or
                serices.
              </p>
            </div>
          </div>
        )}
        <div className=" flex-auto md:flex justify-between items-center pt-10 md:px-5">
          <h1 className=" md:w-[700px] font-bold font-sans md:text-4xl">
            Turn to the best Marketing team! Contact us now!
          </h1>
          <button
            className=" px-5 py-2 rounded-md shadow-md hover:bg-[#fe583b] bg-[#ff5c16]"
            type="button"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default WEUndersend;
