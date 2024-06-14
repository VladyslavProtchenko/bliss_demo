"use client";
import Button from "./../../../components/button";
import bgImage from '../../../../../public/assets/yogiComputer.png'
import Image from "next/image";

export default function Banner() {
  return (
      <section className={discover}>
        <article className={box}>
          <div className={content}>
            <h2 className={title}>Faucibus a etiam pharetra vele ultrices lorem?</h2>
            <p className={text}>With its user-friendly interface and powerful features, the Bliss Yogi platform empowers you to make informed decisions, optimize building performance, and create a comfortable, sustainable, and efficient work environment for your tenants. Experience the future of smart building management with Bliss.            </p>
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
const title = "text-bgLight text-[32px] leading-[42px] w-full  mb-[24px]";
const text = "text-[18px] text-bgLight leading-[26px] font-thin mb-[30px]";
const box = "flex flex-col lg:flex-row justify-between bg-green rounded-[30px] items-center p-[30px]";

