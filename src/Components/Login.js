import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Frame from "../assets/frame.png";
import loginimg from "../assets/login.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = ({ login, setlogin }) => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function handleform(e) {
    const { name, value } = e.target;
    setform((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function handlesubmit(e) {
    e.preventDefault();
    setlogin(true);
    toast.success("login successful");
    console.log(form);
    navigate("/");
  }
  const [showpassword, setshowpassword] = useState(false);
  return (
    <div>
      <div className="flex justify-center gap-20 items-center flex-wrap sm: px-5  ">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white py-5">
            Welcome Back
          </h1>

          <p className=" text-gray-500 font-semibold text-2xl   ">
            Build Skills from Today, Tomarrow and Beyond
          </p>
          <p className=" text-blue-800  font-semibold text-2xl  ">
            <i>Education to future proof your carrer </i>
          </p>
          <form className=" my-5" onSubmit={handlesubmit}>
            <label className="text-gray-500 font-bold">
              Email Address<span className="text-red-600">*</span>
            </label>
            <br></br>
            <input
              type="email"
              onChange={handleform}
              value={form.email}
              id="email"
              name="email"
              className=" px-3 py-2 rounded-lg bg-slate-600  w-full mb-3"
            ></input>
            <br></br>

            <label className="text-gray-500 font-bold">
              Password<span className="text-red-600">*</span>
            </label>
            <br></br>
            <div className="flex justify-center items-center relative">
              <input
                type={showpassword ? "text" : "password"}
                onChange={handleform}
                value={form.password}
                id="password"
                name="password"
                className=" px-3 py-2 rounded-lg bg-slate-600 
               w-full "
              ></input>
              <span
                className=" text-2xl absolute left-[90%] "
                onClick={() => setshowpassword(!showpassword)}
              >
                {showpassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <span className="flex justify-end  font-semibold  text-blue-800">
              forgot password
            </span>
            <button className=" py-3 bg-yellow-500 text-black font-bold w-full my-5 rounded-md">
              Login
            </button>
            <div className="flex justify-center items-center">
              <div className="w-full h-1 bg-slate-500 rounded-full"></div>
              <div className="text-slate-400 mx-2">OR</div>
              <div className="w-full h-1 bg-slate-500 rounded-full"></div>
            </div>
            <div className="w-full py-3 px-3 rounded-xl flex justify-center items-center gap-5 font-bold my-5 bg-yellow-500 text-black">
              <button>Google</button>
              <span className="text-red-600">
                <FaGoogle />
              </span>
            </div>
          </form>
        </div>
        <div className="relative">
          <img src={Frame} alt="frame-img" className="relative"></img>
          <img
            src={loginimg}
            alt="frame-img"
            className="absolute top-5 left-3"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
