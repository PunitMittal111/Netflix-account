import React from "react";

const CustomInput = ({
  type,
  id,
  label,
  placeholder,
  onchange,
  value,
  isInvalid,
}) => {
  return (
    <div
      className=" relative flex items-center justify-center gap-1.5"
      style={{ zIndex: 20 }}
    >
      <input
        type="text"
        placeholder=""
        className="bg-transparent py-2 px-12 w-72 rounded-md text-start text-white border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-all duration-300"
      />
      <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg transition-all duration-300">
        FirstName
      </label>
    </div>
  );
};

export default CustomInput;
