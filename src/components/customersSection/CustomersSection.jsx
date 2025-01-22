const clients = [
  { logoUrl: "./assets/client1-icon.png", href: "#" },
  { logoUrl: "./assets/client2-icon.png", href: "#" },
  { logoUrl: "./assets/client3-icon.png", href: "#" },
  { logoUrl: "./assets/client4-icon.png", href: "#" },
  { logoUrl: "./assets/client5-icon.png", href: "#" },
  { logoUrl: "./assets/client6-icon.png", href: "#" },
];

function CustomersSection() {
  return (
    <section className="w-screen bg-[#fff] min-h-[390px] flex justify-center items-center px-[144px] py-8">
      <div className="max-w-[1152px] w-full flex flex-wrap justify-between items-center  mx-auto my-0px ">
        <div>
          <img
            className="max-w-[326px] max-h-[326px]"
            src="../src/assets/tesla-logo-image.png"
            alt="image"
          />
        </div>
        <div className="max-w-[748px] min-h-[276px]">
          <p className="w-full min-h-[168px] flex flex-wrap flex-col font-inter text-[16px] font-normal leading-[24px] text-mediumGray">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className="font-inter text-[20px] font-semibold leading-[28px] text-customGreen mt-4 mb-2">
            Tim Smith
          </p>
          <p className="font-inter text-[16px] font-normal leading-[24px] text-neutralGrey">
            British Dragon Boat Racing Association
          </p>
          <div className="w-full min-h-[48px] flex flex-wrap justify-between items-center mt-8">
            {clients.map((logo, index) => (
              // eslint-disable-next-line react/jsx-key
              <>
                <a href={logo.href}>
                  <img key={index} src={logo.logoUrl} alt="client-logo" />
                </a>
              </>
            ))}
            <a
              href="#"
              className="w-[223px] h-full flex justify-between items-center font-inter text-[20px] font-semibold leading-[28px] text-brandPrimary"
            >
              Meet all customers
              <img src="../src/assets/right-arrow.png" alt="right-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomersSection;
