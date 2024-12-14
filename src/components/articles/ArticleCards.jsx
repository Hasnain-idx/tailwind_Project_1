import React from "react";
import DownCard from "../DownCard";
import cardpic1 from "../../Images/downcard1.png";
import cardpic2 from "../../Images/downcard2.png";
import cardpic3 from "../../Images/downcard3.png";

const downCard = [
    {
      cardpic: cardpic1,
      heading: "Blockchain Development: How to learn",
      paragraph:
        "This article offers valuable insights into the skills, resources, and steps needed to embark on a journey in blockchain development.",
      name: "John Smith",
    },
  
    {
      cardpic: cardpic2,
      heading: "Blockchain Development: How to learn",
      paragraph:
        "This article offers valuable insights into the skills, resources, and steps needed to embark on a journey in blockchain development.",
      name: "John Smith",
    },
  
    {
      cardpic: cardpic3,
      heading: "Blockchain Development: How to learn",
      paragraph:
        "This article offers valuable insights into the skills, resources, and needed to embark on a journey in blockchain development.",
      name: "John Smith",
    },
  ];
const ArticleCards = () => {
  return (
    <div className="w-full flex justify-between items-center gap-4 md:flex-wrap lg:flex-nowrap">
      {downCard.map((card, index) => {
        return (
          <div className="w-full" key={index}>
            <DownCard
              cardpic={card.cardpic}
              heading={card.heading}
              paragraph={card.paragraph}
            />
            {/* you can also use {...card} instea of all the props */}
          </div>
        );
      })}
    </div>
  );
};

export default ArticleCards;
