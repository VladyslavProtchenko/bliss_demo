"use client";
import Button from "./../../../components/button";
import { IoArrowForward } from "react-icons/io5";
export default function PagePricing() {
  return (
      <section className={pricing}>
        <div className={wrapper}>
          <div className={pricingHeader}>
            <div className={cardPrice}>Pricing</div>
            <span className={solutionsLink + " sm:flex"}>
              Request a Free Consultation
              <IoArrowForward className="text-24" />
            </span>
          </div>

          <div className={pricingCards}>

            <div className={pricingCard}>
              <div>
                <span className={span}>Get Started with</span>
                <h2 className={cardPrice}>Bliss Sense</h2>
              </div>
              <div className={cardContainer}>
                <div className={launch}>LAUNCH PRICE</div>
                <div>
                  <h3 className={cardPrice}>$649</h3>
                  <p className={pricingCardText}>
                  Per Device + 1-year Free Subscription to Bliss Yogi 
                  </p>
                </div>
                <Button
                  title="Calculate"
                  type="orange"
                  onClick={() => {}}
                  className={pricingButton}
                />
              <div className={span}>90 day risk-free trial </div>

              </div>
            </div>

            <div className={pricingCard}>
              <div>
                <span className={span}>Once You see the magic, upgrade to</span>
                <h2 className={cardPrice}>Bliss Genius Kit</h2>
              </div>
              <div className={cardContainer}>
                <div>
                  <h3 className={cardPrice}>$0.20 </h3>
                  <p className={pricingCardText}>Per Square feet per Year <br />(Includes Full-access to Bliss Yogi)</p>
                </div>
                <Button
                  title="What’s included?"
                  type="orange"
                  onClick={() => {}}
                  className={pricingButton}
                />
              <div className={span}>Save up to 30% on utility costs</div>

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

const launch ='text-[24px] font-thin'
const pricing =
  "flex justify-center w-full bg-bgDark";
const wrapper = 'flex w-full max-w-[1440px] flex-col px-[30px] md:px-[60px] lg:px-[100px] py-[80px]'
const cardContainer = 'bg-bgLight rounded p-[30px] w-full'
const span = 'text-red-500 text-[22px] mb-2 w-full'
const cardTitle = ''
const pricingHeader = "flex justify-between items-center py-[12px] mb-[40px]";
const pricingCards = "flex flex-wrap sm:justify-between";
const pricingCard = "flex flex-col min-w-[280px] mb-[30px] xl:mb-0 w-full sm:w-[49%]  justify-between items-start";
const cardPrice = "text-gray text-[40px] leading-[45px] mb-[16px]";
const pricingCardText =
  "text-[22px] text-gray font-thin leading-[30px] mb-[40px]";
const pricingButton = "text-[18px] px-[35px] py-[10px] mb-4";
const solutionsLink =
  "md:flex hidden gap-[20px] font-gray text-[24px] items-center cursor-pointer";
  const solutionsLink2 =
  "md:hidden flex gap-[20px] font-gray text-[24px] items-center cursor-pointer";