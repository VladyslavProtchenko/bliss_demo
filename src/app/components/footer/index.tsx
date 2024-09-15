'use client'
import Image from "next/image";
import Button from "../button";
import image from '../../../../public/assets/LogoFooter.png'
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className={footer}>
      <section className={container}>
        <div className={topSection}>
          <div className={left}>
            <div className='w-full lg:w-[270px] mb-4'>
              <h1 className={title}>Do you have any questions?</h1>
            </div>
            <p className={text}> Feel free to send us your questions or request a free consultation.</p>
            <Button type='orange' title='Send a message' onClick={() => window.open('https://notch-contact.paperform.co/', '_blank')} className='self-start'/>
          </div>

          <div className={right}>
            <div className={desc}>
              <div className={line} /> notch helps offices cut energy waste from idle equipment. Our intelligent devices automatically manage power at each outlet, reducing electricity bills and lowering carbon emissions while providing real-time energy insights.
            </div>
          </div>
        </div>

        <div className="flex flex-col  lg:flex-row justify-between  w-full">
          <div className={linkdInLink}>
            <a target="_blank" href='http://www.linkedin.com/company/notch-energy/' className={link}>
              <CiLinkedin className=" font-[10px] text-3xl"/>
              <div className="text-2xl">LinkedIn</div>
            </a>
          </div>

          <div className={ copyRights}>
            <Image src={"/assets/LogoFooter.png"} width='104' height='41' alt='image' className='mr-auto lg:mr-0' />
            <div className={cr}>Developed by Wattif Technologies</div>
            <div className={cr2}>© 2024 — Copyright | <a href='/privacyPolicy'>Privacy Policy</a></div>
          </div>
        </div>
      </section>
    </footer>
  )
}

const cr ="text-light font-[12px] opacity-50 lg:mb-1 lg:text-end lg:mt-[10px]"
const cr2 ="text-light font-[12px] opacity-50 lg:text-end"

const line = 'absolute border-orange w-[25px] border-2 rotate-[100deg] top-2 -left-6'
const desc ='text-light w-full  text-[16px] opacity-80 font-light relative'

const text = 'text-light text-[16px] opacity-80 font-light mb-10'
const title = 'text-light text-[40px] leading-[48px]'

const right = 'flex flex-col w-full lg:w-[48%] justify-center '
const left = 'flex flex-col w-full lg:w-[48%] mb-10 lg:mb-0'
const linkdInLink = "flex w-full mb-10 lg:mb-0 lg:w-1/3 gap-10 lg:justify-between"
const link = "flex gap-2 text-light mt-auto hover:underline cursor-pointer"
const copyRights = "flex lg:flex-col items-center lg:items-end gap-10 md:gap-0"
const topSection = 'flex  mb-[96px] justify-between flex-col lg:flex-row'
const container = 'max-w-[1440px] flex-col flex w-full h-full  px-[30px] md:px-[60px] lg:px-[100px] py-[80px] '
const footer = ' w-full flex justify-center bg-gray '