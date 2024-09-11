import React from "react";

const BlogCarts = () => {
  // Array of blog data objects
  const blogData = [
    {
      image: "/images/Rectangle 33 (3).png",
      title: "Lorem Ipsum dolor sit amet demonstrate",
      description:
        "Lorem ipsum may be used as a placeholder before final copy is available.",
      author: "John Doe",
      date: "March 12, 2023",
    },
    {
      image: "/images/Rectangle 33 (4).png",
      title: "Lorem Ipsum dolor sit amet demonstrate",
      description:
        "Lorem ipsum may be used as a placeholder before final copy is available.",
      author: "John Doe",
      date: "March 12, 2023",
    },
    {
      image: "/images/Rectangle 33 (5).png",
      title: "Lorem Ipsum dolor sit amet demonstrate",
      description:
        "Lorem ipsum may be used as a placeholder before final copy is available.",
      author: "John Doe",
      date: "March 12, 2023",
    },
    {
      image: "/images/Rectangle 33 (6).png",
      title: "Lorem Ipsum dolor sit amet demonstrate",
      description:
        "Lorem ipsum may be used as a placeholder before final copy is available.",
      author: "John Doe",
      date: "March 12, 2023",
    },
  ];

  return (
    <div className="flex justify-center mb-5">
      <div className="grid grid-cols-1 container">
        {blogData.map((blog, index) => (
          <div key={index} className="grid sm:grid-cols-1 md:grid-cols-4 pb-8">
            <img
              className="px-3 w-full h-full md:ml-9 md:pr-[40px] md:pl-[0px]"
              src={blog.image}
              alt=""
            />
            <div className="md:pl-2 mx-3 md:mx-0">
              <p className="pt-1 text-sm text-slate-700 py-1">
                Demonstrate the visual form of a document
              </p>
              <h1 className="font-semibold text-xl py-1">{blog.title}</h1>
              <p className="py-2 text-sm text-slate-700">{blog.description}</p>
              <div className="flex pt-5">
                <img
                  className="w-10 h-10"
                  src="/images/navlogo (2).png"
                  alt=""
                />
                <div className="text-[8px] lg:text-[10px] pt-1">
                  <h1 className="font-semibold text-md">by {blog.author}</h1>
                  <p className="text-md pt-1">On {blog.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button className=" text-white bg-red-500 w-28 py-2 hover:bg-red-700 rounded-sm ring-orange-400 hover:ring-2 md:ml-9">
          Older
        </button>
      </div>
    </div>
  );
};

export default BlogCarts;
