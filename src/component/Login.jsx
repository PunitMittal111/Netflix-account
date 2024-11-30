import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearError } from "../redux/profileSlice";
import "../Css/Login.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import CustomButton from "./common/CustomButton";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmailState] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleClick = () => {
    if (validateEmail(email)) {
      localStorage.setItem("email", email);
      navigate("/signup/password");
    } else {
      setIsValidEmail(false);
    }
  };

  const validateEmail = (email) => {
    // Basic email validation using regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e) => {
    setEmailState(e.target.value);
    setIsValidEmail(true);
    dispatch(clearError());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="text-center mb-2 mt-20" style={{ zIndex: 20 }}>
        <h className="font-extrabold text-5xl">
          Unlimited movies, TV shows and more
        </h>
        <p className="text-2xl mt-5 mb-6">Watch anywhere. Cancel anytime.</p>
        <p className="text-xl mt-3">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div
        className="mt-4 input-container flex items-center justify-center gap-1.5"
        style={{ zIndex: 20 }}
      >
        <input
          type="email"
          value={email}
          id="email"
          onChange={handleInputChange}
          placeholder=""
          className={`bg-custom-gray py-4 px-12 w-auto rounded-md text-start text-white border-2 ${
            !isValidEmail
              ? "border-red-600 focus:border-red-600"
              : "border-gray-600 focus:border-red-600"
          } focus:outline-red-600 peer`}
        />

        <label
          htmlFor="email"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-600"
        >
          Email address
        </label>

        <CustomButton
          text={
            <span className="flex items-center ">
              Get Started
              <MdKeyboardArrowRight className="text-white ml-2" size={28} />
            </span>
          }
          width="w-32"
          height="h-14"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Login;
