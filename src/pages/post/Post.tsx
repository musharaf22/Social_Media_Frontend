import { useState } from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
const Post = () => {
  const [like, setlike] = useState<boolean>(false);
  return (
    <div className="w-full rounded-lg bg-white h-auto flex flex-col shadow-xl mb-6 ">
      <div className="image p-4">
        <img
          src="/images/postpic2.jpg"
          alt="N/A"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="icons flex w-[50%] justify-items-start my-5 ">
        {!like && (
          <BsHeart className="ml-6" size={30} onClick={() => setlike(true)} />
        )}
        {like && (
          <BsFillHeartFill
            className="ml-6"
            size={30}
            color="#FF812C"
            onClick={() => setlike(false)}
          />
        )}
        <FaRegCommentDots className="ml-6" size={30} />
        <FiShare2 className="ml-6" size={30} />
      </div>
      <div className="text ml-6 mb-8">
        <p className="text-xl text-gray-400">2000 Likes</p>
        <p className="font-semibold text-xl">
          <span className="text-xl font-bold">Maryam</span> Party Time :)
        </p>
      </div>
    </div>
  );
};

export default Post;
