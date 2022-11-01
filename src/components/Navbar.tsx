import { BsTwitter } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="search flex  items-center">
      <BsTwitter size={50} className="text-[#FF812C]" />
      <div className="flex justify-between  border border-gray-400 rounded-xl p-[3px] bg-gray-100 ml-2">
        <input type="text" className="outline-none" placeholder="#Explore" />
        <button></button>
      </div>
    </div>
  );
};

export default Navbar;
