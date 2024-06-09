"use client";
import Button from "./../../components/button";
import { IoArrowForward } from "react-icons/io5";
export default function PagePricing() {
  return (
      <section className={pricing}>
        <div className={pricingHeader}>
          <div className={cardPrice}>Pricing  </div>
          <span className={solutionsLink + " sm:flex"}>
            Request a Free Consultation
            <IoArrowForward className="text-24" />
          </span>
        </div>
        <div className={pricingCards}>
          <div className={pricingCard}>
            <div>
              <h3 className={cardPrice}>$0.20</h3>
              <p className={pricingCardText}>
                Per Square Feet per Year (Starting at $5,000)
              </p>
            </div>
            <Button
              title="Calculate"
              type="orange"
              onClick={() => {}}
              className={pricingButton}
            />
          </div>

          <div className={pricingCard}>
            <div>
              <h3 className={cardPrice}>$5000</h3>
              <p className={pricingCardText}>One Time Setup Cost*</p>
            </div>
            <Button
              title="What’s included?"
              type="orange"
              onClick={() => {}}
              className={pricingButton}
            />
          </div>

          <div className={pricingCard}>
            <div>
              <h3 className={cardPrice}>90 Day</h3>
              <p className={pricingCardText}>Free Trial</p>
            </div>
            <Button
              title="Start for Free"
              type="orange"
              onClick={() => {}}
              className={pricingButton}
            />
          </div>
          <span className={solutionsLink2 + " sm:hidden"}>
            Request a Free Consultation
            <IoArrowForward className="text-24" />
          </span>
        </div>
      </section>
  );
}

const pricing =
  "flex flex-col px-[30px] md:px-[60px] lg:px-[100px] py-[80px] bg-bgDark";
const pricingHeader = "flex justify-between items-center py-[12px] mb-[40px]";
const pricingCards = "flex flex-wrap sm:justify-between";
const pricingCard =
  "flex flex-col min-w-[280px] mb-[30px] xl:mb-0 w-full sm:w-[45%] xl:w-[31%] p-[30px] bg-bgLight rounded-2xl justify-between items-start";
const cardPrice = "text-gray text-[40px] leading-[45px] mb-[16px]";
const pricingCardText =
  "text-[22px] text-gray font-thin leading-[30px] mb-[60px]";
const pricingButton = "text-[18px] px-[35px] py-[10px] ";
const solutionsLink =
  "md:flex hidden gap-[20px] font-gray text-[24px] items-center cursor-pointer";
  const solutionsLink2 =
  "md:hidden flex gap-[20px] font-gray text-[24px] items-center cursor-pointer";