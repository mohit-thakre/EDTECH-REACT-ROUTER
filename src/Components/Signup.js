import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Frame from "../assets/frame.png";
import loginimg from "../assets/signup.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = ({ setlogin }) => {
  const [form, setform] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordc: "",
  });
  const [account, setaccount] = useState("student");
  function handleform(e) {
    const { name, value } = e.target;
    setform((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const navigate = useNavigate();
  function handlesubmit(e) {
    e.preventDefault();

    if (form.password !== form.passwordc) {
      return toast.error("password and confirm password does not match");
    }

    setlogin(true);
    toast.success("Account created successfull");

    navigate("/dashboard");
  }
  const finaldata = {
    ...form,
    account,
  };
  console.log(finaldata);
  const [showpassword, setshowpassword] = useState(false);
  const [showpassword1, setshowpassword1] = useState(false);

  return (
    <div>
      <div className="flex justify-center items-center flex-wrap overflow-hidden">
        <div className="w-[100%] p-5 sm:w-[40%]">
          <h1 className=" text-[10vw] sm:text-[2vw] font-bold text-white py-5   ">
            join the million learning to study code with study notion for free
          </h1>
          <p className=" text-gray-500 font-semibold text-2xl   ">
            Build Skills from Today, Tomarrow and Beyond
          </p>
          <p className=" text-blue-800  font-semibold text-2xl  ">
            <i>Education to future proof your carrer </i>
          </p>
          <button className="py-2 px-2 border-2 text-white font-bold my-3 rounded-lg flex justify-between items-centers gap-2 ">
            <button
              className={`px-2 py-1  rounded-md ${
                account === "student"
                  ? "bg-yellow-500 text-white transition duration-50"
                  : ""
              } `}
              onClick={() => setaccount("student")}
            >
              Student
            </button>
            <button
              className={`px-2 py-1  rounded-md ${
                account === "instructor"
                  ? "bg-yellow-500 text-white transition duration-50"
                  : ""
              } `}
              onClick={() => setaccount("instructor")}
            >
              Instructor
            </button>
          </button>
          <form className=" my-5" onSubmit={handlesubmit}>
            <div className="flex gap-4 w-full">
              <div>
                {" "}
                <label className="text-gray-500 font-bold">
                  Firstname<span className="text-red-600">*</span>
                </label>
                <br></br>
                <input
                  type="text"
                  onChange={handleform}
                  value={form.firstname}
                  id="firstname"
                  name="firstname"
                  className=" px-3 py-2 rounded-lg bg-slate-600  w-full mb-3"
                ></input>
              </div>

              <div>
                <label className="text-gray-500 font-bold">
                  Lastname<span className="text-red-600">*</span>
                </label>
                <br></br>
                <input
                  type="text"
                  onChange={handleform}
                  value={form.lastname}
                  id="lastname"
                  name="lastname"
                  className=" px-3 py-2 rounded-lg bg-slate-600  w-full mb-3"
                ></input>
              </div>
            </div>

            <label className="text-gray-500 font-bold">
              Email Address<span className="text-red-600">*</span>
            </label>
            <br></br>
            <input
              type="text"
              onChange={handleform}
              value={form.email}
              id="email"
              name="email"
              className=" px-3 py-2 rounded-lg bg-slate-600  w-[70%]  mb-3"
            ></input>
            <br></br>
            <div className="flex gap-4 w-full">
              <div>
                {" "}
                <label className="text-gray-500 font-bold">
                  Create Password<span className="text-red-600">*</span>
                </label>
                <br></br>
                <div className="flex justify-center items-center relative w-full gap">
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
                    className=" text-2xl absolute left-[80%] "
                    onClick={() => setshowpassword(!showpassword)}
                  >
                    {showpassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              <div>
                {" "}
                <label className="text-gray-500 font-bold">
                  Confirm Password<span className="text-red-600">*</span>
                </label>
                <br></br>
                <div className="flex justify-center items-center relative">
                  <input
                    type={showpassword1 ? "text" : "password"}
                    onChange={handleform}
                    value={form.passwordc}
                    id="passwordc"
                    name="passwordc"
                    className=" px-3 py-2 rounded-lg bg-slate-600 
               w-full "
                  ></input>
                  <span
                    className=" text-2xl absolute left-[80%] "
                    onClick={() => setshowpassword1(!showpassword1)}
                  >
                    {showpassword1 ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
            </div>

            <button className=" py-3 bg-yellow-500 text-black font-bold w-[70%] my-5 rounded-md">
              Signup
            </button>
            <div className="flex justify-center items-center w-[70%]">
              <div className="w-full h-1 bg-slate-500 rounded-full"></div>
              <div className="text-slate-400 mx-2">OR</div>
              <div className="w-full h-1 bg-slate-500 rounded-full"></div>
            </div>
            <div className=" py-3 px-3 rounded-xl flex justify-center items-center gap-5 font-bold my-5 bg-yellow-500 text-black w-[70%]">
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

export default Signup;
