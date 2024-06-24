"use client";
import Button from "./../../components/button";
import howImg from "../../../../public/assets/howImg.png";
import { useEffect, useRef, useState } from "react";

const slides = [
  {title:'Wireless Sensors and Controls', text:'Bliss uses advanced wireless sensors and controls to monitor and manage your building\'s environment, including temperature, humidity, air quality, and occupancy levels, providing you with a comprehensive view of your building\'s performance.'},
  {title:'Smart Thermostat', text:'The Bliss smart thermostat serves as the hub of your system, connecting wirelessly to your sensors and controls, and providing intelligent automation and optimization based on your building\'s unique needs and preferences.'},
  {title:'Intelligent Automation', text:'Bliss leverages advanced algorithms and machine learning to continuously analyze your building\'s data and automatically adjust your HVAC system for optimal comfort and efficiency, helping you save energy and reduce costs without lifting a finger.'},
  {title:'User-Friendly Mobile App and Web Platform', text:'The Bliss mobile app and web platform provide intuitive tools for setup, control, monitoring, and reporting, making it easy to manage your building\'s performance from anywhere, at any time.'},
  {title:'Continuous Optimization**', text:'Bliss continuously learns and adapts to your building\'s unique patterns and preferences, ensuring ongoing optimization and improvement over time, so your building stays comfortable and efficient no matter what.'},
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
            <Button
              title=" Explore Bliss Genius and Bliss Genius Pro"
              type="orange"
              onClick={() => {}}
              className="sm:self-start"
            />
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
const howWorksMenu = "flex flex-col mb-[40px] max-h-[500px] overflow-y-scroll scrollbar-hide";
const howWorksMenuItem = "flex items-center";
const howWorksNumber = "text-[36px] text-gray mr-[20px]";
const howWorksItemContent = "px-[18px] py-[14px] border-bgDark border-l-[4px] ";
const howWorksItemTitle = "text-[16] font-bold";
const howWorksItemText = "text-[16px] leading-[22px] font-thin";
const howWorksImage =
  "bg-cover w-full bg-no-repeat  max-h-[300px] md:max-h-[450px] lg:max-w-[1000px] rounded-xl lg:w-1/2 ";


