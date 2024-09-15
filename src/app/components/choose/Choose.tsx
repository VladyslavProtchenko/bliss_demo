import Image from 'next/image'; 

export default function Choose() {
  return (
      <section className={discover}>
        <h2 className={discoverTitle}>Why choose notch?</h2>
        <div className={discoverCards}>
          <div className={discoverCard}>
            <Image alt='image' width='100' height='100' src='/assets/choose1.png' />
            <h3 className={discoverCardTitle}>Impact</h3>
            <p className={discoverCardText}>notch reduces Scope 2 emissions in your real estate portfolio by up to 20% and cuts energy costs by up to 30%. This approach accelerates progress towards your corporate sustainability goals, providing tangible environmental results..</p>
          </div>

          <div className={discoverCard}>
            <Image alt='image' width='100' height='100' src='/assets/choose2.png' />
            <h3 className={discoverCardTitle}>Intelligent</h3>
            <p className={discoverCardText}>Our ML-powered devices learn and adapt to your usage patterns, improving power delivery across facilities in real-time. notch eliminates standby waste without disrupting operations, ensuring energy savings while maintaining productivity.</p>
          </div>          
          
          <div className={discoverCard}>
            <Image alt='image' width='100' height='100' src='/assets/choose3.png' />
            <h3 className={discoverCardTitle}>Secured</h3>
            <p className={discoverCardText}>notch uses a dedicated network separate from your IT infrastructure. End-to-end encryption ensures data integrity and cybersecurity. Our enterprise-grade protection safeguards your energy data while enabling reliable management.</p>
          </div>
        </div>
      </section>
  );
}

const discover = "max-w-[1440px] px-[30px] md:px-[60px] lg:px-[100px] py-[80px]";
const discoverTitle = "font-gray text-[40px] w-full text-center mb-[40px]";
const discoverCards = "flex flex-col lg:flex-row justify-between";
const discoverCard =  "flex flex-col w-full lg:w-[32%] mb-[20px] lg:mb-0 rounded-2xl bg-bgDark p-[30px] pb-[60px]";
const discoverCardTitle = "flex items-center gap-2 text-[40px] text-gray mb-10";
const discoverCardText = "text-[22px] leading-[30px] font-thin text-gray";

