import React, { useState } from "react";
import "../Css/SignIn.css";

const SignIn = () => {
  const [useSignInCode, setUseSignInCode] = useState(false);

  const toggleSignInMethod = () => {
    setUseSignInCode(!useSignInCode);
  };

  return (
    <div className="container ">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative ml-36 py-2 z-10 ">
        <h1 className="logo" style={{ position: "relative" }}>
          <span className="bend">
            N
            <span className="move-up">
              E<span className="move-bit">TFL</span>I
            </span>
            X
          </span>
        </h1>
      </div>
      <div className=" relative mx-auto  w-[27%] ">
        <div className="w-full h-[120%] absolute bg-black opacity-80 z-20"></div>
        <div className="relative grid items-center justify-center z-30">
          <h1 className="text-white font-bold text-3xl pt-11 pb-5 ">Sign In</h1>

          {!useSignInCode ? (
            <>
              <div
                className="mt-4 input-container flex items-center justify-center gap-1.5"
                style={{ zIndex: 20 }}
              >
                <input
                  type="text"
                  placeholder=""
                  className="bg-gray-500 py-4 px-12 w-auto rounded-md text-start text-white border-2 border-red-600 focus:border-red-600 focus:outline-red-600"
                />
                <label>Email or mobile number</label>
              </div>
              <div
                className="mt-4 input-container flex items-center justify-center gap-1.5"
                style={{ zIndex: 20 }}
              >
                <input
                  type="password"
                  placeholder=""
                  className="bg-gray-500 py-4 px-12 w-auto rounded-md text-start text-white border-2 border-red-600 focus:border-red-600 focus:outline-red-600"
                />
                <label>Password</label>
              </div>
            </>
          ) : (
            <>
              <div
                className="mt-4 input-container flex items-center justify-center gap-1.5"
                style={{ zIndex: 20 }}
              >
                <input
                  type="text"
                  placeholder=""
                  className="bg-gray-500 py-4 px-12 w-auto rounded-md text-start text-white border-2 border-red-600 focus:border-red-600 focus:outline-red-600"
                />
                <label>Email or mobile number</label>
              </div>
              <p className="grid items-center justify-center pt-4 pb-1 text-white text-xs">
                Message and data rates may apply
              </p>
            </>
          )}

          <button className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md font-semibold text-white mt-3">
            {useSignInCode ? "Send sign-in Code" : "Sign In"}
          </button>
          <p className="grid items-center justify-center pt-2 text-white">Or</p>
          <button
            onClick={toggleSignInMethod}
            className="bg-slate-600 hover:bg-slate-700 px-3 py-2 rounded-md font-semibold text-white mt-3"
          >
            {useSignInCode ? "Use password" : "Use a sign-in code"}
          </button>
          <a
            href="/"
            className="grid items-center justify-center p-4 hover:underline underline-offset-1 text-white"
          >
            {useSignInCode
              ? "Forgot email or phone number?"
              : "Forgot password?"}
          </a>
          <label className="font-semibold text-base text-white">
            <input type="checkbox" /> Remember me
          </label>
          <p className="p-3 pl-1 text-white">
            New to Netflix?
            <a
              href="/"
              className="font-semibold hover:underline underline-offset-1"
            >
              Sign up now
            </a>
          </p>
          <p className="text-xs text-white pt-2">
            This page is protected by Google reCAPTCHA to <br />
            ensure you're not a bot.
            <a
              href="/"
              className="text-blue-500 hover:underline underline-offset-1"
            >
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
