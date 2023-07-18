import { TextField } from "@mui/material";
import React, { useEffect, useRef } from "react";

const SignIn = () => {
  return (
    <div>
      <section
        id="Login"
        className="bg-church bg-no-repeat bg-cover relative min-h-screen"
      >
        <div className="overlay"></div>
        <div className="flex flex-row items-center justify-center h-[100vh] w-[95%] ml-auto mr-auto relative desktop:w-[80%] laptop:w-[90%] tablet:w-[90%]">
          <div className="w-[500px] h-[450px] mb-[100px] bg-white/90 drop-shadow-md rounded-md p-5 pt-10 tablet:p-10 flex gap-5 flex-col">
            <h1 className="text-2xl text-slate-700 font-semibold">Sign In</h1>
            <div className="flex gap-5 flex-col pl-2 pr-2 tablet:pl-4 tablet:pr-4 text-gray-500">
              <div className="flex flex-col gap-1">
                <h3 className="subpixel-antialiased text-lg">Username</h3>
                <input
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="subpixel-antialiased text-lg">Password</h3>
                <input
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>
            </div>
            <div className="text-center mt-10">
              <a className="subpixel-antialiased text-sm">Forgot Password?</a>
            </div>
            <div className="flex items-center justify-center ">
              <button className="bg-slate-700 rounded-md text-white p-5 pt-2 pb-2 text-lg">Sign In</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
