import React from "react";
import Left from "../left/Left";
import Post from "../post/Post";
import Right from "../right/Right";

const Home = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[20%]">
        <Left />
      </div>
      <div className="mt-[4.4%] w-[50%] ml-[2.5%] ">
        <Post />
      </div>
      <div className="mr-8 m-5  w-[25%] ">
        <Right />
      </div>
    </div>
  );
};

export default Home;
