
import whyIcon from "../../../../public/assets/whyIcon.png";
import whyIcon2 from "../../../../public/assets/whyIcon2.png";
import whyImg from "../../../../public/assets/whyImg.png";

export default function PageWhy() {
  return (
      <section className={why}>
        <div className={wrapper}>
          <h2 className={whyTitle}>
            Effortless Energy Optimization for Small and Medium-Sized Buildings
            {/* Why Bliss is the <span className="text-orange">Perfect Solution</span> */}
          </h2>
          <p className={whyText}>
            Discover how Bliss empowers you to reduce energy costs, improve occupant comfort, and simplify building management with our affordable, easy-to-install smart building solution that delivers automated energy savings.
          </p>

          <div className={whyRow}>
            <div className={whyRowContent}>
              <h3 className={whyRowTitle}>
                Wireless Simplicity and Ease of Installation
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                    Bliss uses cutting-edge wireless sensors that are easy to install and require no complex wiring or infrastructure changes, making it ideal for buildings without a dedicated facilities team.
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                    Our plug-and-play approach means you can set up your system quickly, with minimal disruption to your building&lsquo;s operations, saving you time and money.
                  </p>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                  The Bliss kit comes with everything you need, including pre-configured sensors, a smart thermostat, and an intuitive mobile app for setup and control, ensuring a hassle-free experience.
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
                Intelligent Automation for Optimal Comfort and Efficiency
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                    Bliss leverages advanced algorithms and machine learning to automatically optimize your building&lsquo;s HVAC system based on real-time occupancy, weather, and environmental data, helping you strike the perfect balance between comfort and energy efficiency.
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                    By continuously analyzing your building&lsquo;s unique patterns and preferences, Bliss reduces energy waste and lowers utility bills without compromising the well-being of your occupants.
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                    With Bliss, you can create a more comfortable and productive environment for your tenants or employees, while also reducing your environmental impact and operating costs.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={whyRow}>
            <div className={whyRowContent}>
              <h3 className={whyRowTitle}>
                Occupant-Centric Comfort and Feedback
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <p className={whyRowText}>
                    Bliss prioritizes the comfort and well-being of your building&lsquo;s occupants by creating a personalized and responsive environment.
                  </p>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                    Our system actively seeks feedback from occupants through the Bliss Sense device, allowing them to express their preferences and comfort levels easily.
                  </p>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                    By continuously monitoring and analyzing occupant feedback, Bliss adapts to the unique needs and preferences of your building&lsquo;s occupants, ensuring a comfortable and productive environment.
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
                Comprehensive Monitoring and Actionable Insights
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <div className={whyRowText}>
                    Bliss provides comprehensive monitoring of your building&lsquo;s key parameters, including temperature, humidity, air quality, and occupancy levels, giving you unparalleled visibility into your building&lsquo;s performance.
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                    Our smart sensors and intelligent algorithms work together to identify potential issues and opportunities for improvement, providing you with actionable insights and recommendations that help you make data-driven decisions
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                    With the user-friendly Bliss web app, you can access real-time data, customizable dashboards, and detailed reports from anywhere, empowering you to optimize your building&lsquo;s performance and streamline your operations.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={whyRow}>
            <div className={whyRowContent}>
              <h3 className={whyRowTitle}>
                Scalable and Future-Proof
              </h3>
              <div className={whyRowItems}>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon.src})` }}
                  />
                  <p className={whyRowText}>
                    Bliss is designed to grow with your needs, offering a modular and expandable solution that can easily adapt to your building&lsquo;s unique requirements, whether you&lsquo;re managing a single property or a portfolio of buildings.
                  </p>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                  Start with the core Bliss kit and add additional sensors, controls, or features as your needs evolve, ensuring a future-proof investment that delivers long-term value.
                  </p>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <p className={whyRowText}>
                  With Bliss, you can stay ahead of the curve and take advantage of the latest smart building technologies without having to worry about compatibility issues or expensive upgrades.
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
                  Bliss is specifically designed to make smart building technology accessible and affordable for small and medium-sized buildings, which have traditionally been underserved by the market.
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                  By focusing on wireless technology, simplified installation, and user-friendly controls, Bliss eliminates the high costs and complexity associated with traditional building management systems, making it a cost-effective solution for budget-conscious building owners and managers.
                  </div>
                </div>
                <div className={whyRowItem}>
                  <div
                    className={whyRowItemImage}
                    style={{ backgroundImage: `url(${whyIcon2.src})` }}
                  />
                  <div className={whyRowText}>
                  With Bliss, you can enjoy the benefits of a smart building solution without having to invest in expensive infrastructure or hire specialized staff, allowing you to focus on your core business while we handle the rest.
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