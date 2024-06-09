"use client";
import Button from "./../../components/button";
import { useState } from "react";
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
      <div className={mainContent}>
        <h1 className={mainTitle}>
          Turning Office Buildings into High Performing Spaces
        </h1>
        <p className={mainText}>
          Are you struggling to create a comfortable and productive environment
          for your building occupants while also trying to reduce energy waste
          and optimize space utilization?{" "}
        </p>
        <p className={mainText2}>
          Introducing Bliss, the all-in-one solution designed to address the
          unique challenges faced by commercial building owners and managers.
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
    </section>
  );
}

const main =  "relative flex w-full bg-cover bg-no-repeat overflow-hidden flex-col md:flex-row";
const mainContent = "z-10 lg:w-2/3 xl:w-1/2 w-full flex flex-col px-[30px] md:px-[60px] lg:px-[100px] py-[92px] pb-[400px] lg:pb-[92px]  overflow-y-visible ";
const blurBg = "lg:block hidden absolute  -top-10 -left-10  -bottom-10 w-[60%] blur-[50px] bg-green";
const blurBg2 = "lg:hidden absolute  -top-10 -left-20 -right-40  h-[80%] w-[150%] blur-[50px] bg-green";
const mainTitle = "text-[38px] z-10 text-bgLight font-medium mb-[30px] leading-[46px]";
const mainText = "text-[20px] z-10 font-thin text-white mb-[30px] leading-[26px] ";
const mainText2 =  "text-[20px] z-10 font-thin text-white mb-[60px] leading-[26px] ";
const mainButtons =  "gap-[30px] flex sm:items-start items-stetch flex-col sm:flex-row";

