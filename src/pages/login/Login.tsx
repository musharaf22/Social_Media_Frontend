import { useMutation } from "@tanstack/react-query";
import { toast } from "material-react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { loginService } from "../../services/services";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedin } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { write } from "fs";
const Login = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [formData, setfromData] = useState({
    email: "",
    password: "",
  });

  const loginMuation = useMutation(loginService, {
    onSuccess(data) {
      toast.warning("Logged in successfully!");
      localStorage.setItem("token", JSON.stringify(data.data.token));
      navigate("/home");
    },
    onError(err: any) {
      toast.error(err.response.data.message);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setfromData((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    loginMuation.mutate(formData);
  };

  return (
    <div className="h-[100vh] flex justify-between w-[80%] m-auto  items-center ">
      {loginMuation.isLoading ? (
        <Loading />
      ) : (
        <div className=" w-[40%] h-[60vh] p-8    ">
          <h1 id="genText" className="text-2xl text-center font-bold mb-4">
            {text}
          </h1>
          <form
            onSubmit={handleLogin}
            className="flex flex-col relative justify-between h-full"
          >
            <div className="flex flex-col">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="p-3 outline-none border my-2 border-gray-400 rounded-lg focus:border-blue-400"
              />

              <label htmlFor="">Password:</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="p-3 outline-none border my-2 border-gray-400 rounded-lg focus:border-blue-400"
              />
            </div>
            <div className="logo flex justify-evenly items-center">
              <FcGoogle
                size={40}
                className="hover:scale-[120%] cursor-pointer"
              />
              <GrLinkedin
                size={40}
                color="#0077b5"
                className="hover:scale-[120%] cursor-pointer"
              />
              <BsFacebook
                size={40}
                color="#0077b5"
                className="hover:scale-[120%] cursor-pointer"
              />
            </div>
            <button
              className="text-center p-4 bg-[#FFB12C] text-white my-4 rounded-xl text-xl "
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
