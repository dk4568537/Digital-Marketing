import React from "react";

const Popular = () => {
  const variationsData = [
    {
      id: 1,
      blogDate: "March 14, 2023",
      title: "Features exclusive to impress your visitor new relationship.",
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      author: "Mobitising",
    },
    {
      id: 2,
      blogDate: "March 14, 2023",
      title: "There are many variations of passages of Lorem.",
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      author: "Mobitising",
    },
    {
      id: 3,
      blogDate: "March 14, 2023",
      title: "There are many variations of passages of Lorem.",
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      author: "Mobitising",
    },
  ];

  return (
    <div className="flex justify-center items-center md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 px-3 md:py-0">
        {variationsData.map((variation) => (
          <div key={variation.id} className="max-w-sm rounded overflow-hidden shadow-md">
            <div className="px-3 py-4">
              <h3 className="pt-2">Our Blog . {variation.blogDate}</h3>
              <div className="font-bold text-xl mb-2">{variation.title}</div>
              <p className="text-gray-700 text-base">{variation.content}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex">
              <img className="w-10" src="/images/navlogo (2).png" alt="" />
              <h1 className="ml-2 pt-2 uppercase">By {variation.author}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
