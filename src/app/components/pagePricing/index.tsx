"use client";
import Button from "./../../components/button";
import { IoArrowForward } from "react-icons/io5";
export default function PagePricing() {
  return (
      <section className={pricing}>
        <div className={wrapper}>
          <div className={pricingHeader}>
            <div className={cardPrice}>Pricing</div>
          </div>

          <div className={pricingCards}>

            <div className={pricingCard}>
              

              <div className={cardContainer}>
                <h2 className={label}>Starter Kit</h2>
                <div>
                  <h3 className={cardPrice}>$299</h3>
                  <p className={pricingCardText}>
                    One Starter Kit
                  </p>
                  <ul className='mb-8 list-disc pl-6 text-xs text-zinc-500'>
                    <li >Starts at $2000</li>
                    <li>Includes all devices and setup costs</li>
                  </ul>
                </div>
                <Button
                  title="Calculate"
                  type="orange"
                  onClick={() => {}}
                  className={pricingButton}
                />

              </div>
            </div>

            <div className={pricingCard}>

              <div className={cardContainer}>
                <div>
                  <h3 className={cardPrice}>$0.20 </h3>
                  <p className={pricingCardText}>Per Square feet per Year </p>
                  <ul className='mb-8 list-disc pl-6 text-xs text-zinc-500'>
                    <li >Includes: 2 Bliss Sense devices, 1 smart thermostat, 3 Smart Plugs</li>
                    <li>AI optimization for one zone with full access to Bliss Platform</li>
                    <li>If you chose to upgrade to Bliss Harmony Suite, the $299 applies to your first month biling</li>
                  </ul>
                </div>
                <Button
                  title="Order a Evaluation Kit"
                  type="orange"
                  onClick={() => {}}
                  className={pricingButton}
                />

              </div>
              </div>

              <div className={pricingCard}>

              <div className={cardContainer}>
                <div>
                  <h3 className={cardPrice}>90 days </h3>
                  <p className={pricingCardText}>Free trial</p>
                  <ul className='mb-8 list-disc pl-6 text-xs text-zinc-500'>
                    <li >If not satisfied after 90 days of trying the Strater Kit, return the equipment for a full refund</li>
                    <li>No questions asked </li>
                  </ul>
                </div>
                <Button
                  title="Start for free"
                  type="orange"
                  onClick={() => {}}
                  className={pricingButton}
                />

              </div>
              </div>
            <span className={solutionsLink2 + " sm:hidden"}>
              Request a Free Consultation
              <IoArrowForward className="text-24" />
            </span>
          </div>
        </div>
      </section>
  );
}

const label ='text-[24px] absolute -top-3 right-10 bg-red-600 px-3 py-1 rounded-lg text-white'
const pricing =
  "flex justify-center w-full bg-bgDark";
const wrapper = 'flex w-full max-w-[1440px] flex-col px-[30px] md:px-[60px] lg:px-[100px] py-[80px]'
const cardContainer = ' relative bg-bgLight rounded p-[30px] w-full rounded-xl h-full flex flex-col items-start'
const span = 'text-red-500 text-[22px] mb-2 w-full'
const pricingHeader = "flex justify-between items-center py-[12px] mb-4";
const pricingCards = "flex flex-wrap sm:justify-between";
const pricingCard = "flex  flex-col min-w-[280px] mb-[30px] xl:mb-0 w-full sm:w-[32%]  justify-between items-start";
const cardPrice = "text-gray text-[40px] leading-[45px] mb-[16px]";
const pricingCardText =
  "text-[22px] text-gray font-thin leading-[30px] mb-4";
const pricingButton = "text-[18px] px-[35px] py-[10px] mb-4 mt-auto";
const solutionsLink =
  "md:flex hidden gap-[20px] font-gray text-[24px] items-center cursor-pointer";
  const solutionsLink2 =
  "md:hidden flex gap-[20px] font-gray text-[24px] items-center cursor-pointer";