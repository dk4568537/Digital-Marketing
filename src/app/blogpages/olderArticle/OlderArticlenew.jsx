import React from "react";

export const OlderArticlenew = () => {
  return (
    <div className="my-5 flex justify-center">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 container">
        <div className=" my-5 grid sm:grid-cols-1 md:grid-cols-2">
          <img
            className=" px-3 h-[210px] md:[250px] md:ml-9 h-58  md:pr-[40px] md:pl-[0px]"
            src="/images/Loremone1.png"
            alt=""
          />
          <div className=" md:pl-2 mx-3 md:mx-0">
            <p className=" pt-1 text-sm text-slate-700 py-1">
              Demonstrate the visual form of a document
            </p>
            <h1 className=" font-semibold text-xl py-1">
              Lorem Ipsum dolor sit amet <br /> demonstrate
            </h1>
            <p className=" py-2 text-sm text-slate-700">
              Lorem ipsum may be used as a placeholder <br /> before final copy
              is available.
            </p>
            <div className="flex pt-5">
              <img
                className=" w-10 h-10"
                src="/images/navlogo (2).png"
                alt=""
              />
              <div className="text-[8px] lg:text-[10px] pt-1">
                <h1 className=" font-semibold text-md">by John Doe</h1>
                <p className=" text-md pt-1">On March 12, 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mx-3 gap-5 md:gap-0 md:mx-9 my-5 font-semibold">
          <div className=" items-center flex justify-center flex-col">
            <p className=" text-red-500 border-b-2 py-3">Lorem Ipsum</p>
            <p className=" border-b-2 py-3 hover:text-red-500">Lorem Ipsum</p>
            <p className=" border-b-2 py-3 hover:text-red-500">Lorem Ipsum</p>
            <p className=" border-b-2 py-3 hover:text-red-500">Lorem Ipsum</p>
          </div>
          <div>
            <p className=" border-b-2 py-3 hover:text-red-500">Lorem Ipsum</p>
            <p className=" border-b-2 py-3 hover:text-red-500">Lorem Ipsum</p>
            <p className=" border-b-2 py-3 hover:text-red-500">Lorem Ipsum</p>
            <p className=" border-b-2 py-3 hover:text-red-500">Lorem Ipsum</p>
          </div>
          <div>
            <p className=" border-b-2 py-3 hover:text-red-500">Lorem Ipsum</p>
            <p className=" border-b-2 py-3 hover:text-red-500">Lorem Ipsum</p>
            <p className=" border-b-2 py-3 hover:text-red-500">Lorem Ipsum</p>
            <p className=" border-b-2 py-3 hover:text-red-500">Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};
