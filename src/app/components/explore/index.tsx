"use client";
import Image from "next/image";
import image from '../../../../public/assets/exploreimage1.png'
import image2 from '../../../../public/assets/exploreimage2.png'
import image3 from '../../../../public/assets/exploreimage3.png'
import image4 from "../../../../public/assets/featuresImage.svg";

const cards =[
  {image: image, w:1900, h:1900, title: 'notchPlug', text: 'Single-outlet device powered by machine learning to identify connected devices, learn usage and cut power when not needed.'},
  {image: image2, w:1900, h:1900, title: 'notchStrip', text: 'Multi-outlet device that intelligently manages several connected devices, reducing energy waste during idle times.'},
  {image: image3, w:1900, h:1900, title: 'notchGateway', text: 'Central unit that coordinates all Notch devices, analyzes building-wide energy use, and sends data to Notch Hub.'},
  {image: image4, w:6000, h:3375, title: 'notchHub', text: 'Central dashboard that collects data from all Notch devices, displays real-time energy use and savings, and reports emission savings to carbon accounting platforms.'},
]


export default function ExplorePage() {
  return (
      <section className={discover}>
        <div className={wrapper}>
          <h1 className={title}>Our Devices and Software: Powered by Machine Learning</h1>

          <div className='flex w-full flex-wrap justify-between '>
            {
              cards.map(item =>(
                <div className={card} key={item.title}>
                <div className={content}>
                  <h2 className={cardTitle}>{item.title}</h2>
                  <p className={cardText}>{item.text}</p>
                  <div className='flex items-center justify-center h-[320px] overflow-hidden rounded-2xl'>
                    <Image alt='background image' src={item.image.src} width={item.w} height={item.h} />
                  </div>
                </div>
              </div>
              ))
            }
          </div>
        </div>
      </section>
  );
}

const discover = "flex w-full justify-center bg-bgDark";
const wrapper = 'w-full px-[30px] md:px-[60px] lg:px-[100px] py-[100px] max-w-[1440px]'
const card = "flex w-[600px] mb-10  bg-white pt-[50px] pb-[35px] px-[46px] rounded-[30px] hover:shadow-2xl cursor-pointer";
const cardTitle = "text-[42px] mb-[22px] text-gray";
const cardText = "text-gray text-[16px] mb-5 leading-[22px] font-thin w-full"
const content = "w-full  h-full flex flex-col"

const title = "text-[40px] text-gray text-center mb-[60px]" 
