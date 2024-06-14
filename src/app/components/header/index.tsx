'use client'
import Image from 'next/image';
import logoImage from '../../../../public/assets/Logo.png'
import Button from '../button';
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
import { useState } from 'react';

const navTabs = [
  {title:'Solution',href:'/solution' } ,
  {title:'Product',href:'/' } ,
  {title:'Resources',href:'/' } ,
]
const submenuItems =[
  {title: 'Bliss Genius', href:'/genius',  text: 'Perfect for offices looking to optimize space utilization, gain energy consumption insights, and improve occupant experience.'},
  {title: 'Bliss GeniusPro (Coming Soon) ',href:'/', text: 'Ideal for businesses seeking advanced temperature control, enhanced energy savings, and predictive HVAC maintenance.'},
  {title: 'Bliss Yogi (Platform) ',href:'/yogi', text: 'The ultimate solution for organizations prioritizing superior air quality, maximum energy efficiency, and proactive building management.'},
]

export default function Header() {
  const [open, setOpen] = useState(false)
    return (
      <header className={header}>
        <div className={wrapper}>
          <Image alt='Bliss logo' width='52' height='28' src={logoImage} className='cursor-pointer'/>

          <div className={menu}>
            {navTabs.map((item, index) => {
              return index === 1 
              ?(<div className={nemuItem} key={item.title} onClick={()=>setOpen(!open)}>
                {item.title}
                {open ? <GoChevronUp /> :<GoChevronDown />}
                <div className={open ? submenu: 'hidden'}>
                  {submenuItems.map(item=>
                    <Link href={item.href} className={subItem} key={item.title}>
                      <h3 className={subHeader}>{item.title}</h3>
                      <p className={subText}>{item.text}</p>
                    </Link>
                  )}
                </div>
              </div>)
              :(<Link href={item.href} className={nemuItem} key={item.title} >{item.title}</Link>)
            })}
          </div>
          
          <nav className={buttons}>
            <Button type='outline' title='Sign In' onClick={()=>console.log('Sign In')} className='px-[36px] py-[10px]'/>
            <Button type='orange' title='Book a Demo' onClick={()=>console.log('Book a Demo')} className='px-[36px] py-[10px]'/>
          </nav>
          <RxHamburgerMenu className='text-[48px] md:hidden'/>
        </div>
      </header>
    )
  }

const submenu = 'absolute flex  bg-bgLight flex-col top-[50px] z-20 w-[300px]'
const subItem = 'flex flex-col gap-[10px] cursor-pointer py-[15px] last:pb-[30px]  first:pt-[30px] px-[24px] hover:bg-[#eee]'
const subHeader = 'text-gray text-[16px] font-bold hover:underline'
const subText = 'text-[12px] font-light leading-[14px]'

const wrapper = 'max-w-[1440px] flex w-full h-full items-center justify-between px-[40px] lg:px-[100px] '
const header = 'h-[80px] w-full flex justify-center '
const menu = ' md:flex hidden gap-10 '
const nemuItem = 'relative flex items-center gap-2 font-thin cursor-pointer group'
const buttons = ' md:flex hidden gap-5 '