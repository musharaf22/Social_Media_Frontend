import { BsTwitter } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="search flex  items-center w-full justify-center scale-[110%]">
      <BsTwitter size={50} className="text-[#FF812C]" />
      <div className="flex justify-between  border border-gray-400 rounded-xl p-[3px] bg-gray-200  ml-2">
        <input
          type="text"
          className="outline-none  p-1 bg-transparent"
          placeholder="#Explore"
        />
        <button></button>
      </div>
    </div>
  );
};

export default Navbar;
