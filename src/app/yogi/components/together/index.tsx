import Image from "next/image";
import img from '../../../../../public/assets/yogiTogetherIcon.png'

const items =[
  {title: 'Collect', text: 'Bliss Genius devices gather real-time data on occupancy, comfort, energy use, and indoor environment.'},
  {title: 'Analyze', text: 'BlissYogi uses advanced algorithms and machine learning to analyze data and uncover optimization opportunities.'},
  {title: 'Optimize', text: 'BlissYogi automatically adjusts temperature, ventilation, and energy settings based on data-driven insights. (Available with Bliss GeniusPro)'},
  {title: 'Engage', text: `Bliss Genius provides personalized comfort control and behavioral nudges for occupants. ${<br />} Real-time feedback and energy data encourage sustainable practices.`},
  {title: 'Improve', text: `Building managers use BlissYogi's dashboard to monitor performance, generate reports, and make informed decisions.`},
]
export default function Together() {
  

  return (
      <section className={container}>
        <h1 className={title}>How It All Works Together</h1>
        <ul className={list}>
          {items.map(item =>
            <li className={listItem} key={item.title}>
              <div className='flex flex-col md:flex-row items-start md:items-center gap-4 mb-4 md:mb-0 md:gap-10'>
                <Image src={img} alt={item.title} className={itemIcon} width={48} height={48}/>
                <h2 className={listTitle}>{item.title}</h2>
              </div>
              <p className={listText}>{item.text}</p>
            </li>
          )}
        </ul>
      </section>
  );
}


const title = "text-[40px] text-gray self-start mb-[50px]";
const list = "flex flex-col w-full";
const listItem = "flex flex-col md:flex-row justify-between w-full py-[30px] pr-[100px] pl-[20px] first:border-t-[1px] border-b-[1px] border-slate-600";
const itemIcon = "w-[48px] h-[48px]";
const listTitle = "text-[32px] text-gray" ;
const listText = "w-full md:w-[40%]";
const container = "py-[130px] px-[30px] md:px-[60px] lg:px-[100px]  bg-bgDark";


