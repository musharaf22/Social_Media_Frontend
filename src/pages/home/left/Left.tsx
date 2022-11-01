import Navbar from "../../../components/Navbar";
import ProfileCard from "../../../components/ProfileCard";

const Left = () => {
  return (
    <div className="w-fit ml-5 my-2  flex flex-col ">
      <div className="bg-[#B6E0F3] w-[10%] absolute h-[60vh] rounded-full z-[-1] blur-lg top-[20%] left-0 "></div>
      <Navbar />
      <div className="w-full my-2">
        <ProfileCard />
      </div>
    </div>
  );
};

export default Left;
