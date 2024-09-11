"use client"
import Navbar from '@/app/component/navbar/Navbar'
import { useRouter } from 'next/navigation'
import React from 'react'

const ContentMain = () => {
    const router = useRouter()
  return (
    <div className="relative w-full  h-full md:h-full lg:h-full xl:h-full">
        <Navbar/>
    <img
      class=" inset-0 w-full h-full object-cover"
      src="/images/contentUsImg.png"
      alt=""
    />
    <div class="absolute md:top-1/2 lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center text-white">
      <div className=" md:py-0 flex flex-col items-center md:gap-5">
        <h1 className=" text-2xl sm:text-3xl md:text-8xl font-extrabold uppercase font-sans ">
          Contact us
        </h1>
        <p class="px-3 w-[301px] sm:w-full md:w-[700px] md:h-full lg:h-full lg:w-[760px] xl:w-[790px] text-xs md:text-lg lg:text-xl font-sans">
          Lorem Ipsum has been the industry's standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
        <button
        onClick={() => router.back()}
          className=" px-7 mt-3 py-1 focus:ring-4 focus:ring-green-700 bg-green-500 md:bg-white text-black hover:bg-green-500 rounded-md hover:text-white"
          type="button"
        >
          Go Back
        </button>
      </div>
    </div>
  </div>
  )
}

export default ContentMain