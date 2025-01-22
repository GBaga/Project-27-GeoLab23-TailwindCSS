import Button from "../button/Button";

function OfferSection() {
  return (
    <section className="w-screen bg-neutralSilver min-h-[300px] flex justify-center items-center px-[144px] py-8 ">
      <div className="max-w-[1152px] w-full flex flex-wrap justify-between items-center flex-col gap-8  mx-auto my-0px ">
        <h2 className="max-w-[787px] min-h-[152px] font-inter text-[64px] text-center font-semibold leading-[76px] text-neutralBlack mx-auto">
          Pellentesque suscipit fringilla libero eu.
        </h2>

        <Button btnText="Get a Demo" />
      </div>
    </section>
  );
}

export default OfferSection;
