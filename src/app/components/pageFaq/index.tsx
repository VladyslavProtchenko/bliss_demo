"use client";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";

const faqMenuItems = [
  {
    title: "What makes Bliss different from other smart building solutions?",
    content: "Bliss is specifically designed to address the unique needs and challenges of small and medium-sized buildings, offering a wireless, easy-to-install, and affordable solution that combines advanced sensor technology, intelligent automation, and user-friendly controls, making it the perfect choice for building owners and managers looking to optimize their building's performance without breaking the bank.",
  },
  {
    title: "How difficult is it to install and set up Bliss in my building?",
    content: "Bliss is designed for simple, plug-and-play installation, with wireless sensors and controls that require no complex wiring or infrastructure changes. ",
  },
  {
    title: "How does Bliss ensure optimal comfort for my building's occupants?",
    content: "Bliss continuously monitors your building's environment, including temperature, humidity, air quality, and occupancy levels, and automatically adjusts your HVAC system to maintain optimal comfort based on your building's unique patterns and preferences, ensuring that your tenants or employees are always comfortable and productive.",
  },
];
const faqMenuItems2 = [
  {
    title: "Can Bliss scale to meet my building's changing needs?",
    content: "Absolutely! Bliss offers a modular and expandable solution that can easily grow with your needs, whether you're managing a single building or a portfolio of properties.",
  },
  {
    title: "Is Bliss suitable for all types of HVAC systems?",
    content: "Currently, Bliss is specifically designed to work seamlessly with Rooftop Units (RTUs)",
  },
  {
    title: "Do we need a Building Management System (BMS) to install Bliss?",
    content: "No! Bliss is the perfect solution for buildings without a BMS, as it provides a standalone, all-in-one system for monitoring and optimizing your building's performance.",
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
const faqTitle = "text-gray text-[40px] w-full text-start mb-[40px]";
const faqMenu =
  "flex w-full md:w-[48%] flex-col border-b-[1px] border-[#333] md:mb-[30px]";
const faqMenuItem =
  "flex  flex-col py-[26px] gap-[10px] border-t-[1px] border-[#333] cursor-pointer";


const problemMenuItemHeader = "flex justify-between items-start";

const problemMenuTitle = "text-[18px]";
const problemMenuText = "text-[18px] font-thin pr-10";

