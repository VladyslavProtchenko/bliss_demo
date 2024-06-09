"use client";
import { useRef, useState } from "react";
import sliderImg from "../../../../public/assets/sliderImg.png";
import Slider from 'react-slick';

const featuresTabs: string[] = [
  "Real-Time Energy Data",
  "Occupant Comfort Monitoring",
  "Remote Device Management",
  "Bliss Efficiency Action",
  "Іnsightful Reporting",
];
export default function PageFeatures() {
  const [slide, setSlide] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null)

  return (

      <section className={features}>
        <h1 className={featuresTitle}>Key Features</h1>
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
        {[0,1,2,3,4,5].map((item, index)=>(
          
          <div className={
              index === slide ? featureSlide : 'hidden'
              }>
            <div className={featureSlideContent}>
              <h3 className={featureSlideTitle}>
                Faucibus a etiam pharetra vele ultrices lorem ({item})
              </h3>
              <div className={featureSlideText}>
                The dashboard displays live energy consumption data, allowing you
                to track usage patterns and identify opportunities for efficiency
                improvements at a glance. Visualize data through intuitive charts
                and graphs to gain valuable insights.
              </div>
            </div>
            <img
              alt="image of office"
              src={sliderImg.src}
              className={featureSlideImage}
            />
          </div>
        ))}
      </section>

  );
}


const features = "w-full bg-bgLight px-[30px] md:px-[60px] lg:px-[100px] py-[60px] ";
const featuresTitle = "w-full md:text-center text-[#333] text-[40px] mb-[60px] ";
const featuresSlider = "flex flex-wrap lg:flex-nowrap ";
const featuresSliderItem = "w-full sm:w-1/2 px-auto  text-center pb-[23px] border-b-[1px] opacity-25 cursor-pointer";
const featuresSliderItemActive = "w-full sm:w-1/2 text-center px-auto pb-[20px] border-b-[1px]  cursor-pointer border-orange border-b-[3px]";
const featureSlide = "flex-col max-w-[1240px]  xl:flex-row flex px-0 xl:px-[40px] w-full py-[35px] opacity-1 duration-500";
const featureSlideContent = "flex flex-col w-full xl:w-1/2 xl:pr-[100px] py-[35px]";
const featureSlideTitle = "text-gray text-[24px] mb-[16px] lg:mb-[30px]";
const featureSlideText = "w-wull text-gray text-[20px] font-thin whitespace-wrap";
const featureSlideImage = "w-full xl:w-1/2 h-min bg-no-repeat rounded-xl";
