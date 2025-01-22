function CommunityCard(props) {
  return (
    <div className="max-w-[299px] w-full min-h-[260px] p-6 ">
      <img className="mx-auto my-0" src={props.iconUrl} alt="icon" />
      <h3 className="max-w-[80%] font-inter text-[28px] font-bold leading-12 text-darkGray text-center mx-auto mt-2 mb-1">
        {props.heading}
      </h3>
      <p className="font-inter text-[16px] font-normal leading-5 text-mediumGray text-center">
        {props.description}
      </p>
    </div>
  );
}

export default CommunityCard;
