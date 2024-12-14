import React from "react";
import wallpaper from "../Images/blog-background.webp";

const BannerImage = () => {
  return (
    <div className="w-full py-10">
      <img className="rounded-xl" src={wallpaper} alt="wallpaper" />
    </div>
  );
};

export default BannerImage;
