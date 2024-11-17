import React from "react";
import "../Css/Nabar.css";
import { MdOutlineTranslate } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Nabar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="nabar p-4 flex items-center justify-between ">
      <div className="ml-20">
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
      <div className="flex items-center space-x-4 text-white relative">
        <div className="custom-select">
          <MdOutlineTranslate className="select-icon text-white" />
          <select className="px-6 py-1 border border-gray-600 rounded-md bg-transparent text-white">
            <option className="text-black">English</option>
            <option className="text-black">हिंदी</option>
          </select>
        </div>
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-red-600 rounded-lg text-white hover:bg-red-700"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Nabar;
