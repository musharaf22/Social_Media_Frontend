import React from "react";

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-2xl border w-full h-[50vh] shadow-xl">
      <div className="cover relative">
        <img
          src="/images/cover.jpg"
          className="w-full h-[100px] border-top rounded-t-2xl"
          alt=""
        />
        <div className="profilePic ">
          <img
            src="/images/profileImg.jpg"
            className="w-[100px] h-[100px] rounded-full border border-gray-200 absolute top-[50%] left-[30%] object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="content mt-[20%]">
        <p className="font-bold text-lg text-center ">Kareena Kapoor</p>
        <p className="text-lg text-center text-gray-400">Bollywood Actress</p>
        <div className="followers my-4">
          <hr className="border-2 border-b-gray-400" />
          <div className="flex justify-between p-2">
            <p className="text-center border-r border-r-gray-400 w-[50%]  ">
              <p className="text-gray-400 ">1091</p>Friends
            </p>
            <p className="text-center mr-4">
              <p className="text-gray-400">1091</p>Requested
            </p>
          </div>
          <hr className="border-2 border-b-gray-400 " />
        </div>
        <p className="text-center font-bold my-[10%] text-[#FF812C]">
          My Profile
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
