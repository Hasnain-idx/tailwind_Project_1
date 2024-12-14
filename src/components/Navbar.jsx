import React, { useState } from "react";
import icon8 from "../Images/bars-solid.svg";
import icon1 from "../Images/user.svg";
import icon2 from "../Images/file.svg";
import icon3 from "../Images/images-solid.svg";

const NavLinks = [
  { icon:  icon1 , linkTitle: "User" },
  { icon:  icon2 , linkTitle: "Page" },
  { icon:  icon3 , linkTitle: "Image" },
];
const Navbar = () => {
  const [show, setShow] = useState(false);

  const setShowitem = () => {
    setShow(true);
  };

  return (
    <div className="flex justify-between fixed top-0 left-0 bg-transparent px-20 py-4 w-full backdrop-filter backdrop-blur-lg">
      <div className="font-bold items-center flex justify-start gap-4">
        <button className="flex justify-between w-8 h-8 md:hidden">
          <img src={icon8} alt="hamburger" />
        </button>
        <h1 className="text-lg  py-8 ">Tailwind Project!</h1>
      </div>

      <div className="flex justify-between  items-center  gap-14">
        {NavLinks.map((item, index) => (
          <div key={index} className="flex justify-start items-center gap-4 ">
            <img className="w-[20px] h-auto" src={item.icon} alt="user" />
            <a href="/src/components/User.jsx" className="text-[18px]">{item.linkTitle}</a>
          </div>
        ))}
      </div>

      <div className="flex  justify-center  items-center   gap-10">
        <div className=" font-extrabold  text-xl ">Sign In</div>
        <button
          onClick={setShowitem}
          className="bg-black text-rose-50  font-bold  px-5  py-2  rounded-md"
        >
          BLOCKS
        </button>
        {show && (
          <div className="w-full h-full bg-white">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Link</li>
              <li>Read More</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
