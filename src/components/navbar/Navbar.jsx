import Button from "../button/Button";
import "./navbar.css";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Service", href: "#" },
  { name: "Feature", href: "#" },
  { name: "Product", href: "#" },
  { name: "Testimonial", href: "#" },
  { name: "FAQ", href: "#" },
];

const Navbar = () => {
  return (
    <header className="w-screen bg-[rgba(245,247,250,1)] min-h-[84px] py-[30px] px-[96px]">
      <nav className="navbar max-w-[1215px] w-full flex justify-between">
        <div className="navbar-left  ">
          <a href="#" className="logo">
            <img src="../src/assets/Logo.png" alt="logo" />
          </a>
        </div>
        <div className="navbar-center max-w-[588px] w-full flex  ">
          <ul className="nav-links w-full flex justify-between font-inter text-[16px] font-normal leading-[24px] text-twentyFourGray">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-right w-[182px] h-[40px] flex justify-between">
          <a
            href="#"
            className="cart-icon font-inter text-[14px] font-medium leading-[20px] text-center text-[rgba(76,175,79,1)] flex items-center "
          >
            Login
          </a>
          <a href="#" className="user-icon flex w-[91px] rounded-[6px]">
            <Button btnText="Sign up" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
