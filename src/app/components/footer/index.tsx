'use client'
import Image from "next/image";
import Button from "../button";
import image from '../../../../public/assets/LogoFooter.png'

export default function Footer() {
  return (
    <footer className={footer}>
      <section className={container}>
        <div className='flex lg:px-[50px] mb-[96px] flex-col lg:flex-row '>
          <div className='flex flex-col wfull lg:w-1/2 mb-10 lg:mb-0'>
            <div className='w-full lg:w-[270px] mb-4'>
              <h1 className='text-light text-[40px] leading-[48px]'>Do you have any questions?</h1>
            </div>
            <p className='text-light text-[16px] opacity-80 font-light mb-10'> Feel free to send us your questions or request a free consultation.</p>
            <Button type='orange' title='Send a message' onClick={()=>console.log('Book a Demo')} className='self-start'/>
          </div>
          <div className='flex flex-col w-full lg:w-1/2 justify-center '>

            <div className='text-light w-full lg:w-4/5 text-[16px] opacity-80 font-light relative'>
              <div className='absolute border-orange w-[25px] border-2 rotate-[100deg] top-2 -left-6' />
              Bliss is an intelligent building energy optimization and automation solution that cuts costs, boosts tenant satisfaction, and simplifies building operations.
            </div>
          </div>
        </div>

        <div className="flex flex-col  lg:flex-row justify-between lg:px-[50px] w-full">
          <div className="flex w-full mb-10 lg:mb-0 lg:w-1/3 gap-10 lg:justify-between">

            <div className="flex flex-col">
              <div className="text-light font-[10px] opacity-60 mb-3">TELEPHONE</div>
              <div className="text-light text-[14px]">+65 91301848</div>
            </div>
            <div className="div">
              <div className="text-light font-[10px] opacity-60 mb-3">EMAIL</div>
              <div className="text-light text-[14px]">Dharani@Wattif.com</div>
            </div>

          </div>

          <div className="flex lg:flex-col items-center lg:items-end gap-10 md:gap-0">
            <Image src={image.src} width='104' height='41' alt='image' className='mr-auto lg:mr-0' />
            <div className="text-light font-[12px] opacity-50 lg:mb-1 lg:text-end lg:mt-[10px]">Developed by Wattif Technologies</div>
            <div className="text-light font-[12px] opacity-50 lg:text-end">© 2024 — Copyright</div>
          </div>


        </div>

      </section>
    </footer>
  )
}


const container = 'max-w-[1440px] flex-col flex w-full h-full  px-[30px] md:px-[60px] lg:px-[100px] py-[80px] '
const footer = ' w-full flex justify-center bg-gray '