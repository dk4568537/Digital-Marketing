"use client";
import { useState } from "react";
import { Img } from "@chakra-ui/react";

const data = [
  { name: "Education" },
  { name: "Games and Entertainment" },
  { name: "Travel Tourism" },
  { name: "Logistics" },
  { name: "Manufacturing" },
  { name: "Healthcare" },
  { name: "Banking & Finance" },
];
const Empowering = () => {
  const [showIndestry, setshowIndestry] = useState("Healthcare");
  console.log(showIndestry);
  return (
    <div className="flex justify-center items-center h-full w-full mb-20">
      <div className="container md:h-[100vh] lg:h-screen xl:h-screen  ">
       
        <h1 className="text-xl md:text-5xl font-bold font-sans text-center py-10">
          How We are empowering <br /> Different Industries?
        </h1>
      
        <div class=" flex flex-shrink-0 overflow-x-auto justify-center pb-2 items-center gap-4 text-center px-3">
          {data.map((item, index) => (
            <p
              onClick={() => setshowIndestry(item.name)}
              class={`text-white bg-indigo-800 px-5 rounded-lg py-2 shadow-md ${
                item.name === showIndestry && " hover:bg-[#ff5c16] "
              } `}
            >
              {item.name}
            </p>
          ))}
        </div>
        
        {showIndestry === "Education" && (
          <div className="grid grid-cols-1 md:grid-cols-2 md:pl-16">
            <div className="items-start justify-center flex flex-col px-3 py-10">
              <h1 className="font-bold font-sans text-2xl md:text-5xl py-3 md:py-5">
                Education
              </h1>
              <p>
                Our state-of-the-art services have played a pivotal role in
                empowering the education industry. By providing educators with
                new tools and capabilities, we are empowering education sectors
                to promote teaching and learning on a global scale. Our
                customized and well-designed tools like e-learning can make
                learning more accessible and convenient. From providing
                cloud-based learning management systems to students to improving
                communication with teachers, we are creating innovative and
                reliable solutions for the education industry.
              </p>
            </div>
            <div className="flex justify-center items-center p-10 w-full">
              <Img
                src="/images/empoweringimg.png"
                alt=""
                className="border-dotted rounded-2xl border-l border-b"
              />
            </div>
          </div>
        )}
        {showIndestry === "Games and Entertainment" && (
          <div className="grid grid-cols-1 md:grid-cols-2 md:pl-8">
            <div className="items-start justify-center flex flex-col px-3 py-10">
              <h1 className="font-bold font-sans text-2xl md:text-5xl py-3 md:py-5">
                Games and Entertainment
              </h1>
              <p>
                Our state-of-the-art services have played a pivotal role in
                empowering the education industry. By providing educators with
                new tools and capabilities, we are empowering education sectors
                to promote teaching and learning on a global scale. Our
                customized and well-designed tools like e-learning can make
                learning more accessible and convenient. From providing
                cloud-based learning management systems to students to improving
                communication with teachers, we are creating innovative and
                reliable solutions for the education industry.
              </p>
            </div>
            <div className="flex justify-center items-center p-10 w-full">
              <Img
                src="/images/Gameimg.png"
                alt=""
                className="border-dotted rounded-2xl border-l border-b"
              />
            </div>
          </div>
        )}
        {showIndestry === "Travel Tourism" && (
          <div className="grid grid-cols-1 md:grid-cols-2 md:pl-8">
            <div className="items-start justify-center flex flex-col px-3 py-10">
              <h1 className="font-bold font-sans text-2xl md:text-5xl py-3 md:py-5">
                Travel Tourism
              </h1>
              <p>
                Our state-of-the-art services have played a pivotal role in
                empowering the education industry. By providing educators with
                new tools and capabilities, we are empowering education sectors
                to promote teaching and learning on a global scale. Our
                customized and well-designed tools like e-learning can make
                learning more accessible and convenient. From providing
                cloud-based learning management systems to students to improving
                communication with teachers, we are creating innovative and
                reliable solutions for the education industry.
              </p>
            </div>
            <div className="flex justify-center items-center p-10 w-full">
              <Img
                src="/images/Travelimg.png"
                alt=""
                className="border-dotted rounded-2xl border-l border-b"
              />
            </div>
          </div>
        )}
        {showIndestry === "Logistics" && (
          <div className="grid grid-cols-1 md:grid-cols-2 md:pl-8">
            <div className="items-start justify-center flex flex-col px-3 py-10">
              <h1 className="font-bold font-sans text-2xl md:text-5xl py-3 md:py-5">
                Logistics
              </h1>
              <p>
                Our state-of-the-art services have played a pivotal role in
                empowering the education industry. By providing educators with
                new tools and capabilities, we are empowering education sectors
                to promote teaching and learning on a global scale. Our
                customized and well-designed tools like e-learning can make
                learning more accessible and convenient. From providing
                cloud-based learning management systems to students to improving
                communication with teachers, we are creating innovative and
                reliable solutions for the education industry.
              </p>
            </div>
            <div className="flex justify-center items-center p-10 w-full">
              <Img
                src="/images/Logisimg.png"
                alt=""
                className="border-dotted rounded-2xl border-l border-b"
              />
            </div>
          </div>
        )}
        {showIndestry === "Manufacturing" && (
          <div className="grid grid-cols-1 md:grid-cols-2 md:pl-8">
            <div className="items-start justify-center flex flex-col px-3 py-10">
              <h1 className="font-bold font-sans text-2xl md:text-5xl py-3 md:py-5">
                Manufacturing
              </h1>
              <p>
                Our state-of-the-art services have played a pivotal role in
                empowering the education industry. By providing educators with
                new tools and capabilities, we are empowering education sectors
                to promote teaching and learning on a global scale. Our
                customized and well-designed tools like e-learning can make
                learning more accessible and convenient. From providing
                cloud-based learning management systems to students to improving
                communication with teachers, we are creating innovative and
                reliable solutions for the education industry.
              </p>
            </div>
            <div className="flex justify-center items-center p-10 w-full">
              <Img
                src="/images/Manufacturingimg.png"
                alt=""
                className="border-dotted rounded-2xl border-l border-b"
              />
            </div>
          </div>
        )}
        {showIndestry === "Healthcare" && (
          <div className="grid grid-cols-1 md:grid-cols-2 md:pl-8">
            <div className="items-start justify-center flex flex-col px-3 py-10">
              <h1 className="font-bold font-sans text-2xl md:text-5xl py-3 md:py-5">
                Healthcare
              </h1>
              <p>
                Our state-of-the-art services have played a pivotal role in
                empowering the education industry. By providing educators with
                new tools and capabilities, we are empowering education sectors
                to promote teaching and learning on a global scale. Our
                customized and well-designed tools like e-learning can make
                learning more accessible and convenient. From providing
                cloud-based learning management systems to students to improving
                communication with teachers, we are creating innovative and
                reliable solutions for the education industry.
              </p>
            </div>
            <div className="flex justify-center items-center p-10 w-full">
              <Img
                src="/images/Healthcareimg.png"
                alt=""
                className="border-dotted rounded-2xl border-l border-b"
              />
            </div>
          </div>
        )}
        {showIndestry === "Banking & Finance" && (
          <div className="grid grid-cols-1 md:grid-cols-2 md:pl-0 lg:p-3">
            <div className="items-start justify-center flex flex-col px-3 py-10">
              <h1 className="font-bold font-sans text-2xl md:text-5xl lg py-3 md:py-5">
                Banking & Finance
              </h1>
              <p className=" font-sans md:pb-5">
                Our state-of-the-art services have played a pivotal role in
                empowering the education industry. By providing educators with
                new tools and capabilities, we are empowering education sectors
                to promote teaching and learning on a global scale. Our
                customized and well-designed tools like e-learning can make
                learning more accessible and convenient. From providing
                cloud-based learning management systems to students to improving
                communication with teachers, we are creating innovative and
                reliable solutions for the education industry.
              </p>
            </div>
            <div className="flex justify-center items-center p-10 w-full">
              <div className="p-4">
                <Img
                  src="/images/Bankingimg.png"
                  alt=""
                  className="border-dotted h-full w-full rounded-2xl border-l border-b"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Empowering;
