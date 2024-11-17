import React, { useState } from "react";
import "../Css/Login.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = ({ setEmail }) => {
  const navigate = useNavigate();
  const [email, setEmailState] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleClick = () => {
    if (validateEmail(email)) {
      setEmail(email);
      navigate("/signup/password?");
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
    setIsValidEmail(true); // Reset validation state when input changes
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
          onChange={handleInputChange}
          placeholder=""
          className={`bg-custom-gray py-4 px-12 w-auto rounded-md text-start text-white border-2 ${
            !isValidEmail
              ? "border-red-600 focus:border-red-600"
              : "border-gray-600 focus:border-red-600"
          } focus:outline-red-600`}
        />

        <label>Email address</label>
        <button
          onClick={handleClick}
          className="flex items-center bg-red-600 hover:bg-red-700 font-semibold rounded-md py-4 px-8 text-xl"
        >
          Get Started
          <MdKeyboardArrowRight className="text-white ml-3" size={28} />
        </button>
      </div>
      {!isValidEmail && (
        <p className="text-red-600 mt-2">Please enter a valid email address.</p>
      )}
    </div>
  );
};

export default Login;
