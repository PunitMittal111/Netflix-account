import React from "react";
import "../Css/SignInPass.css";

const SignInPass = ({ email }) => {
  return (
    <div>
      <div className="relative flex items-center justify-between py-2 z-10 border border-b-0.2 border-l-purple-300">
        <h1 className="logo" style={{ position: "relative" }}>
          <span className="bend">
            N
            <span className="move-up">
              E<span className="move-bit">TFL</span>I
            </span>
            X
          </span>
        </h1>
        <button className="pr-16 font-semibold text-xl hover:underline underline-offset-1">
          Sign In
        </button>
      </div>
      <div className="relative mx-auto w-[30%] ">
        <h1 className="text-black font-bold text-3xl pt-11 opacity-80">
          Welcome back!
        </h1>
        <h1 className="text-black font-bold text-3xl opacity-80">
          Joining Netflix is easy.
        </h1>
        <p className="text-lg pt-4 ">
          Enter your password and you'll be watching in no <br /> time.
        </p>
        <p className="text-base pt-4">Email</p>
        <p className="font-semibold pb-2">{email} </p>
        <div
          className="input-width grid items-center justify-start "
          style={{ zIndex: 20 }}
        >
          <input
            type="password"
            placeholder=""
            className="py-4 px-12 rounded-md text-start border-2"
          />
          <label className="grid items-center justify-start">
            Enter your password
          </label>
        </div>
        <div className="py-5">
          <a
            href="/"
            className="text-blue-600 hover:underline underline-offset-1"
          >
            Forget your password?
          </a>
        </div>
        <div className="grid items-center justify-center rounded-sm py-4  text-2xl text-white bg-red-600 hover:bg-red-700">
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};
export default SignInPass;