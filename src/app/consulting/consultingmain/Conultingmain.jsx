"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Conultingmain = () => {

  const router = useRouter();
  return (
    <div>
      <div className=" bg-[#9654c3] text-white pb-5 w-full md:h-screen text-center flex justify-center items-center flex-col">
        <h1 className=" text-2xl md:text-8xl uppercase font-extrabold font-sans py-2 md:pb-5">
          Consulting
        </h1>
        <p className=" w-full md:w-[780px] text-xs md:text-2xl px-3">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
        </p>
        <button onClick={()=> router.back()} type="button" className=" px-8 mt-5 py-2 bg-white text-black hover:bg-red-500 hover:text-white rounded-md">Go Back</button>
      </div>
    </div>
  );
};

export default Conultingmain;
