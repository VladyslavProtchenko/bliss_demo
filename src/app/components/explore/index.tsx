"use client";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import bgImage from '../../../../public/assets/exploreCardBg.png'
import bgImageM from '../../../../public/assets/phoneMobile.png'
import bgImage2 from '../../../../public/assets/exloreCardBg2.png'
import bgImage2M from '../../../../public/assets/watchMobile.png'

export default function ExplorePage() {
  return (
      <section className={discover}>
        <div className={wrapper}>
          <h1 className={title}>Intelligent Building Management, Simplified</h1>
          <div className='flex flex-col xl:flex-row gap-10 mb-10'>
            <div className={card1}>
              <div className={content}>
                <Image alt='background image' src={bgImage} width={1844} height={2896} className={img}/>
                <Image alt='background image' src={bgImageM} width={1844} height={2896} className={imgM}/>
                <h2 className={cardTitle}>Bliss Sense</h2>
                <p className={cardText}>An advanced sensing device that elevates your building&apos;s intelligence. </p>
                <hr  className='my-[22px] opacity-50'/>
                <h3 className={cardTitle2}>Key features:</h3>
                <p className={listItem}>- Monitors temperature, humidity, air quality, CO2 levels, and occupancy with precision</p>
                <p className={listItem}>- Features an intuitive e-ink display for instant occupant feedback</p>
                <p className={listItem}>- Powered by built-in solar cells for maintenance-free operation</p>
              </div>
            </div>

            <div className={card1}>
              <Image alt='background image' src={bgImage} width={1844} height={2896} className={img}/>
              <Image alt='background image' src={bgImageM} width={1844} height={2896} className={imgM}/>
              <div className={content}>
                <h2 className={cardTitle}>Bliss Connect</h2>
                <p className={cardText}>A powerful, compact gateway that brings intelligent decision-making right to your building. </p>
                <hr  className='my-[22px] opacity-50'/>
                <h3 className={cardTitle2}>Key features:</h3>
                <p className={listItem}>- Processes data on-site for instant, autonomous responses</p>
                <p className={listItem}>- Learns and adapts to your building&apos;s unique patterns over time</p>
                <p className={listItem}>- Enables intelligent decision-making at the edge</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col xl:flex-row gap-10 mb-10'>
            <div className={card1}>
              <div className={content}>
                <Image alt='background image' src={bgImage} width={1844} height={2896} className={img}/>
                <Image alt='background image' src={bgImageM} width={1844} height={2896} className={imgM}/>
                <h2 className={cardTitle}>Smart Thermostat & Smart Plugs</h2>
                <p className={cardText}>An intuitive, WiFi-enabled thermostat that seamlessly integrates with Bliss. </p>
                <hr  className='my-[22px] opacity-50'/>
                <h3 className={cardTitle2}>Key features:</h3>
                <p className={listItem}>- WiFi-enabled smart thermostat for HVAC system integration</p>
                <p className={listItem}>- Smart plugs for efficiently managing plug loads of office equipment</p>
                <p className={listItem}>- Thermostat maintains familiar interface for manual temperature adjustments</p>

              </div>
            </div>

            <div className={card1}>
              <Image alt='background image' src={bgImage} width={1844} height={2896} className={img}/>
              <Image alt='background image' src={bgImageM} width={1844} height={2896} className={imgM}/>
              <div className={content}>
                {/* <h2 className={cardTitle}>Bliss GeniusPro <span className={span}>Coming soon</span></h2> */}
                <h2 className={cardTitle}>Bliss Platform</h2>
                <p className={cardText}>Your command center for effortless building management.</p>
                <hr  className='my-[22px] opacity-50'/>
                <h3 className={cardTitle2}>Key features:</h3>
                <p className={listItem}>- Provides a clear, real-time overview of your building&lsquo;s performance </p>
                <p className={listItem}>- Enables remote control and monitoring from any device</p>
                <p className={listItem}>- Generates insightful reports to drive informed decision-making</p>

              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
const span = 'font-thin text-[14px] rounded-lg text-white py-1 px-3 bg-green'

const discover = "flex w-full justify-center bg-bgDark";
const wrapper = 'w-full px-[30px] md:px-[60px] lg:px-[100px] py-[100px] max-w-[1440px]'
const card1 = "relative w-full xl:w-1/2 overflow-hidden bg-white py-[50px] px-[40px] rounded-[30px] hover:shadow-2xl cursor-pointer";
const cardTitle = "text-[40px] mb-[22px] text-gray flex items-center gap-5";
const cardText = "text-gray text-[16px] leading-[22px] font-thin "
const cardTitle2 = "text-[24px] text-[#0d0e0f] mb-[15px]";
const listItem = "text-gray lg:w-[80%] text-[16px] leading-[22px] font-thin pr-[100px]"
const link = "text-red-600 mt-[60px] text-[24px] flex items-center gap-5 width-min";
const img = "hidden md:flex absolute bottom-0 -right-10  w-full max-w-[461px]";
const imgM = "flex md:hidden absolute  bottom-0 right-0  w-full max-w-[230px]";
const content = "w-full md:w-[60%] lg:w-[80%]  h-full flex flex-col"

const title = "text-[40px] text-gray text-center mb-[60px]" 
