import React from "react";

const DesignConsulting = () => {
  const contentData = [
    {
      logo: "/images/Designlogo1.png",
      title: "Design Consulting",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      mainImg: "/images/designImg1.png",
    },
    {
      logo: "/images/testinglogo.png",
      title: "Testing Consulting",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      mainImg: "/images/testingImg.png",
    },
    {
      logo: "/images/cloudlogo.png",
      title: "Cloud Consulting",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      mainImg: "/images/cloudImg.png",
    },
    // Add more objects as needed
  ];

  return (
    <div>
      {contentData.map((content, index) => (
        <div key={index} className="flex justify-center py-10 bg-[#23282e]">
          <div className="text-white container grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center items-start flex-col px-3">
              <img src={content.logo} alt="" />
              <h1 className=" text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-sans uppercase">
                {content.title}
              </h1>
              <p className=" max-w-full text-xs md:text-xl lg:text-lg  py-5">{content.description}</p>
              <button
                type="button"
                className="px-8 py-2 bg-white text-black rounded-md hover:bg-red-500 hover:text-white"
              >
                Learn More
              </button>
            </div>
            <div className=" px-3 flex justify-center items-center">
              <img className=" w-[400px]" src={content.mainImg} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesignConsulting;
