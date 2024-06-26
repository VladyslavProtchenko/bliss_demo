
import whyIcon from "../../../../public/assets/whyIcon.png";
import whyIcon2 from "../../../../public/assets/whyIcon2.png";
import whyImg from "../../../../public/assets/whyImg.png";

export default function PageWhy() {
  return (
      <section className={why}>
        <div className={wrapper}>
          <h2 className={whyTitle}>
            Effortless Energy Optimization for Small and Medium-Sized Buildings
            
          </h2>
          <p className={whyText}>
          Discover how Bliss empowers you to delivers automated energy savings , enhance occupant comfort, and simplify building management User-friendly app allows tenants to report comfort levels for immediate adjustments
          </p>

          <div className={whyRow}>
            <div className={whyRowContent}>
              <h3 className={whyRowTitle}>
              Intelligent Automation for Optimal Comfort and Efficiency
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                    Machine learning driven system optimizes HVAC and plug loads, cutting energy costs by up to 30%
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                    Intelligently manages heating, cooling based on occupancy, weather, and energy prices
                  </p>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <p className={whyRowText}>
                    Automatically turns of unused power outlets to reduce energy waste
                  </p>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                    Improves tenant comfort while reducing carbon footprint and operating costs
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
              Affordable and Accessible for Small and Medium-Sized Buildings
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                    Transform your property with enterprise-level IoT technology at a fraction of traditional costs
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                  Solution pays for itself through energy savings, thanks to our innovative pricing model                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                  No expensive infrastructure overhauls or specialized staff needed                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={whyRow}>
            <div className={whyRowContent}>
              <h3 className={whyRowTitle}>
              Occupant-Centric Comfort and Context-Aware Optimization
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <p className={whyRowText}>
                  Bliss Sense devices feature intuitive e-ink displays for instant occupant comfort feedback                  </p>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                  Privacy-preserving occupancy detection optimizes comfort and space utilization without compromising individual privacy                  </p>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <p className={whyRowText}>
                  System continuously adapts to occupant preferences, improving comfort and satisfaction                  </p>
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
              Wireless Simplicity and Rapid Installation**
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                  True plug-and-play setup with pre-commissioned, clearly labeled devices                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                  Customized installation guide designed for your specific office space or building
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                  Zero disruption with quick, user-friendly installation process
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={whyRow}>
            <div className={whyRowContent}>
              <h3 className={whyRowTitle}>
              Comprehensive Monitoring and Actionable Insights
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <p className={whyRowText}>
                  Access real-time building performance data through an intuitive dashboard
                  </p>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                  Easily control thermostats and smart plugs from anywhere, anytime 
                  </p>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <p className={whyRowText}>
                  Receive proactive maintenance alerts to prevent issues before they impact operations
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
              Scalable and Future-Proof Solution
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                  Flexible and modular solution that adapts to your office space, single floor, or entire building
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                  Start small and expand as needed, growing with your business
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                  Regular Over-the-Air (OTA) updates ensure continuous performance enhancement and regulatory compliance, 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
const why =
  " bg-bgDark flex justify-center w-full";
const wrapper = 'flex flex-col max-w-[1440px] px-[30px] md:px-[60px] lg:px-[100px] py-[60px]'
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