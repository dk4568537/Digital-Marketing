import React from "react";

const VariationsOff = () => {
    const getYear = new Date().getFullYear();
    const variationsData = [
        {
            id: 1,
            imgSrc: "/images/thereone1.png",
            blogDate: `March 24, ${getYear}`,
            title: "There are many variations of passages of Lorem.",
            author: "Mobitising",
            authorImageSrc: "/images/navlogo (2).png",
            postDate: `March 24, ${getYear}`,
        },
        {
            id: 2,
            imgSrc: "/images/theretwo2.png",
            blogDate: `March 24, ${getYear}`,
            title: "There are many variations of passages of Lorem.",
            author: "Mobitising",
            authorImageSrc: "/images/navlogo (2).png",
            postDate: `March 24, ${getYear}`,
        },
        {
            id: 3,
            imgSrc: "/images/therethree3.png",
            blogDate: `March 24, ${getYear}`,
            title: "There are many variations of passages of Lorem.",
            author: "Mobitising",
            authorImageSrc: "/images/navlogo (2).png",
            postDate: `March 24, ${getYear}`,
        },
        {
            id: 4,
            imgSrc: "/images/therefour4.png",
            blogDate: `March 24, ${getYear}`,
            title: "There are many variations of passages of Lorem.",
            author: "Mobitising",
            authorImageSrc: "/images/navlogo (2).png",
            postDate: `March 24, ${getYear}`,
        }
    ];

    return (
        <div className="flex justify-center items-center md:mx-16 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container pt-8 px-3 md:py-0">
                {variationsData.map(variation => (
                    <div key={variation.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img
                            className="w-full h-[150px]"
                            src={variation.imgSrc}
                            alt=""
                        />
                        <div className="px-3 ">
                            <h3 className="pt-5">{`Our Blog . ${variation.blogDate}`}</h3>
                            <div className="font-bold text-xl mb-3">
                                {variation.title}
                            </div>
                        </div>
                        <div className="px-3 pb-2 flex">
                            <img className="w-10 pt-2" src={variation.authorImageSrc} alt="" />
                            <div className="ml-2">
                                <h1 className="pt-2 uppercase">{`By ${variation.author}`}</h1>
                                <p className="text-gray-700 text-base">{`On ${variation.postDate}`}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VariationsOff;
