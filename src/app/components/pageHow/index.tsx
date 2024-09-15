"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  {title:'Plug and Play', text:'Once plugged in, notch devices automatically connect, identify appliance types, and begin tracking individual energy consumption patterns.'},
  {title:'AI-Powered Waste Elimination', text:'Our machine learning algorithms continuously analyze usage data, automatically implementing targeted energy-saving actions to cut unnecessary consumption.'},
  {title:'Automated Carbon Tracking', text: 'notch software converts real-time energy data into accurate carbon emissions metrics, providing a clear, up-to-the-minute picture of your plug load carbon footprint.'},
  {title:'Seamless Emissions Reporting', text:'Our API integrates directly with your carbon accounting software, streamlining Scope 2 emissions reporting and accelerating progress towards your net-zero goals.'},
]

export default function PageHow() {
  const [selectedItem, setSelectedItem] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollTop = container.scrollTop-1;
        const itemScroll = (container.scrollHeight - 500) / 4;

        const index = Math.floor(scrollTop/itemScroll )
        setSelectedItem(index <= 0 ? 0 : index );
      }
    };

    const container = containerRef.current;
    if (container) container.addEventListener('scroll', handleScroll);
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <section className={howWorks}>
        <div className={wrapper}>

          <div className={howWorksContent}>
            <h2 className={howWorksTitle}>How it works</h2>
            <div ref={containerRef} className={howWorksMenu}>
              {slides.map((item, index)=>(
                <div className={
                    selectedItem === index-2 ? howWorksMenuItem + ' opacity-25 ' :
                    selectedItem <= index-3 ? howWorksMenuItem+ ' opacity-0 ' : howWorksMenuItem
                  } key={item.title}>
                  <div className={howWorksNumber}>0{index+1}</div>
                  <div className={selectedItem === index ? howWorksItemContent + 'border-orange' : howWorksItemContent}>
                    <span className={howWorksItemTitle}>
                      {item.title}
                    </span>
                    <p className={howWorksItemText}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
              <div className='py-[50px] w-full'></div>
              <div className='py-[50px] w-full'></div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 max-h-[300px] md:max-h-[450px] rounded-xl flex items-center overflow-hidden'>
            <Image src='/assets/how.png' width='3928' height='4590' alt="office photo" />
          </div>
          <h2 className={howWorksTitle2}>How it works</h2>
        </div>
      </section>
  );
}

const wrapper = 'flex max-w-[1440px] flex-col-reverse lg:flex-row py-[100px] gap-[40px] items-center px-[20px] md:px-0'
const howWorks = "flex w-full justify-center  bg-bgLight";
const howWorksContent ="flex flex-col w-full lg:w-1/2 md:pl-[30px] md:pl-[60px] lg:pl-[100px]";
const howWorksTitle = " hidden lg:flex text-[40px] text-gray mb-[50px]";
const howWorksTitle2 ="flex lg:hidden text-[40px] text-gray self-start ml-[30px]";
const howWorksMenu = "flex flex-col mb-[40px] max-h-[500px] overflow-y-scroll no-scrollbar";
const howWorksMenuItem = "flex items-center";
const howWorksNumber = "text-[36px] text-gray mr-[20px]";
const howWorksItemContent = "px-[18px] py-[14px] border-bgDark border-l-[4px] ";
const howWorksItemTitle = "text-[16] font-bold";
const howWorksItemText = "text-[16px] leading-[22px] font-thin";


