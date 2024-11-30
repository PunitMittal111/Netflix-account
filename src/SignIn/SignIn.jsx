import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, clearError } from "../redux/profileSlice";
import "../Css/SignIn.css";
import CustomButton from "../component/common/CustomButton";

const SignIn = () => {
  const [useSignInCode, setUseSignInCode] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { loading, error, profileData } = useSelector((state) => state.profile);

  const toggleSignInMethod = () => {
    setUseSignInCode(!useSignInCode);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    if (useSignInCode) {
      console.log("Send sign-in code for:", formData.email);
    } else {
      dispatch(createUser(formData));
    }
  };

  return (
    <div className="container">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative ml-36 py-2 z-10">
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

      <div className="relative mx-auto w-[27%]">
        <div className="w-full h-[120%] absolute bg-black opacity-80 z-20"></div>
        <div className="relative grid items-center justify-center z-30">
          <h1 className="text-white font-bold text-3xl pt-4 pb-5">Sign Up</h1>

          {!useSignInCode ? (
            <>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder=""
                  className="bg-transparent py-2 px-4 w-72 rounded-md text-white border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-all duration-300 peer"
                />
                <label
                  htmlFor="firstName"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-600"
                >
                  First Name
                </label>
              </div>

              <div className="relative top-2">
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder=""
                  className="bg-transparent py-2 px-4 w-72 rounded-md text-white border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-all duration-300 peer"
                />
                <label
                  htmlFor="lastName"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg transition-all duration-300 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-red-600"
                >
                  Last Name
                </label>
              </div>

              <div className="relative top-4">
                <input
                  type="text"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder=""
                  className="bg-transparent py-2 px-4 w-72 rounded-md text-white border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-all duration-300 peer"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg transition-all duration-300 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-red-600"
                >
                  Email
                </label>
              </div>

              <div className="relative top-6 mb-9">
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder=""
                  className="bg-transparent py-2 px-4 w-72 rounded-md text-white border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-all duration-300 peer"
                />
                <label
                  htmlFor="password"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg transition-all duration-300 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-red-600"
                >
                  Password
                </label>
              </div>
            </>
          ) : (
            <>
              <div className="mt-4 relative">
                <input
                  type="text"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder=""
                  className="bg-transparent py-2 px-4 w-72 rounded-md text-white border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-all duration-300 peer"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg transition-all duration-300 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-red-600"
                >
                  Email
                </label>
              </div>

              <p className="grid items-center justify-center pt-4 pb-3 text-white text-xs">
                Message and data rates may apply
              </p>
            </>
          )}

          <CustomButton
            text={
              useSignInCode
                ? "Send sign-Up Code"
                : loading
                ? "Signing Up..."
                : "Sign Up"
            }
            height="h-10"
            onClick={handleSubmit}
            disabled={loading}
          />

          {profileData && (
            <div className="text-green-500 mt-3">
              <p>Sign-in successful! Welcome, {profileData.firstName}!</p>
            </div>
          )}

          <p className="grid items-center justify-center pt-2 text-white">Or</p>
          <button
            onClick={toggleSignInMethod}
            className="bg-slate-600 hover:bg-slate-700 px-3 py-2 rounded-md font-semibold text-white mt-3"
          >
            {useSignInCode ? "Use password" : "Use a sign-Up code"}
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
              Sign In
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
