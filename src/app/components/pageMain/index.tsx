"use client";
import Button from "./../../components/button";
import mainBg from "../../../../public/assets/MainBg.png";

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
      <div className={blurBg}></div>
      <div className={blurBg2}></div>
      <div className={wrapper}>
        <div className={mainContent}>
          <h1 className={mainTitle}>
          Eliminate Hidden Energy Waste and CO2 Emissions in Your Buildings
          </h1>
          <p className={mainText}>
          notch offers intelligent power management devices that actively reduce your plug load energy consumption, a major contributor to Scope 2 emissions. Our devices use machine learning to optimize power delivery, eliminating standby drain and cutting both energy costs and carbon footprint.
          </p>
          <div className={mainButtons}>
            <Button title="Get Your Starter Kit" type="orange" onClick={() => window.open('https://notch-start.paperform.co/', '_blank')}  />
            <Button title="Book a Demo" type="light"  onClick={() => window.open('https://notch-demo.paperform.co/', '_blank')} />
          </div>
        </div>
      </div>
    </section>
  );
}

const wrapper = 'flex w-full max-w-[1440px] '
const main =  "relative justify-center flex w-full bg-cover bg-no-repeat overflow-hidden flex-col md:flex-row  bg-mobile sm:bg-main lg:bg-center ";
const mainContent = "  z-10 lg:w-2/3 xl:w-1/2 w-full flex flex-col px-[30px] md:px-[60px] lg:pl-[100px] xl:pr-[60px]  py-[92px] pb-[400px] lg:pb-[92px]  overflow-y-visible ";
const blurBg = "lg:block hidden absolute  -top-10 -left-10  -bottom-10 xl:w-[60%] w-[70%]  blur-[50px] bg-green";
const blurBg2 = "lg:hidden absolute  -top-10 -left-20 -right-40  h-[80%] w-[150%] blur-[50px] bg-green";
const mainTitle = "text-[38px] z-10 text-bgLight font-medium mb-[30px] leading-[46px]";
const mainText = "text-[20px] z-10 font-thin text-white mb-[30px] leading-[26px] ";
const mainButtons =  "gap-[30px] flex sm:items-start items-stetch flex-col sm:flex-row";

