import React from "react";
import video2 from "../../assets/my-video2.mp4";

const Mac = () => {
  return (
    <div className="bg-black text-white grid grid-cols-2 border-b-8 border-gray-800 min-h-screen">
      <div className="flex flex-col items-start justify-center gap-8 ml-40 mb-18">
        <h1 className="text-5xl font-extrabold">Watch everywhere</h1>
        <p className="font-semibold text-2xl">
          Stream unlimited movies and TV shows on your <br /> phone, tablet,
          laptop, and TV.
        </p>
      </div>

      <div className="flex items-center">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          alt=""
          className="relative w-[80%] mt-14 z-10"
        />
        <video
          autoPlay
          muted
          loop
          className="absolute inset-b-0 w-[25%] h-[32%] right-[18%] mb-20 object-cover  "
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
export default Mac;
