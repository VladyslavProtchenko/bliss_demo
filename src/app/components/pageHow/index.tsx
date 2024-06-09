"use client";
import Button from "./../../components/button";
import howImg from "../../../../public/assets/howImg.png";
import Slider from 'react-slick';
import { useEffect, useRef, useState } from "react";

export default function PageHow() {
  
  const [selectedItem, setSelectedItem] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollTop = container.scrollTop;
        const itemHeight = container.scrollHeight / 10; 
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
        <div className={howWorksContent}>
          <h2 className={howWorksTitle}>How Bliss Works</h2>
          <div ref={containerRef} className={howWorksMenu}>
            {[1,2,3,4,5,6,7,8].map((item, index)=>(
              <div className={
                  selectedItem === index-2 ? howWorksMenuItem + ' opacity-25 ' :
                  selectedItem <= index-3 ? howWorksMenuItem+ ' opacity-0 ' :howWorksMenuItem
                } key={item}>
                <div className={howWorksNumber}>0{index+1}</div>
                <div className={selectedItem === index ? howWorksItemContent + 'border-orange' : howWorksItemContent}>
                  <span className={howWorksItemTitle}>
                    All-in-One Monitoring with Bliss Genius
                  </span>
                  <p className={howWorksItemText}>
                    Our cutting-edge Bliss Genius device integrates advanced
                    sensors to monitor occupancy, temperature, humidity, and air
                    quality in real-time, providing a comprehensive overview of
                    your building's environment.
                  </p>
                </div>
              </div>
            ))}
            <div className='py-[50px] w-full'></div>
            <div className='py-[50px] w-full'></div>
            <div className='py-[50px] w-full'></div>
          </div>
          <Button
            title=" Explore Bliss Genius and Bliss Genius Pro"
            type="orange"
            onClick={() => {}}
            className="sm:self-start"
          />
        </div>
        <img src={howImg.src} alt="office photo" className={howWorksImage} />
        <h2 className={howWorksTitle2}>How Bliss Works</h2>
      </section>
  );
}


const howWorks =
  "flex-col-reverse lg:flex-row py-[100px]  bg-bgLight flex gap-[40px] items-center px-[20px] md:px-0";
const howWorksContent =
  "flex flex-col w-full lg:w-1/2 md:pl-[30px] md:pl-[60px] lg:pl-[100px]";
const howWorksTitle = " hidden lg:flex text-[40px] text-gray mb-[50px]";
const howWorksTitle2 =
  "flex lg:hidden text-[40px] text-gray self-start ml-[30px]";
const howWorksMenu = "flex flex-col mb-[40px] max-h-[500px] overflow-y-scroll scrollbar-hide";
const howWorksMenuItem = "flex items-center";
const howWorksNumber = "text-[36px] text-gray mr-[20px]";
const howWorksItemContent = "px-[18px] py-[14px] border-bgDark border-l-[4px] ";
const howWorksItemTitle = "text-[16] font-bold";
const howWorksItemText = "text-[16px] leading-[22px] font-thin";
const howWorksImage =
  "bg-cover w-full bg-no-repeat  max-h-[300px] md:max-h-[450px] lg:max-w-[1000px] rounded-xl lg:w-1/2 ";


