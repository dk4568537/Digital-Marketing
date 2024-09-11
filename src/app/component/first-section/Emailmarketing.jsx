import React from "react";

const Emailmarketing = ({emailimg}) => {
  return (
    <div className=" w-full h-[90vh] flex justify-between items-center bg-[#5b7bb8]">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="text-white pl-3 lg:m-10 md:pl-3 flex justify-center items-start flex-col">
          <h1 className="text-3xl md:text-7xl h-auto font-bold pb-2 md:pb-4 uppercase">
            Email Marketing
          </h1>
          <h3 className="font-sans ">Start Your Digital Business on the Right Foot!</h3>
          <button className="text-black font-sans bg-white px-7 py-2 font-semibold rounded-md mt-2 md:mt-5">
            Get In Touch
          </button>
        </div>
        <div className="p-5 flex justify-center items-center">
          <img src={emailimg} className=" h-auto w-[80%]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Emailmarketing;
