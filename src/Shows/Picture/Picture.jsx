import React from "react";

const Picture = () => {
  return (
    <div className="bg-black text-white grid grid-cols-2 items-center border-b-8 border-gray-800 min-h-screen">
      <div className="relative left-[20%]">
        <img
          className="w-[80%] flex right-[20%]"
          src="https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
          alt=""
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-6 p-8">
        <h1 className="text-5xl font-extrabold">Create profiles for kids</h1>
        <p className="text-2xl">
          Send children on adventures with their favourite <br /> characters in
          a space made just for them—free with <br /> your membership.
        </p>
      </div>
    </div>
  );
};

export default Picture;
