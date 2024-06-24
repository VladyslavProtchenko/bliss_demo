"use client";
import Button from "./../../components/button";
import discoverImg from "../../../../public/assets/discoverImg.png";
import { IoArrowForward } from "react-icons/io5";

export default function PageDiscover() {
  return (
      <section className={discover}>
        <h2 className={discoverTitle}>Discover the Bliss Kit</h2>
        <div className={discoverCards}>
          <div className={discoverCard}>
            <img
              src={discoverImg.src}
              alt="descover devices"
              className={discoverCardImage}
            />
            <h3 className={discoverCardTitle}>Bliss Sense</h3>
            <p className={discoverCardText}>
              Your building&lsquo;s eyes and ears, providing real-time occupancy data, environmental data and occupant feedback.
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
              Bliss Connect
            </h3>
            <p className={discoverCardText}>
              The intelligent bridge that transforms your existing HVAC into a smart, efficient system.
            </p>

            <div className={discoverCardFooter}>
              <span className={discoverMore}>
                Explore Features <IoArrowForward className="text-[18px]" />
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
              Bliss Hub
            </h3>
            <p className={discoverCardText}>
              The powerful brain that orchestrates your entire smart building experience.
            </p>

            <div className={discoverCardFooter}>
              <span className={discoverMore}>
              Get a Demo Today <IoArrowForward className="text-[18px]" />
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



const discover = "max-w-[1440px] px-[30px] md:px-[60px] lg:px-[100px] py-[80px]";
const discoverTitle = "font-gray text-[40px] w-full text-center mb-[40px]";
const discoverCards = "flex flex-col lg:flex-row justify-between";
const discoverCard =  "flex flex-col w-full lg:w-[32%] mb-[20px] lg:mb-0 rounded-2xl bg-bgDark p-[30px]";
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
