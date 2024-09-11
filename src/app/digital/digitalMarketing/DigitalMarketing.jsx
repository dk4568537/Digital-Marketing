"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const DigitalMarketing = () => {
  const router = useRouter();
  return (
    <div className=" w-full h-[90vh] flex justify-between items-center bg-[#5b7bb8]">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="text-white pl-3 lg:m-10 md:pl-3 flex justify-center items-start flex-col">
          <h1 className="text-3xl md:text-7xl h-auto font-bold pb-2 md:pb-4 uppercase">
            Digital Marketing
          </h1>
          <p className="font-sans">
            The traditional marketplace has now shifted to the digital world, as
            all that we need is only a click away, marketing is always a crucial
            step to taking over any market and digital marketing services are
            just the boost that your business needs. Our experienced analyst
            gauges the market trends, your business audience, and the right
            strategies to execute on the right platform so you can take over
            this digital market as well.
          </p>
          <button
            onClick={() => router.back()}
            className=" bg-white text-black mt-5 hover:text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Go Back
          </button>
        </div>
        <div className="px-5 pb-5 flex justify-center items-center">
          <img
            src="/images/digitalmarketingimg.png"
            className=" h-auto w-[80%]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
