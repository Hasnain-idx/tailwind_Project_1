import React from "react";
import Footercard from "./Footercard.jsx";
import FooterEnd from "./FooterEnd.jsx";
import Banner from "./Banner.jsx";
import GetStarted from "./GetStarted.jsx";
import BannerImage from "./BannerImage.jsx";
import CategoryCard from "./CategoryCard.jsx";
import Trends from "./trends/Trends.jsx";
import Articles from "./articles/Articles.jsx";
import Contact from "./Contact.jsx";
import Navbar from "./Navbar.jsx";

const Prenav = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="w-full flex justify-center">
        <GetStarted />
      </div>
      <BannerImage />
      <div className="w-full flex justify-center">
        <CategoryCard />
      </div>
      <Trends />
      <Articles />
      <Footercard />
      <Contact />
      <FooterEnd />
    </div>
  );
};

export default Prenav;
