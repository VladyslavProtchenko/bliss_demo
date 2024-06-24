"use client";
import Button from "@components/button";
import icon1 from "../../../../../public/assets/icon1.png";
import icon2 from "../../../../../public/assets/icon2.png";
import icon3 from "../../../../../public/assets/icon3.png";

import Image from "next/image";

export default function PageDasboard() {
  return (
      <section className={container}>
        <div className={wrapper}>
          <div  className={header}>
            <h1  className={title}>
              Your <span className={span}>Intuitive Dashboard</span> for Smart Building Management  
            </h1>
            <p className={text}>The Bliss software platform provides building owners and operators with a powerful, easy-to-use dashboard to monitor, analyze, and optimize all aspects of their smart building&apos;s performance in real-time.</p>
          </div>
          <div className={items}>

            <div className={item}>
              <Image  className={img} alt='icon' src={icon3} width={240} height={240} />
              <p className={itemText}>Track usage patterns and identify opportunities for efficiency improvements through intuitive charts and graphs.</p>
            </div>
            <div className={item}>
              <Image  className={img} alt='icon' src={icon2} width={240} height={240} />
              <p className={itemText}>Monitor comfort levels over time and make data-driven decisions to enhance occupant satisfaction.</p>
            </div>
            <div className={item}>
              <Image  className={img} alt='icon' src={icon1} width={240} height={240} />
              <p className={itemText}>Stay informed about the energy-saving actions automatically taken by the Bliss system, quantifying the energy and cost savings achieved.</p>
            </div>
          </div>
        </div>
      </section>
  );
}


const wrapper = ' w-full max-w-[1440px] px-[30px] md:px-[60px] lg:px-[100px] py-[100px] '
const container = "flex  w-full justify-center";
const header = "flex flex-col md:flex-row justify-between mb-[60px] gap-[60px]";
const title = "font-gray text-[40px] w-full md:w-1/2"
const span = "text-red-500";
const text = "w-full md:w-1/2 md:text-end text-gray text-[18px] font-thin leading-[25px]";
const items = "flex-col md:flex-row flex justify-between";
const item = "p-5 w-full  md:w-[32%] border-b-2 md:border-b-0 md:border-r-2 border-orange md:last:border-none";
const img = "w-[60px] h-[60px] mb-5";
const itemText = " text-gray text-[18px] font-thin leading-[25px]";

