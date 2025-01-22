import React from "react";
import Button from "../button/Button";

function Section(props) {
  return (
    <section className="w-screen bg-[#fff] min-h-[433px] flex justify-center items-center px-[144px] my-[48px]">
      <div className="max-w-[1152px] w-full flex flex-wrap justify-between items-center  mx-auto my-0px ">
        <div>
          <img src={props.imgUrl} alt="image" />
        </div>
        <div className="max-w-[657px] min-h-[276px]">
          <h2 className="font-inter text-[36px] font-semibold leading-[44px] text-darkGray">
            {props.heading}{" "}
          </h2>
          <p className="font-inter text-[14px] font-normal leading-[20px] text-mediumGray mt-[16px] mb-[32px]">
            {props.description}
          </p>
          <Button btnText="Learn More" />
        </div>
      </div>
    </section>
  );
}

export default Section;
