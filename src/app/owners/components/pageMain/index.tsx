"use client";
import Button from "@components/button";
import mainBg from "../../../../../public/assets/MainBg.png";
import Image from "next/image";
import bgImage from '../../../../../public/assets/computerWatch.png'
export default function PageMain() {

  return (
    <section
      className={main}
      style={{
        backgroundImage: `url(${mainBg.src})`,
        width: "100%",
        height: "100%",
      }}
    >

      <div className={absolute}>
        <div className={blurBg}></div>
      </div>
      <div className={wrapper}>
        <div className={mainContent}>
          <h1 className={mainTitle}>
            Maximize Your Building&apos;s Potential: Efficiency, Comfort, and Control at Your Fingertips
          </h1>
          <p className={mainText}>
          Transform your small or medium-sized building into a high-performing asset with Bliss - the intelligent solution that cuts energy costs, boosts tenant satisfaction, and simplifies management
          </p>
          <div className={mainButtons}>
            <Button title="Book a Personalized Demo" type="orange" onClick={() => {}} />
            <Button
              title="Request a Free Consultation"
              type="light"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className={image}>
          <Image alt='imageof computer' src={bgImage} width={772} height={515}/>
        </div>

        </div>
    </section>
  );
}

const wrapper = 'max-w-[1440px] flex w-full'
const absolute = 'w-full h-full absolute overflow-hidden'
const image = 'w-full lg:w-1/2 h-full z-20 translate-y-[40px] lg:translate-y-[100px] lg:pr-[60px]'
const main =  "relative flex w-full justify-center bg-cover bg-no-repeat  flex-col lg:flex-row";
const mainContent = "z-10  lg:w-1/2 w-full flex flex-col px-[30px] md:px-[60px] lg:px-[100px] py-[92px]  lg:pb-[92px] ";
const blurBg = " absolute  -top-10 -left-10 -right-10  -bottom-10 w-[110%] blur-[50px] bg-green";
const mainTitle = "text-[38px] z-10 text-bgLight font-medium mb-[30px] leading-[46px]";
const mainText = "text-[20px] z-10 font-thin text-white mb-[30px] leading-[26px] ";
const mainButtons =  "gap-[30px] flex sm:items-start items-stetch flex-col sm:flex-row";

