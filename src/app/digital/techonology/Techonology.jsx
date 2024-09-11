import React from "react";

const Techonology = () => {
  return (
   
      <div className=" flex justify-center items-center flex-col h-[100vh]">
        <div className=" flex justify-center items-center flex-col px-3">
          <h1 className=" py-2 md:pb-5 text-lg md:text-5xl md:w-[800px] font-sans font-bold justify-center">
            Technologies We Are Excellent At
          </h1>
          <p className=" font-sans text-lg">
            Our team is adept at leveraging the most updated tools and
            technologies.
          </p>
        </div>
        <div className=" flex justify-center gap-5 md:pt-10">
          <div className=" grid grid-cols-2 md:grid-cols-4 items-center justify-center px-3 gap-5 py-5">
            <img
              className=" md:w-[220px] border mr-5 p-5 rounded-md"
              src="/images/Figmaimg.png"
              alt=""
            />
            <img
              className=" md:w-[200px] border p-5 rounded-md"
              src="/images/Xdimg.png"
              alt=""
            />
            <img
              className=" md:h-[200px] md:w-[200px] border py-11 px-5 rounded-md"
              src="/images/invisionimg.png"
              alt=""
            />
            <img
              className=" md:h-[200px] md:w-[200px] border p-6 rounded-md"
              src="/images/Dimondimg.png"
              alt=""
            />
          </div>
        </div>
      </div>
  
  );
};

export default Techonology;
