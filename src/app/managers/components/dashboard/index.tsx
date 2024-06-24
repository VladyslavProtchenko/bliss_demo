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
            The <span className={span}>Smart Building Upgrade</span> Solution That Sells Itself
            </h1>
            
          </div>
          <div className={items}>

            <div className={item}>
              <Image  className={img+' md:border-none '} alt='icon' src={icon3} width={240} height={240} />
              <h2 className={itemHeader}>Effortless Installation</h2>
              <p className={itemText}>Transform any commercial RTU HVAC system in under an hour with our plug-and-play solution. Bliss&apos;s easy installation means you can upgrade more buildings in less time, maximizing your billable hours without the headache of extensive rewiring or programming.</p>
            </div>
            <div className={item}>
              <Image  className={img} alt='icon' src={icon2} width={240} height={240} />
              <h2 className={itemHeader}>Recurring Revenue</h2>
              <p className={itemText}>Turn every installation into an ongoing revenue opportunity. Bliss&apos;s subscription- based optimization service allows you to offer continuous value to your clients while generating monthly recurring revenue.</p>
            </div>
            <div className={item}>
              <Image  className={img} alt='icon' src={icon1} width={240} height={240} />
              <h2 className={itemHeader}>Happy Customers</h2>
              <p className={itemText}>Provide your clients with a solution that reduces energy consumption, customer complaints, and  service visits. Happy clients mean more referrals and steady growth for your business.</p>
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

