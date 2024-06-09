"use client";
import solutionImg from "../../../../public/assets/solutionImg.png";
import { IoArrowForward } from "react-icons/io5";

export default function PageSolutions() {
  return (
      <section className={solutions}>
        <div className={solutionsHeader}>
          <h2 className={solutionsTitle}>Explore Our Solutions</h2>
          <span className={solutionsLink}>
            Learn More <IoArrowForward className="text-24" />
          </span>
        </div>
        <div className={solutionsCards}>
          <div className={solutionsCard}>
            <img
              src={solutionImg.src}
              className={solutionsImage}
              alt="device image"
            />
            <p className={solutionsText}>
              <span className="text-orange">Discover</span> how Bliss helps you{" "}
              <span className="text-orange">optimize</span> energy efficiency
              and <span className="text-orange">reduce</span> operational costs.
            </p>
          </div>
          <div className={solutionsCard}>
            <img
              src={solutionImg.src}
              className={solutionsImage}
              alt="device image"
            />
            <p className={solutionsText}>
              <span className="text-orange">Learn</span> how Bliss{" "}
              <span className="text-orange">creates</span> a comfortable,
              healthy, and productive work environment.
            </p>
          </div>
          <div className={solutionsCard}>
            <img
              src={solutionImg.src}
              className={solutionsImage}
              alt="device image"
            />
            <p className={solutionsText}>
              <span className="text-orange">Find</span> out how Bliss{" "}
              <span className="text-orange">streamlines</span> your building
              management processes and{" "}
              <span className="text-orange">improves</span> efficiency.
            </p>
          </div>
          <span className={solutionsLink2}>
            Learn More <IoArrowForward className="text-24" />
          </span>
        </div>
      </section>

  );
}

const solutions =
  "flex flex-col bg-bgDark px-[30px] md:px-[60px] lg:px-[100px] py-[80px]";
const solutionsHeader = "flex justify-between mb-[34px]";
const solutionsTitle = "text-[#333] text-[40px] ";
const solutionsLink =
  "md:flex hidden gap-[20px] font-gray text-[24px] items-center cursor-pointer";
const solutionsLink2 =
  "md:hidden flex gap-[20px] font-gray text-[24px] items-center cursor-pointer";
const solutionsCards = "flex flex-col md:flex-row justify-between";
const solutionsCard = "flex flex-col w-full md:w-[32%] mb-[60px] md:mb-0";
const solutionsImage = "mb-2 h-auto w-[100%] bg-contain bg-no-repeat";
const solutionsText = "text-[20px]";
