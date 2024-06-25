"use client";
import { useRef, useState } from "react";
import sliderImg from "../../../../public/assets/sliderImg.png";
import Slider from 'react-slick';

const featuresTabs: string[] = [
  "Automated Energy Savings",
  "Bliss Actions",
  "Occupant-Centric Comfort",
  "Remote Management",
];

const featuresCards: {title:string, text:string}[] = [
  {
    title:"Effortless and Automatic Energy Efficiency with Advanced Machine Learning", 
    text:"At the heart of Bliss is a powerful machine learning engine that continuously analyzes your building's data to identify opportunities for optimization. By making intelligent, real-time decisions, Bliss automatically adjusts your HVAC system, lighting, and plug loads to reduce energy waste and maintain optimal comfort. With Bliss, your building becomes a smarter, more efficient version of itself."
  },
  {
    title:"Automated Energy Optimization for Maximum Savings", 
    text:"Bliss takes energy efficiency to new heights with its intelligent Bliss Efficiency Actions. By continuously analyzing data, occupant feedback, and usage patterns, Bliss identifies opportunities for energy savings and automatically takes action to optimize performance. From adjusting HVAC setpoints and turning off unused lights and equipment, to intelligently managing plug loads, Bliss Efficiency Actions work tirelessly to reduce waste and maximize your energy savings."
  },
  {
    title:"Prioritize Comfort and Well-Being with Occupant Feedback", 
    text:"Bliss puts the comfort and well-being of your building's occupants at the forefront. By actively seeking feedback through the Bliss Sense device and continuously monitoring environmental conditions, our system creates a personalized and responsive environment that adapts to the unique needs and preferences of each individual. Occupants can easily express their comfort levels and preferences, while also accessing real-time information on indoor environmental quality."
  },
  {
    title:"Seamless Control and Insights From Anywhere", 
    text:"With Bliss, you have the power to monitor and manage your building's performance from anywhere, at any time. The intuitive, user-friendly dashboard provides real-time insights, smart alerts, and comprehensive reporting, empowering you to make data-driven decisions that enhance comfort, efficiency, and sustainability. Whether you need to troubleshoot issues or schedule maintenance, Bliss allows you to do it all remotely, saving you time and resources."
  },
];
export default function PageFeatures() {
  const [slide, setSlide] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null)

  return (

      <section className={features}>
        <div className={wrapper}>
          <h1 className={featuresTitle}>Your Intelligent Building Energy Optimization Solution</h1>
          <div className={featuresSlider}>
            {featuresTabs.map((item, index) => (
              <span
                key={item}
                className={
                  index == slide ? featuresSliderItemActive : featuresSliderItem
                }
                onClick={() => {
                  setSlide(index)
                  if(!sliderRef.current) return;
                  sliderRef.current.slickGoTo(index)
                }}
              >
                {item}
              </span>
            ))}
          </div>
          {featuresCards.map((item, index)=>(
            
            <div 
              key={item.title}
              className={
                index === slide ? featureSlide : 'hidden'
                }
            >
              <div className={featureSlideContent}>
                <h3 className={featureSlideTitle}>
                  {item.title}
                </h3>
                <div className={featureSlideText}>
                  {item.text}
                </div>
              </div>
              <img
                alt="image of office"
                src={sliderImg.src}
                className={featureSlideImage}
              />
            </div>
          ))}
        </div>
      </section>

  );
}


const features = " flex justify-center w-full bg-bgLight  ";
const wrapper = 'max-w-[1440px] px-[30px] md:px-[60px] lg:px-[100px] py-[60px]'
const featuresTitle = "w-full md:text-center text-[#333] text-[40px] mb-[60px] ";
const featuresSlider = "flex flex-wrap lg:flex-nowrap ";
const featuresSliderItem = "w-full sm:w-1/2 px-auto  text-center pb-[23px] border-b-[1px] opacity-25 cursor-pointer";
const featuresSliderItemActive = "w-full sm:w-1/2 text-center px-auto pb-[20px] border-b-[1px]  cursor-pointer border-orange border-b-[3px]";
const featureSlide = "flex-col max-w-[1240px]  xl:flex-row flex px-0 xl:px-[40px] w-full py-[35px] opacity-1 duration-500";
const featureSlideContent = "flex flex-col w-full xl:w-1/2 xl:pr-[100px] py-[35px]";
const featureSlideTitle = "text-gray text-[24px] mb-[16px] lg:mb-[30px]";
const featureSlideText = "w-wull text-gray text-[20px] font-thin whitespace-wrap";
const featureSlideImage = "w-full xl:w-1/2 h-min bg-no-repeat rounded-xl";
