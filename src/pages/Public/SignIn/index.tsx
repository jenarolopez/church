import React, { useEffect, useRef, useState } from "react";
import { classNames } from "../../../utils/helper";
import { publicRequest } from "../../../request/request";
import { signIn } from "../../../reducer/user/action";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../reducer/user/userSlice";
import { setLoading } from "../../../reducer/loading/loadingSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch() as Function;
  const navigate = useNavigate() as Function;
  const handleLogin = () => {
    dispatch(signIn({ username, password }));
  };

  const user = useSelector(getUser);

 


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
                <span className="flex flex-row items-center gap-2">
                  <h3 className="subpixel-antialiased text-lg">Username</h3>{" "}
                  {user.error === "username" && (
                    <span className="text-sm text-red-500">
                      *Invalid Username
                    </span>
                  )}
                </span>
                <input
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className={classNames(
                    "p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border",
                    !(user.error === "username" || user.error === "password")
                      ? "border-gray-300"
                      : "border-red-300"
                  )}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="flex flex-row items-center gap-2">
                  <h3 className="subpixel-antialiased text-lg">Password</h3>{" "}
                  {user.error === "password" && (
                    <span className="text-sm text-red-500">
                      *Invalid Password
                    </span>
                  )}
                </span>
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className={classNames(
                    "p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border",
                    !(user.error === "username" || user.error === "password")
                      ? "border-gray-300"
                      : "border-red-300"
                  )}
                  type="password"
                />
              </div>
            </div>
            <div className="text-center mt-10">
              <a className="subpixel-antialiased text-sm cursor-pointer hover:text-slate-500">
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-center ">
              <button
                onClick={handleLogin}
                className="bg-slate-700 rounded-md text-white p-5 pt-2 pb-2 text-lg focus:ring-2 focus:text-white ring-slate-600 hover:bg-slate-600 ring-offset-1"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
