import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="h-3/4 bg-violet-200 w-3/5 p-10 rounded-md mx-auto">
        <div className="mx-auto w-fit">
          <div className="text-center mb-10 text-3xl text-black font-bold font-lexand">
            Contact Us
          </div>
          <div className="ml-auto mb-10 flex">
            <h1 className="mr-5 text-xl font-lexand text-black mt-1">
              Email :
            </h1>
            <input
              placeholder="Enter Email"
              className="text-black p-2 bg-violet-100 h-10 w-3/4 rounded-md ml-1"
              type="email"
            ></input>
          </div>
          <div className="ml-auto mb-10 flex">
            <h1 className="mr-5 text-xl font-lexand text-black mt-1">
              Name :
            </h1>
            <input
              placeholder="Enter Name"
              className="text-black p-2 bg-violet-100 h-10 w-3/4 rounded-md"
              type="name"
            ></input>
          </div>
          <div>
            <h1 className="mr-5 text-xl font-lexand text-black mt-1">
              Description :
            </h1>
            <textarea className="text-black p-2 bg-violet-100 w-[36rem] rounded-md h-40"></textarea>
          </div>
          <div className="mt-2">
            <button className="px-10 py-3 bg-[#fc7b54] text-gray-800 border border-black rounded-md hover:bg-black hover:text-[#fc7b54]">
              <span className="font-bold text-lg ">SEND</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
