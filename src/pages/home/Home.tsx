import React from "react";
import Left from "./left/Left";
import Right from "./right/Right";

const Home = () => {
  return (
    <div className="flex justify-between">
      <Left />
      <div></div>
      <div className="mr-8 m-5  w-[25%]">
        <Right />
      </div>
    </div>
  );
};

export default Home;
