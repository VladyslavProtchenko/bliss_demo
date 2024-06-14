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
      <div className={mainContent}>
        <h1 className={mainTitle}>
          Bliss: Transforming Commercial Buildings into Sustainable, Occupant-Centric Environments
        </h1>
        <p className={mainText}>
          Bliss is a groundbreaking solution that empowers commercial buildings to automate energy savings, enhance occupant well-being, and reduce their carbon footprint.
          <br /><br />
          At the heart of Bliss is the Bliss Genius, a cutting-edge, modular, and context-aware smart building device that seamlessly integrates with the Bliss Yogi software platform to create a holistic, data-driven approach to building management.
        </p>
        <div className={mainButtons}>
          <Button title="Book a Demo" type="orange" onClick={() => {}} />
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
    </section>
  );
}

const absolute = 'w-full h-full absolute overflow-hidden'
const image = 'w-full flex items-center justify-center lg:w-1/2 h-full z-20 translate-y-[40px] lg:translate-y-[150px] lg:scale-[110%]'
const main =  "relative flex w-full bg-cover bg-no-repeat  flex-col lg:flex-row";
const mainContent = "z-10 lg:w-1/2 w-full flex flex-col  px-[30px] md:pl-[60px] lg:pl-[100px] py-[92px]  lg:pb-[92px] ";
const blurBg = " absolute  -top-10 -left-10 -right-10  -bottom-10 w-[110%] blur-[50px] bg-green";
const mainTitle = "text-[38px] z-10 text-bgLight font-medium mb-[30px] leading-[46px]";
const mainText = "text-[20px] z-10 font-thin text-white mb-[30px] leading-[26px] ";
const mainButtons =  "gap-[30px] flex sm:items-start items-stetch flex-col sm:flex-row";

