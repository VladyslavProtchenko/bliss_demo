"use client";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";

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


export default function PageFaq() {
  const [menu, setMenu] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
  }); 
  const [menu2, setMenu2] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
  });
  return (
      <section className={faq}>
        <h2 className={faqTitle}>FAQ</h2>
        <div className="flex justify-between flex-col md:flex-row">
          <ul className={faqMenu + " border-b-[0px] md:border-b-[1px]"}>
            {problemMenu.map((item, index: number) => (
              <li className={faqMenuItem}>
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
          <ul className={faqMenu}>
            {problemMenu.map((item, index: number) => (
              <li className={faqMenuItem}>
                <div
                  className={problemMenuItemHeader}
                  onClick={() => setMenu2({ ...menu2, [index]: !menu2[index] })}
                >
                  <p className={problemMenuTitle}>{item.title}</p>
                  <div className="p-2 bg-green text-white rounded-full">
                  {menu2[index] 
                    ? <GoChevronUp />
                    : <GoChevronDown />}
                  </div>
                </div>
                {menu2[index] && (
                  <p className={problemMenuText}>{item.content}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
  );
}

const faq = "px-[30px] md:px-[60px] lg:px-[100px] py-[60px] w-full";
const faqTitle = "text-gray text-[40px] w-full text-start mb-[40px]";
const faqMenu =
  "flex w-full md:w-[48%] flex-col border-b-[1px] border-[#333] md:mb-[30px]";
const faqMenuItem =
  "flex flex-col py-[26px] gap-[10px] border-t-[1px] border-[#333] cursor-pointer";


const problemMenuItemHeader = "flex justify-between";

const problemMenuTitle = "text-[18px]";
const problemMenuText = "text-[18px] font-thin pr-10";

