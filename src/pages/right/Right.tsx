import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiHomeCircle, BiLogOut } from "react-icons/bi";
// import { SiPostcss } from "react-icons/si";
const Right = () => {
  return (
    <div className="relative">
      <div className="bg-[#B6E0F3] w-[300px] h-[200px] blur-3xl absolute right-0 z-[-1] top-0 rounded-full"></div>
      <div className="icons flex justify-evenly items-center">
        <BiHomeCircle size={30} className="text-[#FF812C]" />
        <IoMdNotificationsOutline size={35} className="hover:text-[#FF812C]" />
        <AiOutlineSetting size={30} className="hover:text-[#FF812C]" />
        <BiLogOut size={30} className="hover:text-[#FF812C]" />
      </div>
      <div className="rightContent bg-white w-[90%] ml-4 h-[70vh] my-4 rounded-3xl p-6 shadow-xl">
        <p className="font-bold text-xl my-3 ml-3">Trends For You</p>
        {[1, 2, 3, 4, 5, 6].map((x) => {
          return (
            <div className="m-4">
              <p className="text-lg font-bold">Minions</p>
              <p className="text-md text-gray-400">#12.1K Shares</p>
            </div>
          );
        })}
      </div>
      <button className="p-4 text-white bg-[#FFB12C] ml-4 w-[90%] rounded-xl">
        Find Friends
      </button>
    </div>
  );
};

export default Right;
