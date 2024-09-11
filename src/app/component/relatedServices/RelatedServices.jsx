"use client"
import React, { useState } from "react";

const RelatedServices = () => {
  const [activeColor, setActiveColor ] = useState(0)
  const relatedServices = [
    {
      id: 1,
      name: "Google PPC",
      image: "/images/googlePcc.png",
      features: [
        "Improved Customer Retention",
        "Enhanced Sales",
        "Higher Profitability",
        "Brand Loyalty",
      ],
    },
    {
      id: 2,
      name: "Social Media Marketing",
      image: "/images/Socialmedia.png",
      features: [
        "Customer Satisfaction",
        " More Leads",
        "Improved Quality",
        "Minimal Errors",
      ],
    },
    {
      id: 3,
      name: "SEO",
      image: "/images/seo.png",
      features: [
        "Superior Customer Satisfaction",
        "Reduced Churn",
        " SEO Optimisation",
        "More Audience",
      ],
    },
    {
      id: 4,
      name: "Mobile Marketing",
      image: "/images/mobileMarkiting.png",
      features: [
        "Improved Customer Retention",
        "  Enhanced Sales",
        "Higher Profitability",
        "Brand Loyalty",
      ],
    },
    {
      id: 5,
      name: "Content Marketing",
      image: "/images/ConnectMarkiting.png",
      features: [
        "Customer Satisfaction",
        "More Leads",
        "Improved Quality",
        "Minimal Errors",
      ],
    },
    {
        id: 6,
        name: "Marketing Analytics",
        image: "images/MarketingAnatylic.png",
        features: [
          "Superior Customer Satisfaction",
          "Reduced Churn",
          "SEO Optimisation",
          "More Audience",
        ],
      },
      {
        id: 7,
        name: "Affiliate Marketing",
        image: "/images/AffiliteMarkiting.png",
        features: [
          "Improved Customer Retention",
          "Enhanced Sales",
          "Higher Profitability",
          "Brand Loyalty",
        ],
      },
  ];

  return (
    <div className="bg-[#f5f5f5] flex justify-center pb-10">
      <div className=" md:pl-14  ">
        <div className="flex px-3 ">
          <h1 className=" py-5 md:py-10 text-lg md:text-5xl font-extrabold">Related Services</h1>
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 px-3 gap-5">
            {relatedServices.map((service,index) => (
              <div
              onClick={() => setActiveColor(index)}
                key={service.id}
                className={`grid grid-rows-3 grid-flow-col border px-5 gap-5 ${
                  index == activeColor ? "bg-slate-400" : " "
                }`}
              >
                <div className="flex row-span-2 justify-center items-start pt-7">
                  <img
                    className=" h-16 md:w-[50px]"
                    src={service.image}
                    alt={service.name}
                  />
                </div>
                <div className="row-span-3 col-span-3 flex justify-center items-start flex-col">
                  <h1 className="md:text-2xl font-bold pt-7 font-sans">{service.name}</h1>
                  <ul className=" md:pt-3 pb-3 font-sans">
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        {index+1} {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedServices;
