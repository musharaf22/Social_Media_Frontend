import Navbar from "../../components/Navbar";
import PeopleCard from "../../components/PeopleCard";
import ProfileCard from "../../components/ProfileCard";

const Left = () => {
  return (
    <div className="w-full ml-5 my-2  flex flex-col ">
      <div className="bg-[#B6E0F3] w-[10%] absolute h-[60vh] rounded-full z-[-1] blur-lg top-[20%] left-0 "></div>
      <Navbar />
      <div className="w-full my-2">
        <ProfileCard />
      </div>
      <div className="content my-4 ml-2">
        <p className="font-bold">People You May Know</p>
        <PeopleCard />
      </div>
    </div>
  );
};

export default Left;
