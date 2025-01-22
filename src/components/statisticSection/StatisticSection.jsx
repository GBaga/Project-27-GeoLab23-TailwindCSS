import StatisticBox from "../statisticBox/StatisticBox";

const statisticsArr = [
  {
    iconUrl: "./assets/members-icon.png",
    headingNumber: "2,245,341",
    description: "Members",
  },
  {
    iconUrl: "./assets/clubs-icon.png",
    headingNumber: "46,328",
    description: "Clubs",
  },
  {
    iconUrl: "./assets/bookings-icon.png",
    headingNumber: "828,867",
    description: "Event Bookings",
  },
  {
    iconUrl: "./assets/payments-icon.png",
    headingNumber: "1,926,436",
    description: "Payments",
  },
];

function StatisticSection() {
  return (
    <section className="w-screen bg-[rgba(245,247,250,1)] min-h-[288px] flex justify-center items-center px-[144px] py-[64px]">
      <div className="max-w-[1152px] w-full flex flex-wrap justify-between items-center  mx-auto my-0px ">
        <div className="max-w-[540px] w-full min-h-[120px]">
          <h2 className="font-inter text-[36px] font-semibold leading-[44px] text-darkGray">
            Helping a local
            <h2 className="important text-customGreen">
              business reinvent itself
            </h2>
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[24px] text-twentyFourGray mt-[8px]">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="max-w-[540px] w-full min-h-[160px] flex flex-wrap justify-between gap-y-10">
          {statisticsArr.map((stat, index) => (
            <StatisticBox
              key={index}
              iconUrl={stat.iconUrl}
              headingNumber={stat.headingNumber}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticSection;
