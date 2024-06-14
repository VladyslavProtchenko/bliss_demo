"use client";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import bgImage from '../../../../../public/assets/exploreCardBg.png'
import bgImageM from '../../../../../public/assets/phoneMobile.png'
import bgImage2 from '../../../../../public/assets/exloreCardBg2.png'
import bgImage2M from '../../../../../public/assets/watchMobile.png'

export default function ExplorePage() {
  return (
      <section className={discover}>
        <h1 className={title}>Explore Bliss Kit</h1>
        <div className='flex flex-col xl:flex-row gap-10 mb-10'>
          <div className={card1}>
            <div className={content}>
              <Image alt='background image' src={bgImage} width={1844} height={2896} className={img}/>
              <Image alt='background image' src={bgImageM} width={1844} height={2896} className={imgM}/>
              <h2 className={cardTitle}>Bliss Genius</h2>
              <p className={cardText}>Bliss Genius is a machine learning powered context-aware smart building device that transforms your building into a responsive, efficient, and occupant-centric space. </p>
              <hr  className='my-[22px] opacity-50'/>
              <h3 className={cardTitle2}>Key features:</h3>
              <p className={listItem}>- Intelligent Occupancy and Ambiance Sensing</p>
              <p className={listItem}>- Improved Space Utilization and Meeting Room Efficiency</p>
              <p className={listItem}>- Identifies opportunities to reduce energy waste and optimize resource consumption</p>
              <p className={listItem}>- Promote energy awareness among employees with sustainability nudges </p>
              <div className={link}>
                Discover Bliss Genius
                <IoArrowForward className="text-24" />
              </div>
            </div>
          </div>

          <div className={card1}>
            <Image alt='background image' src={bgImage} width={1844} height={2896} className={img}/>
            <Image alt='background image' src={bgImageM} width={1844} height={2896} className={imgM}/>
            <div className={content}>
              <h2 className={cardTitle}>Bliss GeniusPro <span className={span}>Coming soon</span></h2>
              <p className={cardText}>Bliss Genius Pro is an enhanced version of our flagship device, designed for businesses seeking to maximize energy savings and optimize occupant comfort. In addition to the features of Bliss Genius, Bliss Genius Pro includes Smart Thermostats and Smart Plugs  </p>
              <hr  className='my-[22px] opacity-50'/>
              <h3 className={cardTitle2}>Key features:</h3>
              <p className={listItem}>- Automatically adjust HVAC based on occupancy using advanced ambiance sensing </p>
              <p className={listItem}>- Intelligent algorithms optimizing energy consumption without impacting occupant comfort</p>
              <p className={listItem}>- Learns occupancy patterns to intelligently turn on and off power outlets</p>
              <div className={link}>
                Discover Bliss Genius
                <IoArrowForward className="text-24" />
              </div>
            </div>
          </div>
        </div>
        <div className={card2}>
            <div className={content2}>
              <h2 className={cardTitle}>Bliss Yogi</h2>
              <p className={cardText}>The Bliss software platform provides building owners and operators with a powerful, easy-to-use dashboard to monitor, analyze, and optimize all aspects of their smart building&apos;s performance in real-time. </p>
              <hr  className='my-[22px] opacity-50'/>
              <h3 className={cardTitle2}>Key features:</h3>
              <p className={listItem}>- Real-Time Energy Data</p>
              <p className={listItem}>- Occupant Comfort Monitoring</p>
              <p className={listItem}>- Bliss Efficiency Actions</p>
              <p className={listItem}>- Remote Device Management</p>
              <p className={listItem}>- Insightful Reporting</p>
              <div className={link2}>
                Learn More about Bliss Yogi
                <IoArrowForward className="text-24" />
              </div>
            </div>
            <Image alt='background image' src={bgImage2} width={800} height={560} className={img2}/>
            <Image alt='background image' src={bgImage2M} width={220} height={220} className={img2M}/>
          </div>
      </section>
  );
}
const span = 'font-thin text-[14px] rounded-lg text-white py-1 px-3 bg-green'

const discover = "px-[30px] md:px-[60px] lg:px-[100px] py-[100px] bg-bgDark";
const card1 = "relative w-full xl:w-1/2 overflow-hidden bg-white py-[50px] px-[40px] rounded-[30px] pb-[180px]";
const card2 = " relative pb-[100px] md:pb-0 w-full overflow-hidden flex flex-col lg:flex-row overflow-hidden bg-white   rounded-[30px]";
const cardTitle = "text-[40px] mb-[22px] text-gray flex items-center gap-5";
const cardText = "text-gray text-[16px] leading-[22px] font-thin "
const cardTitle2 = "text-[24px] text-[#0d0e0f] mb-[15px]";
const listItem = "text-gray lg:w-[80%] text-[16px] leading-[22px] font-thin"
const link = "text-red-600 mt-[60px] text-[24px] flex items-center gap-5 width-min";
const link2 = "w-2/3 md:w-full text-red-600 mt-[60px] text-[24px] flex items-center gap-5 width-min";
const img = "hidden md:flex absolute bottom-0 -right-10  w-full max-w-[461px]";
const imgM = "flex md:hidden absolute bottom-0 right-0  w-full max-w-[461px]";
const img2 = "hidden xl:flex w-[70%]";
const img2M = "flex xl:hidden lg:w-[60%] w-full md:w-1/2 absolute lg:top-0 bottom-0 -right-10 h-1/2 lg:h-full ";
const content = "w-[80%] h-full flex flex-col"
const content2 = "w-full lg:w-[70%] xl:w-[60%]  flex flex-col p-[50px] "

const title = "text-[40px] text-gray text-center mb-[60px]" 
