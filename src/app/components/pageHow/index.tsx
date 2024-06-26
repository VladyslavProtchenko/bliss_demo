"use client";
import Button from "./../../components/button";
import howImg from "../../../../public/assets/howImg.png";
import { useEffect, useRef, useState } from "react";

const slides = [
  {title:'Easy Installation', text:'Bliss kit with clearly labelled and commissioned devices and a customized installation guide for a quick and hassle-free setup.'},
  {title:'Intelligent Monitoring', text:'Bliss continuously monitors your building\'s occupancy, temperature, air quality, and energy use through its advanced sensors.'},
  {title:'Automated Optimization (with Bliss Genius Pro plan)', text: 'The system\'s intelligent algorithms analyze data in real-time, automatically adjusting HVAC, lighting, and plug loads for optimal comfort and efficiency.'},
  {title:'Actionable Insights', text:'The Bliss Hub web app provides a user-friendly dashboard with real-time data, insights, and recommendations for improving performance'},
  {title:'Continuous Savings', text:'By constantly adapting to your building\'s unique needs, Bliss helps you save on utility bills and maintenance costs while enhancing occupant satisfaction.'},
]

export default function PageHow() {
  
  const [selectedItem, setSelectedItem] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollTop = container.scrollTop;
        const itemHeight = container.scrollHeight / 7; 
        const newIndex = Math.floor(scrollTop / itemHeight);
        setSelectedItem(newIndex+1);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
      <section className={howWorks}>
        <div className={wrapper}>

          <div className={howWorksContent}>
            <h2 className={howWorksTitle}>How Bliss Works</h2>
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
          <img src={howImg.src} alt="office photo" className={howWorksImage} />
          <h2 className={howWorksTitle2}>How Bliss Works</h2>
        </div>
      </section>
  );
}

const wrapper = 'flex max-w-[1440px] flex-col-reverse lg:flex-row py-[100px] gap-[40px] items-center px-[20px] md:px-0'
const howWorks =
  "flex w-full justify-center  bg-bgLight";
const howWorksContent =
  "flex flex-col w-full lg:w-1/2 md:pl-[30px] md:pl-[60px] lg:pl-[100px]";
const howWorksTitle = " hidden lg:flex text-[40px] text-gray mb-[50px]";
const howWorksTitle2 =
  "flex lg:hidden text-[40px] text-gray self-start ml-[30px]";
const howWorksMenu = "flex flex-col mb-[40px] max-h-[500px] overflow-y-scroll no-scrollbar";
const howWorksMenuItem = "flex items-center";
const howWorksNumber = "text-[36px] text-gray mr-[20px]";
const howWorksItemContent = "px-[18px] py-[14px] border-bgDark border-l-[4px] ";
const howWorksItemTitle = "text-[16] font-bold";
const howWorksItemText = "text-[16px] leading-[22px] font-thin";
const howWorksImage =
  "bg-cover w-full bg-no-repeat  max-h-[300px] md:max-h-[450px] lg:max-w-[1000px] rounded-xl lg:w-1/2 ";


