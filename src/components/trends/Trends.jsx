import React from "react";
import TrendHeading from "./TrendHeading";
import TrendCards from "./TrendCards";

const Trends = () => {
  return (
    <div>
      <TrendHeading />
      <TrendCards />
      <div className="flex justify-center items-center py-40">
        <button className="text-2xl bg-slate-200 text-gray-600 font-bold hover:bg-slate-400 w-40 h-14 rounded-md ">
          View more
        </button>
      </div>
    </div>
  );
};

export default Trends;
