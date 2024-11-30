import React from "react";
import "../Css/Nabar.css";
import { MdOutlineTranslate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import CustomButton from "./common/CustomButton";

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

        <CustomButton
          text="Sign Up"
          width="w-24"
          height="h-8"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Nabar;
