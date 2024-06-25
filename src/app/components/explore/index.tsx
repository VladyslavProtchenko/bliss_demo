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
          <h1 className={title}>EXPLORE BLISS SOLUTIONS</h1>
          <div className='flex flex-col xl:flex-row gap-10 mb-10'>
            <div className={card1}>
              <div className={content}>
                <Image alt='background image' src={bgImage} width={1844} height={2896} className={img}/>
                <Image alt='background image' src={bgImageM} width={1844} height={2896} className={imgM}/>
                <h2 className={cardTitle}>Bliss Sense</h2>
                <p className={cardText}>A context aware sensing device that keeps turns building into a climate-responsive, efficient, and occupant-centric space.</p>
                <hr  className='my-[22px] opacity-50'/>
                <h3 className={cardTitle2}>Key features:</h3>
                <p className={listItem}>- Captures real-time data on temperature, humidity, air quality, and occupancy</p>
                <p className={listItem}>- Enables occupants to provide instant feedback on their comfort levels</p>
                <p className={listItem}>- Creates a comprehensive environmental profile for each zone</p>
              </div>
            </div>

            <div className={card1}>
              <Image alt='background image' src={bgImage} width={1844} height={2896} className={img}/>
              <Image alt='background image' src={bgImageM} width={1844} height={2896} className={imgM}/>
              <div className={content}>
                <h2 className={cardTitle}>Smart Thermostat</h2>
                <p className={cardText}>An easy-to-install smart thermostat that connects your existing HVAC system to the Bliss network.</p>
                <hr  className='my-[22px] opacity-50'/>
                <h3 className={cardTitle2}>Key features:</h3>
                <p className={listItem}>- Links your HVAC system to Bliss for smarter control</p>
                <p className={listItem}>- Enables remote temperature adjustments via the Bliss Platform</p>
                <p className={listItem}>- Maintains a familiar interface for basic on-site temperature control</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col xl:flex-row gap-10 mb-10'>
            <div className={card1}>
              <div className={content}>
                <Image alt='background image' src={bgImage} width={1844} height={2896} className={img}/>
                <Image alt='background image' src={bgImageM} width={1844} height={2896} className={imgM}/>
                <h2 className={cardTitle}>Bliss Genius (AI software)</h2>
                <p className={cardText}>Our intelligent software that analyzes data and optimizes your building&lsquo;s operations.</p>
                <hr  className='my-[22px] opacity-50'/>
                <h3 className={cardTitle2}>Key features:</h3>
                <p className={listItem}>- Learns your building&lsquo;s behavior to predict and optimize energy use</p>
                <p className={listItem}>- Balances energy efficiency with occupant comfort automatically</p>
                <p className={listItem}>- Factors in weather forecasts and energy prices to reduce costs</p>

              </div>
            </div>

            <div className={card1}>
              <Image alt='background image' src={bgImage} width={1844} height={2896} className={img}/>
              <Image alt='background image' src={bgImageM} width={1844} height={2896} className={imgM}/>
              <div className={content}>
                {/* <h2 className={cardTitle}>Bliss GeniusPro <span className={span}>Coming soon</span></h2> */}
                <h2 className={cardTitle}>Bliss Platform</h2>
                <p className={cardText}>Your all-in-one dashboard for monitoring and managing your building&lsquo;s performance.</p>
                <hr  className='my-[22px] opacity-50'/>
                <h3 className={cardTitle2}>Key features:</h3>
                <p className={listItem}>- Provides a clear overview of your building&lsquo;s energy use and comfort levels</p>
                <p className={listItem}>- Offers actionable recommendations to improve efficiency and reduce costs</p>
                <p className={listItem}>- Allows you to control settings and generate reports from anywhere, anytime</p>

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
