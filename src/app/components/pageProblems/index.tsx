"use client";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Button from "./../../components/button";
import { useState } from "react";

import image1 from "../../../../public/assets/blissCardImage1.png";
import image2 from "../../../../public/assets/blissCardImage2.png";
import image3 from "../../../../public/assets/blissCardImage3.png";
import image4 from "../../../../public/assets/blissCardImage4.png";
import { cn } from "@/lib/cn";


const problemMenu = [
  {
    title: "Invisible Plug Load Waste Inflating Carbon Footprint",
    content: "Office equipment silently consumes power even when idle, creating a significant but often overlooked source of Scope 2 emissions. This hidden energy waste can account for up to 50% of a device's total consumption, directly inflating your carbon footprint and energy costs.",
  },
  {
    title: "Granular Scope 2 Emissions Data Gap",
    content: "While many organizations track overall electricity use, they lack device-level insights crucial for accurate Scope 2 emissions reporting. This data gap hinders precise carbon accounting and makes it challenging to identify effective reduction strategies for plug loads.",
  },
  {
    title: "Untapped Plug Load Potential in Emission Reduction Strategies",
    content: "As organizations strive to meet increasingly stringent sustainability targets, they often overlook a significant opportunity: plug loads. While HVAC and lighting systems are frequently optimized, plug loads can account for up to 50% of office electricity use, representing a largely untapped source for substantial carbon reductions.",
  },
  {
    title: "Blind Spots in Device-Level Emissions Data",
    content: "Traditional energy monitoring systems provide only aggregated consumption data, creating critical blind spots in sustainability efforts. Without granular, device-level insights, organizations struggle to identify specific sources of waste, quantify the impact of reduction initiatives, and make data-driven decisions to lower their carbon footprint.",
  },
];


export default function PageProblems() {
  const [menu, setMenu] = useState<number | null>(null);
  const [card, setCard] = useState(0)

  return (
      <section className={problem}>
        <div className={problemContent}>
          <h2 className={problemTitle}>Unlock Your Building’s Hidden Potential for <span className='text-red-500'>Sustainability</span></h2>

          <ul className={problemMenuConteiner}>
            {problemMenu.map((item, index: number) => (
              <li 
                className={problemMenuItem} key={item.title}
                onClick={() => {
                  setMenu(menu === index? null : index)
                  setCard(card > 3 ? index+ 4: index)
                }}
              >
                <div className={problemMenuItemHeader}>
                  <p className={problemMenuTitle}>{item.title}</p>
                  <div className="p-2 bg-green text-white rounded-full self-start">
                    {menu === index
                      ? <GoChevronUp />
                      : <GoChevronDown />}
                  </div>
                </div>
                {menu === index && (
                  <p className={problemMenuText}>{item.content}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={cardStyle}>
          {card === 0 &&
            <div onMouseEnter={()=>setCard(4)} className={cardItemWhite}>
              <img src={image1.src} alt='image of device' width='100' height='100' className={problemImage}/>
              <h2 className='text-[64px] mb-[10px] leading-[80px]'>20-25%</h2>
              <p  className='text-[20px] mb-10 text-center font-thin'>electricity used in commercial buildings is wasted due to idle consumption.</p>
              <div className={line} />
              <p  className='text-[14px] text-[#333333] text-center font-thin'>U.S. Department of Energy</p>
            </div>}


          {card === 1 && 
            <div onMouseEnter={()=>setCard(5)} className={cardItemWhite}>
              <img src={image2.src} alt='image of device' width='100' height='100' className={problemImage}/>
              <h2 className='text-[64px] mb-[10px] leading-[80px]'>92%</h2>
              <p  className='text-[20px] mb-10 text-center font-thin'>companies express concern about the quality and accuracy of their ESG reporting data.</p>
              <div className={line} />
              <p  className='text-[14px] text-[#333333] text-center font-thin'>Deloitte</p>
            </div> }


          {card === 2 && 
          <div onMouseEnter={()=>setCard(6)} className={cardItemWhite}>
              <img src={image3.src} alt='image of device' width='100' height='100' className={problemImage}/>
              <h2 className='text-[64px] mb-[10px] leading-[80px]'>50%</h2>
              <p  className='text-[20px] mb-10 text-center font-thin'>reduction in direct building emissions needed by 2030 to achieve net-zero by 2050</p>
              <div className={line} />
              <p  className='text-[14px] text-[#333333] text-center font-thin'>McKinsey</p>
            </div>}


            {card === 3 && 
              <div onMouseEnter={()=>setCard(7)} className={cardItemWhite}>
                <img src={image4.src} alt='image of device' width='100' height='100' className={problemImage}/>
                <h2 className='text-[40px] mb-[10px]'>225,000-337,500 kWh</h2>
                <p className='text-[20px] mb-10 text-center font-thin'>potential annual energy savings with device-level monitoring </p>
                <div className={line} />
                <p  className='text-[14px] text-[#333333] text-center font-thin'>Energy and Buildings Journal</p>
              </div>}
        


          {card === 4 && 
            <div onMouseLeave={()=>setCard(0)} className={cardItemGreen}>
              <img src={image1.src} alt='image of device' width='100' height='100' className={problemImage}/>
              <h2 className='text-[40px] mb-[10px] text-bgLight text-center leading-[52px]'>60 metric tons</h2>
              <p  className='text-[20px] mb-10 text-center text-bgLight font-thin'>of CO2 emissions reduced annually through efficient plug load management</p>
              <div className={line} />
              <p  className='text-[14px] text-center text-bgLight font-thin'>Calculated for  a100,000 square feet building in Singapore</p>
            </div>}


          {card === 5 && 
            <div onMouseLeave={()=>setCard(1)}className={cardItemGreen}>
              <img src={image2.src} alt='image of device' width='100' height='100' className={problemImage}/>
              <h2 className='text-[32px] mb-[10px]  text-bgLight text-center leading-[42px]'>Enhanced Scope 2 emissions reporting accuracy</h2>
              <p  className='text-[20px] mb-10 text-center font-thin text-bgLight'>through improved granular energy data collection</p>
              <div className={line} />
              <p  className='text-[14px] ] text-center font-thin text-bgLight'>Deloitte</p>
            </div>}


          {card === 6 &&
            <div onMouseLeave={()=>setCard(2)} className={cardItemGreen}>
              <img src={image3.src} alt='image of device' width='100' height='100' className={problemImage}/>
              <h2 className='text-[32px] mb-[10px] text-bgLight text-center leading-[42px]'>Accelerated progress towards net-zero goals</h2>
              <p  className='text-[20px] mb-10 text-center font-thin text-bgLight'>by addressing overlooked areas such as plug loads</p>
              <div className={line} />
              <p  className='text-[14px]  text-center font-thin text-bgLight'>McKinsey</p>
            </div>}


          {card === 7 && 
            <div onMouseLeave={()=>setCard(3)} className={cardItemGreen}>
              <img src={image4.src} alt='image of device' width='100' height='100' className={problemImage}/>
              <h2 className='text-[40px] mb-[10px] text-bgLight text-center leading-[53px]'>60-100 metric tons </h2>
              <p  className='text-[20px] mb-10 text-center text-bgLight font-thin'>of CO2 emissions from plug load energy consumption</p>
              <div className={line} />
              <p  className='text-[14px] text-bgLight text-center font-thin'>Calculated for  a 100,000 square feet building</p>
            </div>}
        </div>
      </section>
  );
}

const line = 'w-full border-[1px] border-orange mb-10 mt-auto'

const cardStyle = 'w-full lg:w-1/2 shrink flex items-start justify-end cursor-pointer'
const cardItemGreen = 'w-[95%] max-w-[600px] text-center bg-green rounded-[40px] min-h-[480px] p-10 flex items-center flex-col '
const cardItemWhite = 'w-[95%] max-w-[600px] text-center bg-white min-h-[480px] rounded-[40px] p-10 flex items-center flex-col '
const problem =  "flex w-full max-w-[1440px] flex-col lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] py-[80px] w-full justify-between";
const problemContent = " w-full lg:w-[48%] pb-[40px] lg:pb-0";
const problemTitle = "text-[32px] font-medium text-[#333] mb-[30px]";
const problemMenuConteiner =  "flex flex-col border-b-[1px] border-[#333] mb-[30px]";
const problemMenuItem = "flex flex-col py-[36px] gap-[10px] border-t-[1px] border-[#333] cursor-pointer";
const problemMenuItemHeader = "flex justify-between";
const problemImage = "flex w-[100px] h-[100px] mb-10";
const problemMenuTitle = "text-[18px]";
const problemMenuText = "text-[18px] font-thin pr-10 mt-[30px]";

