import React from "react";
import video from "../../assets/my-video.mp4";

const Tv = () => {
  return (
    <div className="bg-black text-white grid grid-cols-2 border-y-8 border-gray-800 min-h-screen">
      <div className="flex flex-col items-start justify-center gap-8 ml-32 mb-32">
        <h1 className="text-5xl font-extrabold">Enjoy on your TV</h1>
        <p className="font-semibold text-2xl">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, <br /> Apple TV,
          Blu-ray players and more.
        </p>
      </div>
      <div className="relative w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt="TV"
          className="relative ml-3 mt-3 z-10"
        />
        <video
          autoPlay
          muted
          loop
          className="absolute inset-y-0 w-[61%] h-[38%] object-cover ml-24 mt-28 "
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Tv;
