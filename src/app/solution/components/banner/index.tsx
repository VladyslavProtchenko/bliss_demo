"use client";
import Button from "./../../../components/button";
import bgImage from '../../../../../public/assets/solutionBanner.png'
import Image from "next/image";

export default function Banner() {
  return (
      <section className={discover}>
        <article className={box}>
          <div className={content}>
            <h2 className={title}>&quot;Since installing Bliss Genius, our office has seen a significant reduction in energy consumption and an increase in employee satisfaction. The device is incredibly user-friendly and provides us with valuable insights to optimize our building&apos;s performance.&quot;</h2>
            <p className={text}>Sarah, Facility Manager,<br /> XYZ Corporation</p>
            <Button
              title="Schedule a Demo of Bliss"
              type="orange"
              onClick={() => {}}
              className="px-[25px] py-[9px]"
            />
          </div>
          <div className={image}>
            <Image alt='imageof computer' src={bgImage} width={772} height={515}/>
          </div>
        </article>
      </section>
  );
}

const content = 'w-full flex flex-col items-start lg:w-1/2 p-[30px]'
const image = 'w-full lg:w-1/2 h-full'
const discover = "px-[30px] md:px-[60px] lg:px-[100px] py-[80px]";
const title = "text-bgLight text-[26px] leading-[33px] w-full  mb-[24px]";
const text = "text-[18px] text-bgLight leading-[26px] font-thin mb-[30px]";
const box = "flex flex-col lg:flex-row justify-between bg-green rounded-[30px] items-center p-[30px]";

