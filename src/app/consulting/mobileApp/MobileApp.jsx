import React from "react";

const MobileApp = () => {
  const contentData = [
    {
      logo: "/images/mobilelogo.png",
      title: "Mobile App Consulting",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      mainImg: "/images/mobileimg.png",
    },
    {
      logo: "/images/webapplogo.png",
      title: "Web App Consulting",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      mainImg: "/images/webappimg.png",
    },
    {
      logo: "/images/Devoplogo.png",
      title: "Devop Consulting",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      mainImg: "/images/DevopImg.png",
    },
    // Add more objects as needed
  ];

  return (
    <div>
      {contentData.map((content, index) => (
        <div key={index} className="flex justify-center items-center py-10 bg-[#ff7019]">
          <div className="text-white container grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center items-start flex-col px-3">
              <img src={content.logo} alt="" />
              <h1 className=" text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-sans uppercase">
                {content.title}
              </h1>
              <p className=" w-full text-xs md:text-lg lg:text-lg  py-5">{content.description}</p>
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

export default MobileApp;
