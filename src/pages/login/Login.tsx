import { toast } from "material-react-toastify";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../../services/rest";
import { loginService } from "../../services/services";

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
  const handleLogin = async (e: any) => {
    e.preventDefault();
    const data = await loginService(formData);
    if (!!data && data?.error) {
      toast.error(data.message);
    } else {
      toast.warning("Logged in successfully!");
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/home");
    }
  };
  return (
    <div className="login flex justify-center items-center ">
      <div className="bg-white w-[30%] h-[50vh] p-8  rounded-xl shadow-2xl ">
        <form
          action=""
          onSubmit={handleLogin}
          className="flex flex-col relative justify-between h-full"
        >
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
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
