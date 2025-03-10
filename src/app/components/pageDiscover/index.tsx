"use client";
import Button from "./../../components/button";

export default function PageDiscover() {
  return (
      <section className={discover}>
        <h2 className={discoverTitle}>Let&apos;s Get Started</h2>
        <div className={discoverCards}>
          <div className={discoverCard}>

            <h3 className={discoverCardTitle}>notch.Start</h3>

            <h4 className='text-[32px] text-[#333333] mb-[10px]'>$2499</h4>
            <p className={discoverCardText}>Full credit towards enterprise rollout</p>

            <div className='text-[18px] mb-5'>What&apos;s Included</div>
            <ul className='mb-8 pl-4 list-disc text-gray'>
              <li>50 notch Plugs</li>
              <li>1 notchConnect device (for network connectivity)</li>
              <li>Full access to NotchHub dashboard</li>
            </ul>

            <div className='text-[18px] mb-4'>Perfect for</div>
            <ul className='mb-8 pl-4 list-disc text-gray'>
              <li>Piloting in a single office area</li>
              <li>Evaluating impact in a specific zone of a large facility</li>
              <li>Proof of concept for enterprise-wide deployment</li>
            </ul>

            <div className='text-[18px] mb-5'>Benefits</div>
            <ul className='mb-10 pl-4 list-disc text-gray'>
              <li>Rapid proof of concept</li>
              <li>Expert-guided implementation and support</li>
              <li>Easily scalable - expand coverage as you see results</li>
            </ul>


            <div className={discoverCardFooter}>
              <Button
                title="Get Your Starter Kit"
                type="orange"
                onClick={() => window.open('https://notch-start.paperform.co/', '_blank')}
                className="px-[25px] py-[9px]"
              />
            </div>
          </div>

          <div className={discoverCard}>
            <h3 className={discoverCardTitle}>notch.Scale</h3>

            <h4 className='text-[32px] text-[#333333] mb-[10px]'>$1.99</h4>
            <p className={discoverCardText}>/ per m² / year</p>

            <div className='text-[18px] mb-4'>Enterprise-Wide Energy Waste Reduction</div>
            <ul className='mb-8 pl-4 list-disc text-gray'>
              <li>Comprehensive plug load management across your entire portfolio</li>
              <li>Real-time energy consumption and emission reporting </li>
              <li>Integration with your sustainability reporting software</li>
            </ul>

            <div className='text-[18px] mb-4'>Pricing</div>
            <ul className='mb-8 pl-4 list-disc text-gray'>
              <li>$1.99 / per m² / year (paid annually) </li>
              <li>$0.99 / per m² for Year 1 (one-time upfront)</li>
              <li>1 Year Guaranteed Payback</li>
            </ul>

            <div className='text-[18px] mb-4'>Additional services</div>
            <ul className='mb-10 pl-4 list-disc text-gray'>
              <li>Setup and installation support (one-time fee, scope-based pricing)</li>
              <li>API integration (custom quote based on complexity)</li>
            </ul>

            <div className={discoverCardFooter}>
              <Button
                title="Schedule A Demo Today"
                type="orange"
                onClick={() => window.open('https://notch-demo.paperform.co/', '_blank')}
                className="px-[25px] py-[9px]"
              />
            </div>
          </div>

        </div>
      </section>
  );
}



const discover = "max-w-[1440px] px-[30px] w-full md:px-[60px] lg:px-[100px] py-[80px]";
const discoverTitle = "font-gray text-[40px] w-full text-center mb-[40px]";
const discoverCards = "flex flex-col lg:flex-row justify-between";
const discoverCard =  "flex flex-col w-full lg:w-[48%] mb-[20px] lg:mb-0 rounded-2xl bg-bgDark p-[30px]";
const discoverCardTitle = "flex items-center gap-2 text-[40px] text-gray mb-8";
const discoverCardText = "text-[18px] leading-[22px] font-thin text-gray mb-[32px]";
const discoverCardFooter = "flex justify-between gap-4  items-center mt-auto";

