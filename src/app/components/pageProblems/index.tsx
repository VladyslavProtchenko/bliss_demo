"use client";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Button from "./../../components/button";
import { useState } from "react";
import problemImg from "../../../../public/assets/gadgets.png";


const problemMenu = [
  {
    title: "Energy Waste Drains Resources",
    content:
      "Small and medium-sized buildings often struggle with inefficient HVAC systems, leading to excessive energy consumption and inflated utility bills. This not only impacts the bottom line but also contributes to a larger carbon footprint.",
  },
  {
    title: "Comfort Imbalances Hinder Productivity",
    content: " Inconsistent temperatures and poor air quality across different zones create discomfort, affecting occupant satisfaction and overall performance. Without proper monitoring and control, maintaining an optimal environment becomes a constant challenge.",
  },
  {
    title: "Limited Insights Hamper Decision-Making",
    content: "Without advanced monitoring systems, building managers lack the data needed to make informed decisions about energy use and space optimization. This leads to missed opportunities for improvement and potential oversights in building management.",
  },
];


export default function PageProblems() {
  const [menu, setMenu] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
  });
  return (
      <section className={problem}>
        <div className={problemContent}>
          <h2 className={problemTitle}>The Problem</h2>
          <ul className={problemMenuConteiner}>
            {problemMenu.map((item, index: number) => (
              <li className={problemMenuItem} key={item.title}>
                <div
                  className={problemMenuItemHeader}
                  onClick={() => setMenu({ ...menu, [index]: !menu[index] })}
                >
                  <p className={problemMenuTitle}>{item.title}</p>
                  <div className="p-2 bg-green text-white rounded-full">
                    {menu[index] 
                      ? <GoChevronUp />
                      : <GoChevronDown />}
                  </div>
                </div>
                {menu[index] && (
                  <p className={problemMenuText}>{item.content}</p>
                )}
              </li>
            ))}
          </ul>
          <Button
            title="Why Bliss"
            type="orange"
            onClick={() => {}}
            className="w-full sm:max-w-[120px]"
          />
        </div>
        <img src={problemImg.src} alt='image of device'  className={problemImage}></img>
      </section>
  );
}
const problem =  "flex max-w-[1440px] flex-col lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] py-[80px]  w-full items-start";
const problemContent = " w-full lg:w-1/2 pb-[40px] lg:pb-0";
const problemTitle = "text-[36px] font-medium text-[#333] mb-[30px]";
const problemMenuConteiner =  "flex flex-col border-b-[1px] border-[#333] mb-[30px]";
const problemMenuItem = "flex flex-col py-[36px] gap-[10px] border-t-[1px] border-[#333] cursor-pointer";
const problemMenuItemHeader = "flex justify-between";
const problemImage = "flex lg:min-w-1/2 w-full h-auto lg:w-1/2 bg-contain bg-no-repeat lg:translate-y-[100px] lg:translate-x-[100px] ";
const problemMenuTitle = "text-[18px]";
const problemMenuText = "text-[18px] font-thin pr-10";
