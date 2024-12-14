import React from 'react'

import icon4 from "../Images/thumbs-up.svg";
import icon5 from "../Images/business-time.svg";
import icon6 from "../Images/coins.svg";
import icon7 from "../Images/twete-solid.svg";
const Contact = () => {
  return (
    
    <div className="flex justify-between ">
    <div className="px-20 text-2xl font-bold felx justify-between">
      Material Tailwind
    </div>
    <div className="flex gap-8">
      <p className="text-slate-500 font-sans">Company</p>
      <p className="text-slate-500 font-sans">About Us</p>
      <p className="text-slate-500 font-sans">Team</p>
      <p className="text-slate-500 font-sans">Products</p>
      <p className="text-slate-500 font-sans">Blog</p>
    </div>
    <div className="flex gap-5 pr-20">
      <img className="w-8  h-auto" src={icon4} alt="ico4" />
      <img className="w-8  h-auto" src={icon5} alt="ico5" />
      <img className="w-8  h-auto" src={icon6} alt="ico6" />
      <img className="w-8  h-auto" src={icon7} alt="ico7" />
    </div>
  </div>
  )
}

export default Contact
