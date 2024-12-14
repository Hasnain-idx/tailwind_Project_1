import React from "react";

const GetStarted = () => {
  return (
    <div className="w-[50vw] max-w-full flex flex-col gap-2">
      <div className="w-full flex justify-center gap-5">
        <input
          className="w-full border border-slate-300 text-slate-300 rounded-xl font-medium px-2 outline-none"
          type="text"
          placeholder="name@hasnain.com"
        />
        <button className="w-[15vw] bg-black text-rose-50 font-bold px-10 rounded-md py-2">
          GET STARTED
        </button>
      </div>
      <div className="w-full flex justify-start">
      <p className="underline text-slate-600 text-xl">
        See more click here!
      </p>
      </div>
    </div>
  );
};

export default GetStarted;
