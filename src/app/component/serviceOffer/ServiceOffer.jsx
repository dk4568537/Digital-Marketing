"use client"
import React, { useState } from "react";

const ServiceOffer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const cart = [
    {
      id: 1,
      title: "Experienced Professionals",
      heading:
        "Our team has decades of experience crafting effective email campaigns that will help you drive traffic and conversions.",
    },
    {
      id: 2,
      title: "Technical Approach",
      heading:
        "Our technical approach is proven and effective and can increase ROI on your email marketing investment.",
    },
    {
      id: 3,
      title: "Proven Record",
      heading:
        "We have a proven record for your peace of mind that you are investing in impactful and beneficial services.",
    },
    {
      id: 4,
      title: "Quality Services",
      heading:
        "We take our responsibility as professionals seriously and strive to uphold the highest standards in all that we do.",
    },
  ];

  const handleClick = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div className="bg-[#f5f5f5] p-3 md:px-0 md:py-12">
      <div className="flex justify-center items-center">
        <h1 className="uppercase text-xl md:text-6xl pb-3 font-extrabold md:h-32 font-sans">
          Service we offer
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5 md:px-12">
          {cart.map((item, index) => (
            <div
              key={item.id}
              className={`border-t-2 border-black font-light hover:bg-green-300 py-10 px-4 ${
                index === hoveredIndex ? "bg-black text-white" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <h1 className="pb-5 3xl md:text-xl md:max-w-24 font-bold">
                {item.title}
              </h1>
              <p className="pb-5 mb-5">{item.heading}</p>
              <button className={`hover:ring-2 ring-white rounded-full p-3 mt-8 ${
                index === hoveredIndex ? "bg-[#ffb400]" : ""
              }`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceOffer;
