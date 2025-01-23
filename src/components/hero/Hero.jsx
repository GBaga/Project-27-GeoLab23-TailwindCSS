import Button from "../button/Button";

function Hero() {
  return (
    <section className="w-screen bg-neutralSilver min-h-[599px] flex justify-center items-center px-[144px]">
      <div className="max-w-[1152px] w-full flex flex-wrap justify-between items-center  mx-auto my-0px ">
        <div className="max-w-[657px] min-h-[276px]">
          <h1 className="font-inter text-[64px] font-semibold leading-[76px] text-darkGray">
            Lessons and insights
            <span className="text-brandPrimary"> from 8 years</span>
          </h1>
          <p className="font-inter text-[16px] font-normal leading-[24px] text-mediumGray mt-[16px] mb-[32px]">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button btnText="Register" />
        </div>
        <div>
          <img src="./assets/hero-illustration.png" alt="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
