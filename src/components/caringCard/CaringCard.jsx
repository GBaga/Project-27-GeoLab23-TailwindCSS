import React from "react";

const CaringCard = (props) => {
  return (
    <div className="max-w-[368px] min-h-[366px] relative">
      <div className="max-w-[368px] max-h-[286px]">
        <img
          src={props.photoUrl}
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="max-w-[317px] min-h[176px] rounded-lg shadow-[0px_8px_16px_0px_rgba(171,190,209,0.4)] bg-neutralSilver  p-4 mx-auto absolute bottom-0 left-[25.5px]">
        <p className="font-inter text-[20px] text-center font-semibold leading-[28px] text-mediumGray mb-6">
          {props.description}
        </p>
        <a href="#" className="">
          <button className="w-[223px] h-full flex justify-center items-center text-center font-inter text-[20px] font-semibold leading-[28px] text-brandPrimary mx-auto">
            Readmore
            <img
              className="ml-2"
              src="../src/assets/right-arrow.png"
              alt="right-arrow"
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default CaringCard;
