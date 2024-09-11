import React from "react";

const Whyemail = () => {
  return (
    <div className="py-6 px-3 md:px-0">
      <div className="h-[100vh] grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8">
        <div className="flex justify-center items-center">
          <img
            className="w-full md:w-3/4"
            src="/images/Mobile inbox-amico 1.png"
            alt=""
          />
        </div>
        <div className="md:pl-8">
          <h3 className="text-blue-900 font-bold font-sans text-lg pb-3">
            Email Marketing
          </h3>
          <h1 className="text-3xl md:w-80 md:text-5xl md:h-44 text-[#494949] font-extrabold">
            Why Email Marketing is Important?
          </h1>
          <p className="text-sm md:text-base md:leading-relaxed text-[#494949] font-sans md:w-[95%]  md:py-0 font-semibold">
            Email marketing is a powerful and easy way to reach your target
            audience. This can help in enhanced customer loyalty and an improved
            relationship. Effective email marketing can result in increased website
            traffic and more sales for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whyemail;
