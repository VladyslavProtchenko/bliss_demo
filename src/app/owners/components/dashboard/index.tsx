"use client";
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
            With Intelligence That Saves Energy,<span className={span}>Automatically</span>
            </h1>
            
          </div>
          <div className={items}>

            <div className={item}>
              <Image  className={img+' md:border-none '} alt='icon' src={icon3} width={240} height={240} />
              <h2 className={itemHeader}>Automated Savings</h2>
              <p className={itemText}>Machine learning algorithms automatically adjust HVAC and outlets to optimize energy consumption based on occupancy and preferences.</p>
            </div>
            <div className={item}>
              <Image  className={img} alt='icon' src={icon2} width={240} height={240} />
              <h2 className={itemHeader}>Remote Device Management</h2>
              <p className={itemText}>Access and control HVAC systems and smart outlets from anywhere to streamline facility management.</p>
            </div>
            <div className={item}>
              <Image  className={img} alt='icon' src={icon1} width={240} height={240} />
              <h2 className={itemHeader}>Real-Time Data and Trends</h2>
              <p className={itemText}>Gain visibility into temperature trends, occupancy patterns, and energy consumption across all your office spaces to make data-driven decisions.</p>
            </div>
          </div>
        </div>
      </section>
  );
}

const itemHeader = ' text-[24px] mb-4 px-5'
const wrapper = ' w-full max-w-[1440px] px-[30px] md:px-[60px] lg:px-[100px] py-[100px] '
const container = "flex  w-full justify-center";
const header = "flex flex-col md:flex-row justify-between mb-[60px] gap-[60px]";
const title = "font-gray text-[40px] w-full md:w-1/2"
const span = "text-red-500";
const items = "flex-col md:flex-row flex justify-between";
const item = "py-5 w-full  md:w-[32%] border-b-2 md:border-b-0 border-orange";
const img = "w-[100px] px-5 h-[60px] mb-5 md:border-orange md:border-l-2 ";
const itemText = " text-gray px-5 text-[18px] font-thin leading-[25px]";

