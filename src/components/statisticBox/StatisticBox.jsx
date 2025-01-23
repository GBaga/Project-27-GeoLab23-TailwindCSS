export default function StatisticBox(props) {
  return (
    <div className="min-w-[255px] min-h-[60px] flex flex-wrap justify-start items-center">
      <img
        className="mr-[16px] w-[48px] h-[48px]"
        src={props.iconUrl}
        alt="icon"
      />
      <div>
        <h3 className="font-inter text-[28px] font-bold leading-[36px] text-darkGray">
          {props.headingNumber}
        </h3>
        <p className="font-inter text-[16px] font-normal leading-[24px] text-mediumGray">
          {props.description}
        </p>
      </div>
    </div>
  );
}
