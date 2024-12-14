import React from "react";
import Card from "../card";
import pic1 from "../../Images/pic1.png";
import pic2 from "../../Images/pic2.png";
import pic3 from "../../Images/pic3.PNG";
import ai1 from "../../Images/ai1.jpg";
import pic4 from "../../Images/pic4.PNG";
import pic5 from "../../Images/pic5.PNG";
import pic6 from "../../Images/pic6.PNG";

const cardData = [
  {
    title: "Trading",
    img: pic1,
    userImg: ai1,
    boldWord: " Blockchain Development: How to learn",

    paragraph:
      "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    name: "John Smith",
  },

  {
    title: "Life",
    img: pic2,
    userImg: ai1,
    boldWord: " Blockchain Development: How to learn",

    paragraph:
      "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    name: "John Smith",
  },

  {
    title: "Startup",
    img: pic3,
    userImg: ai1,
    boldWord: " Blockchain Development: How to learn",

    paragraph:
      "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    name: "John Smith",
  },
  {
    title: "Products",
    img: pic4,
    userImg: ai1,
    boldWord: " Blockchain Development: How to learn",

    paragraph:
      "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    name: "John Smith",
  },
  {
    title: "Words",
    img: pic5,
    userImg: ai1,
    boldWord: " Blockchain Development: How to learn",

    paragraph:
      "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    name: "John Smith",
  },
  {
    title: "Company",
    img: pic6,
    userImg: ai1,
    boldWord: " Blockchain Development: How to learn",

    paragraph:
      "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    name: "John Smith",
  },
];
const TrendCards = () => {
  return (
    <div className="w-full flex justify-between items-center flex-wrap">
      {cardData.map((data, index) => {
        return (
          <div key={index}>
            <Card
              heading={data.title}
              img={data.img}
              userImg={data.userImg}
              boldWord={data.boldWord}
              paragraph={data.paragraph}
              name={data.name}
            /> 
            {/* you can also do {...data} it will be same like all the props above */}
          </div>
        );
      })}
    </div>
  );
};

export default TrendCards;
