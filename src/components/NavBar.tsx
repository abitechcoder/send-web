import { Logo, LogoWhite } from "../assets";
import NavBarLinks from "./NavBarLinks";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ fill = true }: { fill?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={`${
        fill ? "bg-white" : "bg-transparent"
      } flex justify-between lg:grid lg:grid-cols-[200px_1fr_150px] items-center gap-10 py-4 z-50`}
    >
      <NavLink to={"/"} className="hover:cursor-pointer">
        <img
          src={fill ? Logo : LogoWhite}
          alt="Logo Image"
          className="h-[50px] lg:h-[60px] object-contain"
        />
      </NavLink>
      <NavBarLinks fill={fill} isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex items-center justify-between gap-8 lg:gap-0">
        <Link to={"/donate"}>
          <div className="py-[10px] px-[20px] bg-secondary text-white hidden lg:block">
            Donate
          </div>
        </Link>

        <NavLink to="/search">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${fill ? "stroke-darkgrey" : "stroke-white"}`}
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 22L20 20"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className={`w-8 h-8 lg:hidden hover:cursor-pointer ${
            fill ? "fill-black" : "fill-white"
          }`}
          onClick={() => setIsOpen(true)}
          fill=""
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
    </nav>
  );
};

export default NavBar;
