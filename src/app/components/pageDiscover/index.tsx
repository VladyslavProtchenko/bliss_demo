"use client";
import Button from "./../../components/button";
import discoverImg from "../../../../public/assets/discoverImg.png";
import { IoArrowForward } from "react-icons/io5";

export default function PageDiscover() {
  return (
      <section className={discover}>
        <h2 className={discoverTitle}>Discover Bliss Genius and GeniusPro </h2>
        <div className={discoverCards}>
          <div className={discoverCard}>
            <img
              src={discoverImg.src}
              alt="descover devices"
              className={discoverCardImage}
            />
            <h3 className={discoverCardTitle}>Bliss Genius</h3>
            <p className={discoverCardText}>
              Perfect for offices looking to optimize space utilization, gain
              energy consumption insights, and improve occupant experience.
            </p>
            <div className={discoverCardFooter}>
              <span className={discoverMore}>
                Learn More <IoArrowForward className="text-[18px]" />
              </span>
              <Button
                title="Buy"
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
              Bliss GeniusPro <span className={discoverSpan}>Coming Soon</span>
            </h3>
            <p className={discoverCardText}>
              Perfect for offices looking to optimize space utilization, gain
              energy consumption insights, and improve occupant experience.
            </p>

            <div className={discoverCardFooter}>
              <span className={discoverMore}>
                Learn More <IoArrowForward className="text-[18px]" />
              </span>
              <Button
                title="Buy"
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



const discover = "px-[30px] md:px-[60px] lg:px-[100px] py-[80px]";
const discoverTitle = "font-gray text-[40px] w-full text-center mb-[40px]";
const discoverCards = "flex flex-col lg:flex-row justify-between";
const discoverCard =
  " w-full lg:w-[48%] mb-[20px] lg:mb-0 rounded-2xl bg-bgDark p-[30px]";
const discoverCardImage = "bg-contain bg-no-repeat w-full ";
const discoverCardTitle =
  "flex items-center gap-2 text-[22px] md:text-[32px] text-gray mb-4";
const discoverCardText =
  "text-[18px] leading-[26px] font-thin text-gray mb-[30px]";
const discoverCardFooter = "flex justify-between items-center";
const discoverMore =
  "flex gap-[20px] font-gray text-[14px] md:text-[18px] items-center cursor-pointer";

const discoverSpan =
  " text-bgLight h-[30px] bg-green p-2 flex items-center rounded-lg  text-[14px]";
