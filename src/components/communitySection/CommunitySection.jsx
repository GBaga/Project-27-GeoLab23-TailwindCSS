import CommunityCard from "../communityCard/CommunityCard";

const communityArr = [
  {
    iconUrl: "./assets/membership-icon.png",
    heading: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    iconUrl: "./assets/associations-icon.png",
    heading: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    iconUrl: "./assets/groups-icon.png",
    heading: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

function CommunitySection() {
  return (
    <section className="w-screen bg-[#fff] min-h-[288px] flex justify-center items-center px-[144px]">
      <div className="max-w-[1152px] w-full flex flex-col justify-between items-center mx-auto my-0px">
        <h2 className="max-w-[542px] font-inter text-[36px] font-semibold leading-[44px] text-darkGray text-center">
          Manage your entire community in a single system
        </h2>
        <p className="font-inter text-[16px] font-normal leading-[24px] text-mediumGray mt-2 mb-4">
          Who is Nextcent suitable for?
        </p>
        <div className="w-full min-h-[280px] flex flex-wrap justify-between items-center ">
          {communityArr.map((card, index) => (
            <CommunityCard
              key={index}
              iconUrl={card.iconUrl}
              heading={card.heading}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
