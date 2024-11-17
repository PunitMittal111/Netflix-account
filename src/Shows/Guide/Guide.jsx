import React, { useState } from "react";
import { data } from "../Guide/GuideData";
import { FiPlus } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";

const Guide = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white border-b-8 border-gray-800 min-h-screen">
      <div className="flex items-center justify-center">
        <h1 className="font-extrabold text-5xl pb-8 pt-20 ">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center px-6 mb-8 w-[80%] ">
          {data.map((item, index) => (
            <div key={index} className="bg-gray-900 mb-1 w-full ">
              <div className="flex items-start justify-start py-2">
                <h2
                  className="text-2xl px-6 py-3 cursor-pointer w-full flex justify-between items-center"
                  onClick={() => handleToggle(index)}
                >
                  <span>{item.title}</span>
                  <FiPlus
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-45" : ""
                    }`}
                    size={43}
                  />
                </h2>
              </div>

              <div className="border-black border-y-2 ">
                {activeIndex === index && (
                  <p className="text-2xl py-5 ml-5  ">{item.paragraph}</p>
                )}
              </div>
            </div>
          ))}
          <p className="text-xl pt-10 pb-2 ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div
            className="mt-4 input-container mb-10 flex items-center justify-center gap-1.5"
            style={{ zIndex: 20 }}
          >
            <input
              type="text"
              placeholder=""
              className="bg-gray-800 py-4 px-18 w-auto rounded-md text-start text-white border-2 border-red-600 focus:border-red-600 focus:outline-red-600"
            />
            <label>Email address</label>
            <button className="flex items-center bg-red-600 hover:bg-red-700 font-bold rounded-md py-3 px-6 text-2xl ">
              Get Started
              <MdKeyboardArrowRight className="text-white ml-3" size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
