'use client'
import { useState } from 'react';
import useOnclickOutside from "react-cool-onclickoutside";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";

import logoImage from '../../../../public/assets/logo.svg'
import Button from '../button';
import Image from 'next/image';
import Link from 'next/link';

const productMenu =[
  {title: 'Bliss Genius', href:'/genius',  text: 'Perfect for offices looking to optimize space utilization, gain energy consumption insights, and improve occupant experience.'},
  {title: 'Bliss GeniusPro (Coming Soon) ',href:'/', text: 'Ideal for businesses seeking advanced temperature control, enhanced energy savings, and predictive HVAC maintenance.'},
  {title: 'Bliss Yogi (Platform) ',href:'/yogi', text: 'The ultimate solution for organizations prioritizing superior air quality, maximum energy efficiency, and proactive building management.'},
]

const solutionMenu =[
  {title: 'Building Owners and Operators', href:'/owners',  text: 'Maximize property value and ROI with smart energy management and enhanced tenant satisfaction'},
  {title: 'Facility Managers',href:'/managers', text: 'Streamline operations, reduce maintenance headaches, and improve building performance effortlessly.'},
  {title: 'Tenants',href:'/tenants', text: 'Experience enhanced comfort and contribute to sustainability inyour workspace.'},
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  const ref = useOnclickOutside(() => setOpen(false));
  const ref2 = useOnclickOutside(() => setOpen2(false));
    return (
      <header className={header}>
        <div className={wrapper}>
          <Image alt='Bliss logo' width='100' height='100' src={logoImage} className='cursor-pointer w-[150px] mt-4'/>

          {/* <div className={menu}>
              <div className={nemuItem} ref={ref} onClick={()=>setOpen(!open)}>
                Solution
                {open ? <GoChevronUp /> :<GoChevronDown />}
                <div className={open ? submenu: 'hidden'}>
                  {solutionMenu.map(item=>
                    <Link href={item.href} className={subItem} key={item.title}>
                      <h3 className={subHeader}>{item.title}</h3>
                      <p className={subText}>{item.text}</p>
                    </Link>
                  )}
                </div>
              </div>
              <div className={nemuItem} ref={ref2} onClick={()=>setOpen2(!open2)}>
                Product
                {open2 ? <GoChevronUp /> :<GoChevronDown />}
                <div className={open2 ? submenu: 'hidden'}>
                  {productMenu.map(item=>
                    <Link href={item.href} className={subItem} key={item.title}>
                      <h3 className={subHeader}>{item.title}</h3>
                      <p className={subText}>{item.text}</p>
                    </Link>
                  )}
                </div>
              </div>


            <Link href='/' className={nemuItem}>Resourses</Link>
          </div> */}
          
          <nav className={buttons}>
            {/* <Button type='outline' title='Sign In' onClick={()=>console.log('Sign In')} className='px-[36px] py-[10px]'/> */}
            <Button type='orange' title='Book a Demo'onClick={() => window.open('https://notch-demo.paperform.co/', '_blank')} className='px-[36px] py-[10px]'/>
          </nav>
          <RxHamburgerMenu className='text-[48px] md:hidden'/>
        </div>
      </header>
    )
  }


const wrapper = 'max-w-[1440px] flex w-full h-full items-center justify-between px-[40px] lg:px-[100px] '
const header = 'h-[80px] w-full flex justify-center '
const buttons = ' md:flex hidden gap-5 '


const submenu = 'absolute flex  bg-bgLight flex-col top-[50px] z-20 w-[300px]'
const subItem = 'flex flex-col gap-[10px] cursor-pointer py-[15px] last:pb-[30px]  first:pt-[30px] px-[24px] hover:bg-[#eee]'
const subHeader = 'text-gray text-[16px] font-bold hover:underline'
const subText = 'text-[12px] font-light leading-[14px]'
const nemuItem = 'relative flex items-center gap-2 font-thin cursor-pointer group'
const menu = ' md:flex hidden gap-10 '