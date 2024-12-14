import React from "react";

const Footercard = () => {
  return (
    <div className="w-full flex rounded-2xl flex-col justify-center items-center bg-slate-950 mt-10">
      <div className="">
        <p className="text-cyan-50 text-4xl font-bold pt-28 text-center">
          Join Our Community!
        </p>
        <p className="text-cyan-50 pt-4 text-xl font-bold ">
          Get news in your inbox every week! We hate spam too, so no worries
          about this.
        </p>
        <div className="w-full flex justify-center gap-5 py-10 ">
          <input
            className="w-80 h-10 border-2 border-cyan-50 bg-slate-950 text-slate-50 rounded-xl font-bold px-2"
            type="text"
            placeholder="Email"
          />

          <button className="bg-white w-40 rounded-xl hover:bg-slate-500 z-50 text-xl">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footercard;
