"use client";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Button from "./../../components/button";
import { useState } from "react";
import problemImg from "../../../../public/assets/gadgets.png";


const problemMenu = [
  {
    title: "Faucibus a etiam pharetra",
    content:
      "Inefficient energy usage results in higher operating costs and environmental impact",
  },
  {
    title: "Faucibus a etiam pharetra",
    content: "xxx xxx xxx xxx xxx xxx xxxx  xxxx",
  },
  {
    title: "Faucibus a etiam pharetra ",
    content: "xxx xxx xxx xxx xxx xxx xxxx  xxxx",
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
              <li className={problemMenuItem}>
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
const problem =  "flex flex-col lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] py-[80px]  w-full items-center";
const problemContent = " w-full lg:w-1/2 pb-[40px] lg:pb-0";
const problemTitle = "text-[40px] font-medium text-[#333] mb-[30px]";
const problemMenuConteiner =  "flex flex-col border-b-[1px] border-[#333] mb-[30px]";
const problemMenuItem = "flex flex-col py-[36px] gap-[10px] border-t-[1px] border-[#333] cursor-pointer";
const problemMenuItemHeader = "flex justify-between";
const problemImage = "flex lg:min-w-1/2 w-full h-auto lg:w-1/2 bg-contain bg-no-repeat lg:translate-y-[100px] lg:translate-x-[100px] ";
const problemMenuTitle = "text-[18px]";
const problemMenuText = "text-[18px] font-thin pr-10";
