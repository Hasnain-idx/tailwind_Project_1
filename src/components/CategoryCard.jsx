import React from "react";

const categoryButton = [
  { buttonTitle: "Trends" },
  { buttonTitle: "Frontend" },
  { buttonTitle: "Backend" },
  { buttonTitle: "Cloud" },
  { buttonTitle: "AI" },
  { buttonTitle: "Tools" },
];

const CategoryCard = () => {
  return (
    <div className="w-[60vw] max-w-full">
      <div className="flex gap-10 text-black text-2xl py-1 bg-slate-200 justify-center w-50">
        {categoryButton.map((btn, index) => (
          <button key={index} className="hover:bg-white px-8 rounded-md">{btn.buttonTitle}</button>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
