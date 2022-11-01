import React from "react";
import { BsTwitter } from "react-icons/bs";
const Left = () => {
  return (
    <div className="w-[25%] m-5  ">
      <div className="bg-blue-200 w-[15%] absolute h-[40vh] z-[-1] blur-lg top-[10%] left-0 "></div>
      <div className="search flex  items-center">
        <BsTwitter size={40} className="text-[#FCBA3E]" />
        <input
          type="text"
          className=" border border-gray-400 rounded-xl p-[3px] bg-gray-100 ml-2"
          placeholder="#Explore"
        />
      </div>
    </div>
  );
};

export default Left;
