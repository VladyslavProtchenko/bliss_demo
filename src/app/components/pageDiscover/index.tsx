"use client";
import Button from "./../../components/button";
import discoverImg from "../../../../public/assets/discoverImg.png";
import { IoArrowForward } from "react-icons/io5";

export default function PageDiscover() {
  return (
      <section className={discover}>
        <h2 className={discoverTitle}>Get Started with Bliss</h2>
        <div className={discoverCards}>
          <div className={discoverCard}>
            <img
              src={discoverImg.src}
              alt="descover devices"
              className={discoverCardImage}
            />
            <h3 className={discoverCardTitle}>Bliss Starter Kit</h3>
            <p className={discoverCardText}>
              Experience the complete Bliss solution in a single area of your building:
            </p>
            <ul className='mb-8 pl-4 list-disc'>
              <li>1 Smart Thermostat for precise HVAC control</li>
              <li>3 Bliss Sense devices for comprehensive environmental monitoring</li>
              <li>AI-powered optimization for one zone</li>
              <li>90-day access to our full analytics dashboard</li>
            </ul>
            <div className={discoverCardFooter}>
              <Button
                title="Order the Starter Kit"
                type="orange"
                onClick={() => {}}
                className="px-[25px] py-[9px]"
              />
            </div>
          </div>

          <div className={discoverCard}>
            <img
              src={discoverImg.src}
              alt="descover devices"
              className={discoverCardImage}
            />
            <h3 className={discoverCardTitle}>
            Bliss Complete Solution
            </h3>
            <p className={discoverCardText}>
              Ready to optimize your entire building? Our full implementation includes:
            </p>
            <ul className='mb-8 pl-4 list-disc'>
              <li >AI-powered HVAC optimization across all zones</li>
              <li>Building-wide comfort management</li>
              <li>Comprehensive energy monitoring and savings</li>
              <li>Intuitive dashboard for total building control</li>
            </ul>

            <div className={discoverCardFooter}>
              <Button
                title="Get Started Today"
                type="orange"
                onClick={() => {}}
                className="px-[25px] py-[9px]"
              />
            </div>
          </div>

        </div>
      </section>
  );
}



const discover = "max-w-[1440px] px-[30px] md:px-[60px] lg:px-[100px] py-[80px]";
const discoverTitle = "font-gray text-[40px] w-full text-center mb-[40px]";
const discoverCards = "flex flex-col lg:flex-row justify-between";
const discoverCard =  "flex flex-col w-full lg:w-[48%] mb-[20px] lg:mb-0 rounded-2xl bg-bgDark p-[30px]";
const discoverCardImage = "bg-contain bg-no-repeat w-full ";
const discoverCardTitle =
  "flex items-center gap-2 text-[22px] md:text-[32px] text-gray mb-4";
const discoverCardText =
  "text-[18px] leading-[26px] font-thin text-gray mb-[30px]";
const discoverCardFooter = "flex justify-between gap-4  items-center mt-auto";
const discoverMore =
  "flex gap-[20px] font-gray text-[14px] md:text-[18px] items-center cursor-pointer";

const discoverSpan =
  " text-bgLight h-[30px] bg-green p-2 flex items-center rounded-lg  text-[14px]";
