import Image from 'next/image'
import image from '../../../../public/assets/integration1.png'
import image2 from '../../../../public/assets/integration2.png'
import image3 from '../../../../public/assets/integration3.png'

const items =[
    {title: 'Real-time Scope 2 Emissions Data', text: 'Direct API integration pushes verified energy consumption and associated emissions data to your chosen carbon accounting software in real-time.', img: image},
    {title: 'Automated Carbon Disclosure Reporting', text: 'Supports TCFD, CDP, and GRI reporting frameworks by providing granular, audit-ready data on energy use and emissions reductions.', img: image2},
    {title: 'Science-Based Targets (SBTi) Alignment', text: 'Tracks progress towards your approved science-based targets by quantifying emission reductions from implemented energy efficiency measures.', img: image3},
]

export default function Integrations() {


  return (
      <section className={section}>
        <div className={wrapper}>
            <h1 className='text-[40px] w-2/3 leading-[44px] text-gray mb-[70px]'>Seamless <span className='text-red-500'>Integration</span> with Carbon Emission Tracking and Reporting Platforms</h1>
            <div className='flex flex-col md:flex-row'>
                {items.map(item =>(
                    <div key={item.title} className="border-orange border-b md:border-b-0 md:border-r-2 md:last:border-none px-[30px] py-4">
                        <Image className='mb-5' src={item.img.src} width={100} height={100} alt='integration icon' />
                        <h2 className='text-[18px] text-gray mb-4'>{item.title}</h2>
                        <p className='text-[18px] text-gray font-thin leading-[22px] mb-[10px]'>{item.text}</p>
                    </div>
                ))
                }
            </div>
        </div>
      </section>
  );
}
const section =" bg-bgDark flex justify-center w-full";
const wrapper = 'flex flex-col max-w-[1440px] px-[30px] md:px-[60px] lg:px-[100px] py-[60px]'
