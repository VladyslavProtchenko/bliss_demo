export default function PageStatistic() {
  return (
      <section className={stats}>
        <div className={statsBox}>
          <h2 className={statsTitle}>
            Transforming Commercial Buildings into{" "}
            <span className="text-orange">Sustainable, Efficient</span>
          </h2>
        </div>
        <div className={statsBox}>
          <div className={statsItem}>
            <h3 className={statsItemTitle}>20%</h3>
            <p className={statsItemText}>
              Average reduction in energy consumption and costs
            </p>
          </div>
          <div className={statsItem}>
            <h3 className={statsItemTitle}>30%</h3>
            <p className={statsItemText}>
              Improvement in space utilization and efficiency
            </p>
          </div>
          <div className={statsItem}>
            <h3 className={statsItemTitle}>8.6%</h3>
            <p className={statsItemText}>
              Increase in productivity of your occupants 
            </p>
          </div>
          <div className={statsComment}>* these numbers are approximate</div>
        </div>
      </section>
  );
}

const stats =
  " bg-bgDark flex flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[100px] justify-between py-[60px]";
const statsBox = "w-full md:w-[47%]";
const statsTitle = "text-[40px] text-gray leading-[48px] mb-[40px] ";
const statsItem = "flex flex-col pb-[30px] border-b border-orange mr-[80px]";
const statsItemTitle = "text-[80px] text-gray ";
const statsItemText = "text-[20px] text-gray font-thin";
const statsComment = "text-[#838383] text-[14px] mt-[16px] font-thin";