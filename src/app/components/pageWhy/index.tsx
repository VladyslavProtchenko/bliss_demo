
import whyIcon from "../../../../public/assets/whyIcon.png";
import whyIcon2 from "../../../../public/assets/whyIcon2.png";
import whyImg from "../../../../public/assets/whyImg.png";

export default function PageWhy() {
  return (
      <section className={why}>
        <h2 className={whyTitle}>
          Why Bliss is the <span className="text-orange">Perfect Solution</span>
        </h2>
        <p className={whyText}>
          Bliss is a comprehensive smart building platform that combines
          advanced sensor technology, real-time occupant feedback, and
          intelligent automation to create a sustainable, efficient, and
          occupant-centric environment.
        </p>

        <div className={whyRow}>
          <div className={whyRowContent}>
            <h3 className={whyRowTitle}>
              Enhance Occupant Comfort and Well-being
            </h3>
            <div className={whyRowItems}>
              <div className={whyRowItem}>
                <div
                  className={whyRowItemImage}
                  style={{ backgroundImage: `url(${whyIcon.src})` }}
                />
                <div className={whyRowText}>
                  Bliss Genius devices actively monitor and optimize indoor
                  environmental quality factors, such as temperature, humidity,
                  and air quality, to ensure occupant comfort.
                </div>
              </div>
              <div className={whyRowItem}>
                <div
                  className={whyRowItemImage}
                  style={{ backgroundImage: `url(${whyIcon2.src})` }}
                />
                <p className={whyRowText}>
                  Real-time occupant feedback allows for personalized
                  adjustments and proactive issue resolution, leading to
                  increased satisfaction and productivity.
                </p>
              </div>
            </div>
          </div>
          <div
            className={whyRowImage}
            style={{ backgroundImage: `url(${whyImg.src})` }}
          />
        </div>

        <div className={whyRow + " flex-col-reverse"}>
          <div
            className={whyRowImage}
            style={{ backgroundImage: `url(${whyImg.src})` }}
          />
          <div className={whyRowContent}>
            <h3 className={whyRowTitle}>
              Enhance Occupant Comfort and Well-being
            </h3>
            <div className={whyRowItems}>
              <div className={whyRowItem}>
                <div
                  className={whyRowItemImage}
                  style={{ backgroundImage: `url(${whyIcon.src})` }}
                />
                <div className={whyRowText}>
                  Bliss Genius devices actively monitor and optimize indoor
                  environmental quality factors, such as temperature, humidity,
                  and air quality, to ensure occupant comfort.
                </div>
              </div>
              <div className={whyRowItem}>
                <div
                  className={whyRowItemImage}
                  style={{ backgroundImage: `url(${whyIcon2.src})` }}
                />
                <div className={whyRowText}>
                  Real-time occupant feedback allows for personalized
                  adjustments and proactive issue resolution, leading to
                  increased satisfaction and productivity.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={whyRow}>
          <div className={whyRowContent}>
            <h3 className={whyRowTitle}>
              Enhance Occupant Comfort and Well-being
            </h3>
            <div className={whyRowItems}>
              <div className={whyRowItem}>
                <div
                  className={whyRowItemImage}
                  style={{ backgroundImage: `url(${whyIcon.src})` }}
                />
                <p className={whyRowText}>
                  Bliss Genius devices actively monitor and optimize indoor
                  environmental quality factors, such as temperature, humidity,
                  and air quality, to ensure occupant comfort.
                </p>
              </div>
              <div className={whyRowItem}>
                <div
                  className={whyRowItemImage}
                  style={{ backgroundImage: `url(${whyIcon2.src})` }}
                />
                <p className={whyRowText}>
                  Real-time occupant feedback allows for personalized
                  adjustments and proactive issue resolution, leading to
                  increased satisfaction and productivity.
                </p>
              </div>
            </div>
          </div>
          <div
            className={whyRowImage}
            style={{ backgroundImage: `url(${whyImg.src})` }}
          />
        </div>
      </section>
  );
}
const why =
  "flex flex-col bg-bgDark px-[30px] md:px-[60px] lg:px-[100px] py-[60px]";
const whyTitle = "text-gray text-[40px] w-full md:text-center mb-[28px]";
const whyText =
  "w-full md:w-[60%] mx-auto md:text-center text-[20px] mb-[60px] leading-[28px] font-thin";
const whyRow =
  "flex flex-col lg:flex-row w-full mb-[60px] justify-between items-center";
const whyRowContent = "flex w-full lg:w-[40%] flex-col";
const whyRowImage =
  "w-full lg:w-[48%] bg-cover bg-no-repeat rounded-3xl min-h-[400px] w-[48%] shadow-[0_0_200px_-100px_rgba(0,0,0,1)]";
const whyRowTitle = "text-[32px] text-gray leading-[38px] mb-[40px]";
const whyRowItems = "flex flex-col";
const whyRowItem = "flex mb-[30px] items-center";
const whyRowItemImage = "min-w-[48px] h-[48px] bg-cover bg-no-repeat ";
const whyRowText = "pl-[16px] text-[18px] text-gray leading-[22px]";