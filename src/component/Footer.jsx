import React from "react";
import { MdOutlineTranslate } from "react-icons/md";
// import "../Css/Nabar.css";

const data = [
  {
    heading1: "FAQ",
    heading2: "Investor Relations",
    heading3: "Privacy",
    heading4: "Speed Test",
  },
  {
    heading1: "Help Centre",
    heading2: "Jobs",
    heading3: "Cookie Preferences",
    heading4: "Legal Notices",
  },
  {
    heading1: "Account",
    heading2: "Ways to Watch",
    heading3: "Corporate Information",
    heading4: "Only on Netflix",
  },
  {
    heading1: "Media Centre",
    heading2: "Terms of Use",
    heading3: "Contact Us",
  },
];

const Footer = () => {
  // console.log(data);
  return (
    <div className="bg-black text-white border-b-8 border-gray-800 min-h-96 p-6">
      <div className="py-12">
        <div className="flex flex-col items-start pb-6 w-[25%] ml-52 ">
          <h1 className="">
            Questions? Call
            <span className="pl-1 underline underline-offset-1 cursor-pointer">
              000-800-919-1694
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-4 px-28 text-sm">
          {data.map((item, index) => (
            <div
              key={index}
              className="underline underline-offset-1 cursor-pointer grid gap-5 items-center justify-center"
            >
              <div>{item.heading1}</div>
              <div>{item.heading2}</div>
              <div>{item.heading3}</div>
              <div>{item.heading4}</div>
            </div>
          ))}
          <div className="py-5 px-24">
            <div className="custom-select">
              <MdOutlineTranslate className="select-icon text-white" />
              <select className="px-6 py-1 border border-white rounded-md bg-transparent text-white">
                <option className="text-black">English</option>
                <option className="text-black">हिंदी</option>
              </select>
            </div>
            <p className="cursor-pointer py-6">Netflix India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
