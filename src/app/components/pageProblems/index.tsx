"use client";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Button from "./../../components/button";
import { useState } from "react";
import problemImg from "../../../../public/assets/gadgets.png";


const problemMenu = [
  {
    title: "Rising Energy Costs Eating into Profits",
    content:
      "Inefficient HVAC systems and energy waste in buildings are silently draining your budget. Without smart controls, you're paying for energy you don't need.",
  },
  {
    title: "Tenant Complaints About Comfort on the Rise",
    content: "Temperature imbalances are more than an inconvenience – they're a threat to tenant satisfaction and retention. Current systems can't keep up with diverse space needs.",
  },
  {
    title: "Peak Energy Prices Hitting Hard",
    content: "Surging energy costs during peak hours are unpredictable and unmanageable. Your building is vulnerable without intelligent demand management.",
  },
  {
    title: "Building Upgrades are Expensive and Complicated",
    content: "Traditional Building Management Systems are too expensive and complex for your needs. You're left choosing between outdated controls or overpriced solutions.",
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
          <h2 className={problemTitle}> 
            <span className='text-red-500'>87% of Commercial Building Operators</span> Face These Challenges. Do You?</h2>
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

        </div>
        <img src={problemImg.src} alt='image of device'  className={problemImage}></img>
      </section>
  );
}
const problem =  "flex max-w-[1440px] flex-col lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] py-[80px]  w-full items-start";
const problemContent = " w-full lg:w-1/2 pb-[40px] lg:pb-0";
const problemTitle = "text-[22px] font-medium text-[#333] mb-[30px]";
const problemMenuConteiner =  "flex flex-col border-b-[1px] border-[#333] mb-[30px]";
const problemMenuItem = "flex flex-col py-[36px] gap-[10px] border-t-[1px] border-[#333] cursor-pointer";
const problemMenuItemHeader = "flex justify-between";
const problemImage = "flex lg:min-w-1/2 w-full h-auto lg:w-1/2 bg-contain bg-no-repeat lg:translate-y-[100px] lg:translate-x-[100px] ";
const problemMenuTitle = "text-[18px]";
const problemMenuText = "text-[18px] font-thin pr-10";
