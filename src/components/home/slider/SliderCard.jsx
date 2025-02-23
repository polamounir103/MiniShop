import React from "react";

export default function SliderCard({ title, cover, desc }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 px-5 pt-5">
      <div className="flex flex-col gap-5 justify-center items-center md:justify-start md:items-start text-center md:text-start">
        <h2 className="text-5xl font-semibold">{title}</h2>
        <p className="text-md">{desc}</p>
        <button className="bg-slate-400 px-10 py-3 rounded-full font-semibold text-white hover:bg-slate-500 duration-300">
          View Collection
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={cover}
          alt=""
          className="w-full max-h-[300px] object-contain"
        />
      </div>
    </div>
  );
}
