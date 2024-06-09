'use client'
import Image from "next/image";
import logoImage from '../../../../public/assets/logoWhite.png';
import phone from '../../../../public/assets/footerPhone.png';
import mail from '../../../../public/assets/footerMail.png';
import Button from "../button";

export default function Footer() {
  return (
    <footer className={footer}>
      <section className={container}>
        <div className={row}>
          <Image alt='Bliss logo' width='70' height='35' src={logoImage} />
          <Button type='orange' title='Request a Free Consultation' onClick={()=>console.log('Book a Demo')} className='px-[24px] py-[12px] font-bold'/>
        </div>
        <div className={content}>
          <div className={coll}>
            <h2 className={mainText}>
              Bliss is lorem ipsum dolor sit amet consectetur. Porta lectus velit sed vitae lectus sagittis malesuada. Phasellus dignissim viverra in vel adipiscing habitasse. 
            </h2>
          </div>
          <div className={coll}>
            <div className="w-1/2">
              <ul className={table}>
                <li  className={tableHeader}>Solution</li>
                <li className={tableItem}>Property Managers</li>
                <li className={tableItem}>Hosts & Owners</li>
              </ul>
              <ul className={table}>
                <li className={tableHeader}>Product</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className={table}>
                <li className={tableHeader}>Resources</li>
                <li className={tableItem}>Help Center</li>
                <li className={tableItem}>Installation</li>
                <li className={tableItem}>Blog</li>
                <li className={tableItem}>Success Stories</li>
                <li className={tableItem}>Integrations</li>
                <li className={tableItem}>Partners</li>
                <li className={tableItem}>About Bliss</li>
              </ul>
            </div>
          </div>
          <div className={coll+' flex-col'}>
            <h2 className='md:hidden text-[16px] mb-[30px]'>Contacts</h2>
            <div className={contact}>
              <Image alt='Bliss logo' width='40' height='40' src={phone} />
              <p className={contactText}>+65 91301848</p>

            </div>
            <div className={contact}>
              <Image alt='Bliss logo' width='40' height='40' src={mail} />
              <p className={contactText}>Dharani@Wattif.com</p>

            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

const mainText = 'text-[16px] leading-[20px]  font-thin'
const table = ' text-[16px] mb-[38px]'
const tableHeader = 'mb-[20px] font-bold'
const tableItem = 'mb-[10px] font-thin text-[16px]'
const contact = 'flex gap-[20px] items-center mb-[30px]'
const contactText = 'font-bold text-[18px]'
const coll = 'flex w-full  md:w-[30%] text-white mb-[30px] md:mb-0'
const content = 'flex flex-col md:flex-row justify-between'

const row = 'flex w-full justify-between items-center pb-[40px] border-b-[0.5px] border-bgDark mb-[40px]'
const container = 'max-w-[1440px] flex-col flex w-full h-full items-center justify-between px-[30px] md:px-[60px] lg:px-[100px] py-[60px] '
const footer = ' w-full flex justify-center bg-green '