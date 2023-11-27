"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMdMail } from "react-icons/io";
import { FaEyeSlash, FaUser } from "react-icons/fa";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col space-y-5">
      <div>
        <h1 className="text-3xl font-semibold">Welcome Back</h1>
        <p className="text-base">please enter your account details below</p>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col ">
          <label htmlFor="name">Name</label>
          <div className="relative flex items-center">
            <input
              className="py-2 border-2 border-red-400 rounded-md w-full  pl-8"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FaUser className="absolute text-xl left-2 " />
          </div>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email">E-mail</label>
          <div className="relative flex items-center">
            <input
              className="py-2 border-2 border-red-400 rounded-md w-full  pl-8"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <IoMdMail className="absolute text-xl left-2 " />
          </div>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="password">Password</label>

          <div className="relative flex items-center">
            <input
              className="py-2 border-2 border-red-400 rounded-md w-full  pl-8"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaEyeSlash className="absolute text-xl left-2 " />
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <input
            type="button"
            value={"Sign Up"}
            onClick={() => {}}
            className="bg-red-300 text-black font-semibold py-2 rounded-md "
          />
        </div>

        <div className="flex items-center">
          <div className="flex-1 border-t border-black"></div>
          <div className="mx-4 text-gray-600">or</div>
          <div className="flex-1 border-t border-black"></div>
        </div>
        <div className="flex">
          <button className="flex justify-center bg-white rounded-lg w-full py-3">
            <FcGoogle className="text-2xl " />
            <span className="ml-3">Sign Up With Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
