import React from "react";

const DownCard = ({ cardpic, heading, paragraph }) => {
  return (
    <div className="w-full pt-10 h-screen flex justify-around relative" >
      <img
        className="rounded-2xl w-full object-cover brightness-50"
        src={cardpic}
        alt="pic"
      />

      <div className="absolute py-96 px-6 ">
        <p className=" font-bold text-3xl text-slate-50 py-8">{heading}</p>
        <p className="text-xl text-slate-50 py-10">{paragraph}</p>
      </div>
    </div>
  );
};

export default DownCard;
