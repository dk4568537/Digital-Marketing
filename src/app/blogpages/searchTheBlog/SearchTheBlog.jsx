"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchTheBlog = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || Email.trim() === "") {
      setError("Both name and email must be filled.");
      return;
    }

    const regex = /[\\\/:*?"<>|]+/;
    if (regex.test(Email)) {
      setError(
        'Email cannot contain any of the following characters: /:*?"<>|'
      );
      return;
    }
    localStorage.setItem("form", JSON.stringify({ name, Email }));
    setName("");
    setEmail("");
    setError("");
  };

  return (
    <div className="my-5 flex justify-center">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 container">
        <div className=" my-5 grid sm:grid-cols-1 md:grid-cols-2">
          <img
            className=" px-3 h-[210px] md:[250px] md:ml-9 h-58 md:pr-[40px] md:pl-[0px]"
            src="/images/Rectangle 33 (1).png"
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
        <div className="relative flex justify-center items-center md:w-[100%] h-5 px-3 my-20">
          <input
            className=" border rounded-sm w-full md:mx-6 p-3"
            type="text"
            placeholder="Search the blog..."
          />
          <p className="absolute right-8 top-1 h-8 pr-4">
            <IoIosSearch />
          </p>
        </div>
        <div className=" my-5 grid sm:grid-cols-1 md:grid-cols-2">
          <img
            className=" px-3 h-[210px] md:[250px] md:ml-9 h-58 md:pr-[40px] md:pl-[0px]"
            src="/images/Rectangle 33 (2).png"
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
        <div className=" md:px-10 bg-[#001933] py-3 mx-3 md:mx-10">
          <form className=" grid grid-cols-1 items-start gap-5 p-5">
            <label className="text-white font-semibold font-sans" htmlFor="">
              Email Singup
            </label>
            <input
              className=" pl-4 py-3"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className=" pl-4 py-3"
              type="text"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              onClick={handleSubmit}
              className=" font-sans text-white w-28 px-6 py-2 hover:bg-red-700 hover:ring-2 outline-2 ring-white bg-red-500 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchTheBlog;
