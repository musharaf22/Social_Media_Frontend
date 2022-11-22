import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../../components/Loading";
import { IProfile } from "../../models/profileInterface";
import { getUserProfile } from "../../services/services";
import Left from "../left/Left";
import Post from "../post/Post";
import Right from "../right/Right";

const Home = () => {
  // const [profileData, setProfileData] = useState<IProfile | unknown>();

  return (
    <Loading isLoading={false}>
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
    </Loading>
  );
};

export default Home;
