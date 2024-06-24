
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
              Simplified HVAC Management
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                  Automate HVAC operations with AI-driven controls and scheduling
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                  Reduce manual interventions with remote monitoring and adjustment capabilities
                  </p>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                  Receive real-time alerts for equipment issues, enabling proactive maintenance
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
              Enhanced Occupant Satisfaction
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                  Maintain consistent comfort levels across all zones with intelligent temperature control
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                  Quickly respond to occupant complaints with granular space-by-space monitoring
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                  Improve indoor air quality with automated ventilation optimization
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={whyRow}>
            <div className={whyRowContent}>
              <h3 className={whyRowTitle}>
              Energy Efficiency and Cost Savings
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                  Achieve up to 30% energy savings through AI-optimized HVAC operations
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                  Identify and eliminate energy waste with detailed consumption analytics
                  </p>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                  Justify equipment upgrades with data-driven ROI calculations
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
              Streamlined Reporting and Compliance
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                  Generate comprehensive reports on energy usage, comfort metrics, and system performance
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                  Easily track and document compliance with building codes and regulations
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                  Benchmark performance across multiple properties for continuous improvement
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