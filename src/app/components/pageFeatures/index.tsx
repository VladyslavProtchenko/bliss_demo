"use client";
import { useRef, useState } from "react";
import image from "../../../../public/assets/featuresImage.svg";
import Slider from 'react-slick';
import Image from "next/image";

const featuresTabs: string[] = [
  "AI-Powered Optimizations",
  "Real-Time Energy Monitoring",
  "Secure Connectivity",
  "Scalable Energy Management",
];

const featuresCards: {title:string, text:string}[] = [
  {
    title:"Harness Machine Learning for Automatic Energy Savings", 
    text:"Our machine learning algorithms that run on every notch device analyze device usage patterns to automatically optimize energy consumption. By predicting needs and eliminating waste, this AI-driven approach can reduce plug load energy use by up to 30% and emission by up to 15%."
  },
  {
    title:"Granular Insights into Every Connected Device", 
    text:"notchHub provides a comprehensive, real-time view of your organization's energy consumption patterns. This granular information translates directly to CO2 emissions data, offering a clear picture of the Scope 2 carbon footprint from devices and appliances in your offices. The detailed insights support precise sustainability reporting and help quantify progress towards carbon reduction goals, all without requiring constant manual analysis or intervention."
  },
  {
    title:"Enterprise-Grade Security for your Infrastructure and Data", 
    text:"Notch devices are connected in a dedicated, non-cellular 5G network separate from your IT infrastructure. Data processing and machine learning run locally on devices and gateway, with only anonymized data transmitted through our secure private cloud. The notchHub accesses this data via encrypted APIs, maintaining separation between our platform and your infrastructure. This architecture guarantees robust security, privacy, and seamless integration with your systems."
  },
  {
    title:"From Single Floor to Entire Building Portfolios", 
    text:"notch technology scales effortlessly to match your organization's growth and evolving sustainability goals. Start with a single floor or deploy across your entire real estate portfolio – our system adapts seamlessly. The centralized notchHub integrates new devices instantly, allowing you to expand your energy waste reduction efforts as needed.across your office buildings worldwide."
  },
];
export default function PageFeatures() {
  const [slide, setSlide] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null)

  return (

      <section className={features}>
        <div className={wrapper}>
          <h1 className={featuresTitle}>notch: Cutting-Edge Climate Tech for Sustainable Buildings</h1>
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
              <Image
                width='615'
                height='394'
                alt="image of office"
                src={image.src}
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
