"use client";
import React, { useState } from "react";

const InputField = () => {
  const [firstName, setfirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Message, setMessage] = useState("");

  // let localdata = window.localStorage.getItem("form")
  // console.log(JSON.parse(localdata).firstName);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "form",
      JSON.stringify({ firstName, LastName, Email, PhoneNo, Message })
    );
    setfirstName("");
    setLastName("");  
    setEmail("");
    setPhoneNo("");
    setMessage("");
  };

  return (
    <div className=" pt-20 md:pt-0 px-3">
      <div className=" flex justify-center">
        <div className=" grid grid-cols-1 md:grid-cols-2 container gap-5 py-8">
          <input
            className=" border bg-[#eeeeee] p-5 rounded-sm"
            type="text"
            id="1"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setfirstName(e.target.value)}
          />
          <input
            className=" border bg-[#eeeeee] p-5 rounded-sm"
            type="text"
            id="2"
            value={LastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className=" border bg-[#eeeeee] p-5 rounded-sm"
            type="text"
            id="3"
            value={Email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className=" border bg-[#eeeeee] p-5 rounded-sm"
            type="text"
            id="4"
            value={PhoneNo}
            placeholder="Phone No"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
      </div>
      <div className="pb-5 md:mx-6 grid grid-cols-1">
        <textarea
          className=" p-5 border bg-[#eeeeee] rounded-sm"
          id="Message"
          cols="30"
          rows="10"
          value={Message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          disabled={
            firstName === "" ||
            LastName === "" ||
            Email === "" ||
            PhoneNo === "" ||
            Message === ""
              ? true
              : false
          }
          onClick={handleSubmit}
          className=" focus:ring-4 focus:ring-blue-500 w-40 border mt-5 rounded-md text-white bg-red-500 hover:bg-green-500 px-5 py-3"
          type="button"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default InputField;
