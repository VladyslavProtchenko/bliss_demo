
import whyIcon from "../../../../../public/assets/whyIcon.png";
import whyIcon2 from "../../../../../public/assets/whyIcon2.png";
import whyImg from "../../../../../public/assets/whyImg.png";

export default function PageWhy() {
  return (
      <section className={why}>
        <div className={wrapper}>
          <h2 className={whyTitle}>
            Key Features
          </h2>

          <div className={whyRow}>
            <div className={whyRowContent}>
              <h3 className={whyRowTitle}>
              Personalized Comfort Control
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                  Adjust your space&apos;s temperature to your preference through an intuitive mobile app
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                  Enjoy consistent comfort throughout your workday with AI-driven climate management
                  </p>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                  Provide instant feedback on comfort levels for rapid response from building management
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
              Enhanced Productivity
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                  Work in an optimized environment with ideal temperature, humidity, and air quality
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                  Reduce distractions from uncomfortable temperatures or poor air quality
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                  Collaborate more effectively in meeting rooms with automatically adjusted comfort settings
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={whyRow}>
            <div className={whyRowContent}>
              <h3 className={whyRowTitle}>
              Energy Consciousness
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                  Contribute to sustainability efforts with AI-optimized energy usage in your space
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                  Gain visibility into your energy consumption patterns
                  </p>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                  Potentially reduce energy-related costs in your lease with more efficient HVAC operations
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
              Seamless Integration
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                  Experience non-disruptive installation and operation of the Bliss system
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                  Enjoy the benefits of a smart building without changing your daily routines
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                  Access an easy-to-use interface for interaction with your workspace environment
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}
const wrapper = 'w-full max-w-[1440px] px-[30px] md:px-[60px] lg:px-[100px] py-[60px] flex flex-col'
const why =
  "w-full flex justify-center bg-bgDark ";
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