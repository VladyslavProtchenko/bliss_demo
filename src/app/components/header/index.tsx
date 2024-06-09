'use client'
import Image from 'next/image';
import logoImage from '../../../../public/assets/Logo.png'
import Button from '../button';
import { GoChevronDown } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";

const navTabs = ['Solution', 'Product', 'Resources'];

export default function Header() {
    return (
      <header className={header}>
        <div className={wrapper}>
          <Image alt='Bliss logo' width='52' height='28' src={logoImage} className='cursor-pointer'/>

          <div className={menu}>
            {navTabs.map((item, index) =>(
              <div className={nemuItem} key={item}>
                {item}
                {index!=1 &&<GoChevronDown />}
              </div>
            ))}
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

const wrapper = 'max-w-[1440px] flex w-full h-full items-center justify-between px-[40px] lg:px-[100px] '
const header = 'h-[80px] w-full flex justify-center '
const menu = ' md:flex hidden gap-10 '
const nemuItem = 'flex items-center gap-2 font-thin cursor-pointer'
const buttons = ' md:flex hidden gap-5 '