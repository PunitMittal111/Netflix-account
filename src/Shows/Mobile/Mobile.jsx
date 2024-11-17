import React from "react";

const Mobile = () => {
  return (
    <div className="bg-black text-white grid grid-cols-2 items-center border-b-8 border-gray-800 min-h-screen">
      <div className="relative left-[24%]">
        <img
          className="w-[80%] "
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
        />
        <div className="absolute top-[70%] left-[20%] w-[40%] py-4 rounded-xl border-2 border-gray-600 bg-black text-white">
          <div className="flex items-center">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt=""
              className="h-16 px-3"
            />
            <h1>
              Stranger Things <br />
              <span className="text-blue-600">Downloading...</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-6 p-8">
        <h1 className="text-5xl font-extrabold">Download your shows</h1>
        <h1 className="text-5xl font-extrabold">to watch offline</h1>
        <p className="font-semibold text-2xl">
          Save your favourites easily and always have something <br /> to watch.
        </p>
      </div>
    </div>
  );
};

export default Mobile;
