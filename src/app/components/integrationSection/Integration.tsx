import Image from 'next/image'

const items =[
    {title: 'Real-time Scope 2 Emissions Data', text: 'Direct API integration pushes verified energy consumption and associated emissions data to your chosen carbon accounting software in real-time.', img: '/assets/integration1.png'},
    {title: 'Automated Carbon Disclosure Reporting', text: 'Supports TCFD, CDP, and GRI reporting frameworks by providing granular, audit-ready data on energy use and emissions reductions.', img: '/assets/integration2.png'},
    {title: 'Science-Based Targets (SBTi) Alignment', text: 'Tracks progress towards your approved science-based targets by quantifying emission reductions from implemented energy efficiency measures.', img: '/assets/integration3.png'},
]

export default function Integrations() {
  return (
      <section className={section}>
        <div className={wrapper}>
            <h1 className={title}>Seamless <span className='text-red-500'>Integration</span> with Carbon Emission Tracking and Reporting Platforms</h1>
            <div className='flex flex-col lg:flex-row'>
                {items.map(item =>(
                    <div key={item.title} className={imgBox}>
                        <Image className={img} src={item.img} width={100} height={100} alt='integration icon' />
                        <h2 className={subTitle}>{item.title}</h2>
                        <p className={text}>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
  );
}

const img = 'mb-5 size-[100px]'
const subTitle ='text-2xl text-gray mb-4'
const text ='text-[18px] text-gray font-thin leading-[22px] mb-[10px]'
const title = 'text-[40px] w-full lg:w-2/3 leading-[44px] text-gray mb-[70px]'
const imgBox = "border-orange border-b lg:border-b-0 lg:border-r-2 lg:last:border-none px-[30px] py-4"
const section =" bg-bgDark flex justify-center w-full";
const wrapper = 'flex flex-col max-w-[1440px] px-[30px] md:px-[60px] lg:px-[100px] py-[60px]'
