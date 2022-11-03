import React, { useEffect, useState } from "react";
import apiService from "../../services/rest";
import Left from "../left/Left";
import Post from "../post/Post";
import Right from "../right/Right";

const Home = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const meta = await apiService("/user", "get");
    console.log("meta = ", meta);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex justify-between">
      <div className="w-[20%]">
        <Left />
      </div>
      <div
        id="postScroll"
        className="mt-[4.4%] w-[50%] ml-[2.5%] max-h-[90vh] overflow-auto "
      >
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="mr-8 m-5  w-[25%] ">
        <Right />
      </div>
    </div>
  );
};

export default Home;
