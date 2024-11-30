import React from "react";

const CustomButton = ({ type, text, onClick, width, height }) => {
  return (
    <button
      type={type}
      className={` bg-red-600 hover:bg-red-700  font-semibold rounded-md text-center text-white text-[16px] ${
        width ? width : ""
      }  ${height ? height : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
