// import CommunityCard from "../communityCard/CommunityCard";

import CaringCard from "../caringCard/CaringCard";

const caringArr = [
  {
    photoUrl: "../src/assets/woman-image.png",
    description: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    photoUrl: "../src/assets/left-laptop-image.png",
    description:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    photoUrl: "../src/assets/right-laptop-image.png",
    description: "Revamping the Membership Model with Triathlon Australia",
  },
];

function CaringSection() {
  return (
    <section className="w-screen bg-[#fff] min-h-[506px] flex justify-center items-center px-[144px] mt-[16px] mb-[94px]">
      <div className="max-w-[1152px] w-full flex flex-col justify-between items-center mx-auto my-0px">
        <h2 className="max-w-[542px] font-inter text-[36px] font-semibold leading-[44px] text-darkGray text-center">
          Caring is the new marketing
        </h2>
        <p className="max-w-[628px] font-inter text-[16px] font-normal leading-[24px] text-center text-mediumGray mt-2 mb-4 mx-auto">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
        <div className="w-full min-h-[280px] flex flex-wrap justify-between gap-y-6 items-center mt-4">
          {caringArr.map((card, index) => (
            <CaringCard
              key={index}
              photoUrl={card.photoUrl}
              description={card.description}
            />
          ))}

          {/* {communityArr.map((card, index) => (
            <CommunityCard
              key={index}
              iconUrl={card.iconUrl}
              heading={card.heading}
              description={card.description}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default CaringSection;
