import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login flex justify-center items-center ">
      <div className="bg-white w-[30%] h-[50vh] p-8 flex flex-col relative justify-between rounded-xl shadow-2xl ">
        <label htmlFor="">Email:</label>
        <input
          type="email"
          className="p-3 outline-none border border-gray-400 rounded-lg focus:border-blue-400"
        />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          className="p-3 outline-none border border-gray-400 rounded-lg focus:border-blue-400"
        />
        <button
          className="text-center p-4 bg-[#FFB12C] text-white my-4 rounded-xl text-xl "
          onClick={() => navigate("/home")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
