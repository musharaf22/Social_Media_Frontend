import React from "react";

const PeopleCard = () => {
  return (
    <div className="bg-white w-full  rounded-xl p-3 h-[230px] overflow-auto">
      {[1, 2, 3, 4, 5].map(() => {
        return (
          <div className="people flex items-center justify-between my-3">
            <img
              src="/images/img1.png"
              alt="N/A"
              className="w-[50px] h-[50px] rounded-full border border-gray-200 object-cover ml-2"
            />
            <div className="">
              <p className="font-bold">Sharukh Khan</p>
              <p className="text-gray-400">@SharukhKhan</p>
            </div>
            <button className="p-[7px] text-center text-sm bg-[#FF812C] text-white rounded-md">
              Add Friend
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PeopleCard;
