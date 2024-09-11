"use client"
import React, { useState, useEffect } from "react";

const OurLocation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const carouselItems = document.querySelectorAll("[data-carousel-item]");
    carouselItems.forEach((item, index) => {
      if (index === currentSlide) {
        item.classList.remove("hidden");
        item.classList.add("block");
      } else {
        item.classList.remove("block");
        item.classList.add("hidden");
      }
    });
  }, [currentSlide]);

  const locations = [
    {
      id: 1,
      name: "Pakistan",
      city: "Karachi",
      address: "House No D-98/2 Clifton Block 4, Karachi, Sindh, Pakistan",
      phone: "+92-301-115-5760",
      email: "contact.pakistan@MoBiTisIngitsolutions.com",
      image: "/images/OurLocation.png",
    },
    {
      id: 2,
      name: "Pakistan",
      city: "Karachi",
      address: "House No D-98/2 Clifton Block 4, Karachi, Sindh, Pakistan",
      phone: "+92-301-115-5760",
      email: "contact.pakistan@MoBiTisIngitsolutions.com",
      image: "/images/Reachemail.png",
    },
    {
      id: 3,
      name: "Pakistan",
      city: "Karachi",
      address: "House No D-98/2 Clifton Block 4, Karachi, Sindh, Pakistan",
      phone: "+92-301-115-5760",
      email: "contact.pakistan@MoBiTisIngitsolutions.com",
      image: "/images/OurLocation.png",
    },
    {
      id: 4,
      name: "Pakistan",
      city: "Karachi",
      address: "House No D-98/2 Clifton Block 4, Karachi, Sindh, Pakistan",
      phone: "+92-301-115-5760",
      email: "contact.pakistan@MoBiTisIngitsolutions.com",
      image: "/images/Reachemail.png",
    },
  ];

  return (
    <div
      id="default-carousel"
      className="relative h-full w-full bg-[#002449] text-white"
      data-carousel="slide"
    >
      <div className="relative h-full overflow-hidden rounded-lg ">
        <h1 className="text-center uppercase text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl py-10 font-extrabold">Our Location</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 pb-14 pt-8">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className={`duration-700 flex justify-center items-start px-4 md:pl-14 flex-col ease-in-out ${
                index === currentSlide ? "block" : "hidden"
              }`}
              data-carousel-item
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">{location.name}</h1>
              <h3 className="font-sans text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl pt-1 font-thin pb-3">{location.city}</h3>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-sans font-thin">
                {location.address} <br />
                {location.phone} <br />
                {location.email}
              </p>
            </div>
          ))}
          <div className="flex justify-center items-center px-4 md:pl-0 w-full md:h-full">
            <img className="h-[198px] w-[300px]  lg:h-[500px] lg:w-[500px] xl:h-[400px] xl:w-[600px] 2xl:h-[600px] 2xl:w-[600px] pr-4" src={locations[currentSlide].image} alt={locations[currentSlide].name} />
          </div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {locations.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-black" : "bg-gray-300"
              }`}
              aria-current={index === currentSlide ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? locations.length - 1 : prev - 1
            )
          }
        ></button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === locations.length - 1 ? 0 : prev + 1
            )
          }
        ></button>
      </div>
    </div>
  );
};

export default OurLocation;
