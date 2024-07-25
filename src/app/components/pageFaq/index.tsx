"use client";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";

const faqMenuItems = [
  {
    title: "How does notch’s AI optimize energy consumption?",
    content: "Our AI learns device usage patterns and automatically cuts power to idle devices. It continuously refines its strategies to maximize savings without affecting productivity.",
  },
  {
    title: "What makes notch’s connectivity more secure than standard Wi-Fi?",
    content: "notch uses a dedicated network separate from your IT infrastructure, reducing cyber attack risks. All data is encrypted end-to-end for maximum security.",
  },
  {
    title: "How does notch adapt to different office layouts and equipment types?",
    content: "Notch's AI learns the unique patterns of each space and device it manages. Whether it's an open-plan office, meeting rooms, or pantry, our system cuts energy waste based on device type and actual usage patterns. This adaptability ensures effective energy waste reduction across diverse office environments.",
  },
  {
    title: "What level of energy data granularity does notch provide?",
    content: "notch delivers real-time, device-level energy data. You can view consumption by individual outlet, device type, room, floor, or entire building.",
  },
];
const faqMenuItems2 = [
  {
    title: "How does notch ensure data privacy?",
    content: "We process data locally where possible and use encryption for all transmissions. Our network is separate from your IT infrastructure, enhancing data privacy.",
  },
  {
    title: "Can notch help with regulatory compliance and sustainability reporting?",
    content: "Yes. notch provides detailed energy and emissions data compatible with major reporting frameworks like GRI, CDP, and TCFD. This supports accurate Scope 2 emissions reporting.",
  },
  {
    title: "What's the typical Return on Investment (ROI) for a notch installation?",
    content: "For a typical 100,000 sq ft office in Singapore, you can save up to $46,000 on annual energy costs and about $1,700 on carbon tax. Most clients see full ROI within 12-18 months.",
  },
  {
    title: "How easy is it to install and maintain notch devices?",
    content: "For a typical 100,000 sq ft office in Singapore, you can save up to $40,000-$ 50,000 on annual energy costs and about $1,700 on carbon tax. Your return on initial hardware purchase is typically around 9-12 months.",
  },
];


export default function PageFaq() {
  const [menu, setMenu] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
    3: false,
  }); 
  const [menu2, setMenu2] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
    3: false,
  });
  return (
      <section className={faq}>
        <h2 className={faqTitle}>FAQ</h2>
        <div className="flex justify-between flex-col md:flex-row">
          <ul className={faqMenu + " border-b-[0px] md:border-b-[1px]"}>
            {faqMenuItems.map((item, index: number) => (
              <li className={faqMenuItem} key={item.title}>
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
            {faqMenuItems2.map((item, index: number) => (
              <li className={faqMenuItem} key={item.title}>
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

const faq = " max-w-[1440px] px-[30px] md:px-[60px] lg:px-[100px] py-[60px] w-full";
const faqTitle = "text-gray text-[18px] leading-[24px] w-full text-start mb-[40px]";
const faqMenu =
  "flex w-full md:w-[48%] flex-col border-b-[1px] border-[#333] md:mb-[30px]";
const faqMenuItem =
  "flex mih-h-[86px] flex-col py-[20px] gap-[10px] border-t-[1px] border-[#333] cursor-pointer";


const problemMenuItemHeader = "flex justify-between items-start";

const problemMenuTitle = "text-[18px] w-[90%]";
const problemMenuText = "text-[18px] font-thin pr-10";

