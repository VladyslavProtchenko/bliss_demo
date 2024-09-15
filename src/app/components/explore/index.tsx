"use client";
import Image from "next/image";


const cards =[
  {image: '/assets/explore1.png', w:3172, h:1920, title: 'notchPlug', text: 'Single-outlet device powered by machine learning to identify connected devices, learn usage and cut power when not needed.'},
  {image: '/assets/explore2.svg', w:6000, h:3375, title: 'notchHub', text: 'Central dashboard that collects data from all Notch devices, displays real-time energy use and savings, and reports emission savings to carbon accounting platforms.'},
]


export default function ExplorePage() {
  return (
      <section className={discover}>
        <div className={wrapper}>
          <h1 className={title}>Our Technology: Powered by Machine Learning</h1>

          <div className={box}>
            {cards.map(item =>(
              <div className={card} key={item.title}>
                <div className={content}>
                  <h2 className={cardTitle}>{item.title}</h2>
                  <p className={cardText}>{item.text}</p>
                  <div className={img}>
                    <Image alt='background image' src={item.image} width={item.w} height={item.h} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

const box = 'flex flex-col xl:flex-row w-full  flex-wrap  justify-between'
const img = 'flex items-center mt-auto justify-center h-[300px] lg:h-[500px] xl:h-[350px] overflow-hidden rounded-2xl'
const discover = "flex w-full justify-center bg-bgDark";
const wrapper = 'w-full px-[30px] md:px-[60px] xl:px-[100px] py-[100px] max-w-[1440px]'
const card = "flex w-full xl:w-[48%]  mb-10 bg-white pt-[50px] pb-4 lg:pb-[35px] px-4 lg:px-[46px] rounded-[30px] hover:shadow-2xl cursor-pointer";
const cardTitle = "text-[42px] mb-[22px] text-gray";
const cardText = "text-gray text-[16px] mb-5 leading-[22px] font-thin w-full"
const content = "w-full  h-full flex flex-col"

const title = "text-[40px] text-gray text-center mb-[60px]" 
