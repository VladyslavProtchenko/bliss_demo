'use client'
import Image from "next/image";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi2";

import img1 from '../../../../public/assets/whyImage1.png'
import img2 from '../../../../public/assets/whyImage2.png'
import img3 from '../../../../public/assets/whyImage3.png'

import img4 from '../../../../public/assets/whyImage4.png'
import img5 from '../../../../public/assets/whyImage5.png'
import img6 from '../../../../public/assets/whyImage6.png'
import img7 from '../../../../public/assets/whyImage7.png'
import img8 from '../../../../public/assets/whyImage8.png'
import img9 from '../../../../public/assets/whyImage9.png'
import img10 from '../../../../public/assets/whyImage10.png'
import img11 from '../../../../public/assets/whyImage11.png'
import img12 from '../../../../public/assets/whyImage12.png'
import img13 from '../../../../public/assets/whyImage13.png'
import img14 from '../../../../public/assets/whyImage14.png'
import img15 from '../../../../public/assets/whyImage15.png'
import img16 from '../../../../public/assets/whyImage16.png'
import img17 from '../../../../public/assets/whyImage17.png'
import img18 from '../../../../public/assets/whyImage18.png'
import { useState } from "react";
import { cn } from "@/lib/cn";

const cards = [
  {
    title: 'Context-Aware Energy Optimization',
    img1: img1,
    img2: img2,
    img3: img3,
    text1: 'AI learns usage patterns to forecast and optimize power consumption',
    text2: 'Dynamically adjusts power based on real-time occupancy and schedules',
    text3: 'Eliminates phantom loads from standby devices',
  },
  {
    title: 'Streamlined Carbon Accounting',
    img1: img4,
    img2: img5,
    img3: img6,
    text1: 'Automatic, real-time data feed to your carbon management platform',
    text2: 'Precise quantification of Scope 2 emissions reductions',
    text3: 'Accelerates progress towards science-based targets and net-zero goals',
  },
  {
    title: 'Real-Time Intelligence and Remote Management',
    img1: img7,
    img2: img8,
    img3: img9,
    text1: 'Comprehensive energy consumption data across all connected devices',
    text2: 'Intuitive dashboard for easy monitoring and control',
    text3: 'Continuous analysis identifies further optimization opportunities',
  },
  {
    title: 'True Plug-and-Play Solution',
    img1: img10,
    img2: img11,
    img3: img12,
    text1: 'No alterations to existing infrastructure required',
    text2: 'Simple installation process, no specialized IT staff needed',
    text3: 'Compatible with standard office equipment and appliances',
  },
  {
    title: 'Enterprise-Grade Security',
    img1: img13,
    img2: img14,
    img3: img15,
    text1: 'Dedicated on-premise network separate from your IT infrastructure',
    text2: 'End-to-end encryption ensures data integrity',
    text3: 'Complies with industry-standard security protocols',
  },
  {
    title: 'Clear Return on Investment',
    img1: img16,
    img2: img17,
    img3: img18,
    text1: 'Solution typically pays for itself through energy savings',
    text2: 'Improves energy efficiency metrics for green building certifications',
    text3: 'Provides quantifiable emissions reduction for sustainability reporting',
  },
]

export default function PageWhy() {
  const [card, setCard] = useState<{[key:number]:boolean}>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  })

  return (
      <section className={why}>
        <div className={wrapper}>
          <h2 className={whyTitle}>
            Streamlined <span className='text-red-500'>Energy Waste</span> Elimination for <span className='text-red-500'>Modern Workplaces</span>
          </h2>
          <p className={whyText}>
            Discover how notch technology automates energy savings, enhances sustainability reporting, and simplifies plug load power management
          </p>
          <div className="flex flex-wrap justify-between items-start">
              {cards.map((item, index) =>(
                <div className={cn("w-full md:w-[49%] lg:w-[32%] flex flex-col  bg-white rounded-[40px] p-10 mb-10",)}  key={item.title}>
                  <div onClick={()=>setCard({...card, [index]:!card[index]})}  className={cn('size-10 rounded-full bg-bgDark flex items-center justify-center mb-10 cursor-pointer',{ 'bg-red-300': card[index]})}>
                    {card[index] 
                      ? <HiMinus className='text-2xl font-thin text-red-500'/>
                      : <BsPlusLg className='text-2xl font-thin '/>
                    }
                  </div>
                  <h2 className='text-[24px] leading-[28px]'>{item.title}</h2>

                  <div className={cn("pt-10 gap-[30px] hidden flex-col", {' flex ': card[index]})}>
                    <div className=" flex items-center gap-[10px]">
                      <Image width={48} height={48} alt='item icon' src={item.img1.src}></Image>
                      <p className='text-[18px] leading-[22px] font-thin'>{item.text2}</p>
                    </div>
                    <div className=" flex items-center gap-[10px]">
                      <Image width={48} height={48} alt='item icon2' src={item.img2.src}></Image>
                      <p className='text-[18px] leading-[22px] font-thin'>{item.text2}</p>
                    </div>
                    <div className=" flex items-center gap-[10px]">
                      <Image width={48} height={48} alt='item icon3' src={item.img3.src}></Image>
                      <p className='text-[18px] leading-[22px] font-thin'>{item.text3}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
  );
}
const why =
  " bg-bgDark flex justify-center w-full";
const wrapper = 'flex flex-col max-w-[1440px] px-[30px] md:px-[60px] lg:px-[100px] py-[60px]'
const whyTitle = "text-gray text-[40px] w-full  mb-[28px]";
const whyText = "w-3/5  text-[20px] mb-[60px] leading-[28px] font-thin";
const whyRow =
  "flex flex-col lg:flex-row w-full mb-[60px] justify-between items-center";
const whyRowContent = "flex w-full lg:w-[40%] flex-col";
const whyRowImage =
  "w-full lg:w-[48%] bg-cover bg-no-repeat rounded-3xl min-h-[400px] w-[48%] shadow-[0_0_200px_-100px_rgba(0,0,0,1)]";
const whyRowTitle = "text-[32px] text-gray leading-[38px] mb-[40px]";
const whyRowItems = "flex flex-col";
const whyRowItem = "flex mb-[30px] items-center";
const whyRowItemImage = "min-w-[48px] h-[48px] bg-cover bg-no-repeat ";
const whyRowText = "pl-[16px] text-[18px] text-gray leading-[22px]";