import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../../services/rest";

const Login = () => {
  const [formData, setfromData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setfromData((prev: any) => {
      return { ...prev, [name]: value };
    });
  };
  const navigate = useNavigate();
  const handleLogin = async () => {
    const data = await apiService("/auth", "post", formData);
    if (data.error) {
      return 0;
    } else {
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/home");
    }
    // navigate("/home");
  };
  return (
    <div className="login flex justify-center items-center ">
      <div className="bg-white w-[30%] h-[50vh] p-8 flex flex-col relative justify-between rounded-xl shadow-2xl ">
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="p-3 outline-none border border-gray-400 rounded-lg focus:border-blue-400"
        />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="p-3 outline-none border border-gray-400 rounded-lg focus:border-blue-400"
        />
        <button
          className="text-center p-4 bg-[#FFB12C] text-white my-4 rounded-xl text-xl "
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
