import { faParagraph } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ heading, img, userImg, boldWord, paragraph, name }) => {
  return (
    <div className="w-[28vw] border-x-slate-300 border-2 shadow-xl rounded-lg p-4">
      <img className="rounded-lg" src={img} alt="computer" />
      <p className="text-blue-600 py-2 px-2 font-bold">{heading}</p>
      <p className="py-1 px-2 text-2xl font-bold">
        {boldWord}
      </p>
      <p className=" text-gray-500 py-1 px-2 font-sans text-lg">
        {paragraph}
      </p>

      {/* Card */}
      <div className="flex items-center gap-2">
        <div>
          <img
            className="w-24 h-24 rounded-full py-4 px-2"
            src={userImg}
            alt="profile1"
          />
        </div>
        <div>
          <p className="font-bold text-lg">{name}</p>
          <p className="text-slate-500">10 September 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
