import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { SiPostcss } from "react-icons/si";
const Right = () => {
  return (
    <div className="relative">
      <div className="bg-[#B6E0F3] w-[300px] h-[200px] blur-3xl absolute right-0 z-[-1] top-0 rounded-full"></div>
      <div className="icons flex justify-evenly items-center">
        <SiPostcss size={30} className="hover:text-[#FF812C]" />
        <IoMdNotificationsOutline size={35} className="hover:text-[#FF812C]" />
        <AiOutlineSetting size={30} className="hover:text-[#FF812C]" />
        <BiLogOut size={30} className="hover:text-[#FF812C]" />
      </div>
    </div>
  );
};

export default Right;
