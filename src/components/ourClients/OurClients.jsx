const clients = [
  { logoUrl: "./assets/client1-icon.png", href: "#" },
  { logoUrl: "./assets/client2-icon.png", href: "#" },
  { logoUrl: "./assets/client3-icon.png", href: "#" },
  { logoUrl: "/assets/client4-icon.png", href: "#" },
  { logoUrl: "/assets/client5-icon.png", href: "#" },
  { logoUrl: "/assets/client6-icon.png", href: "#" },
];

function ClientsSection() {
  return (
    <section className="w-screen bg-[#fff] min-h-[190px] flex justify-center items-center px-[144px] my-10">
      <div className="max-w-[1152px] w-full flex flex-col justify-between items-center mx-auto my-0px">
        <h2 className="max-w-[542px] font-inter text-[36px] font-semibold leading-[44px] text-darkGray text-center">
          Our Clients
        </h2>
        <p className="font-inter text-[16px] font-normal leading-[24px] text-mediumGray mt-2 mb-4">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="w-full min-h-[98px] flex flex-wrap justify-between items-center ">
          {clients.map((logo, index) => (
            // eslint-disable-next-line react/jsx-key
            <a href={logo.href}>
              <img key={index} src={logo.logoUrl} alt="client-logo" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
