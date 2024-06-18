import { Logo } from "../assets";
import NavBarLinks from "./NavBarLinks";

const NavBar = ({ fill = true }: { fill?: boolean }) => {
  return (
    <nav
      className={`${
        fill ? "bg-white" : "bg-transparent"
      } flex justify-between lg:grid lg:grid-cols-[80px_1fr_150px] items-center gap-4 py-4`}
    >
      <img
        src={Logo}
        alt="Logo Image"
        className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]"
      />
      <NavBarLinks fill={fill} />

      <div className="flex lg:items-center lg:justify-between">
        <button className="py-[10px] px-[20px] bg-secondary text-white">
          Donate
        </button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`hover:cursor-pointer hidden lg:block ${fill ? "stroke-darkgrey" : "stroke-white"}`}
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
      </div>
    </nav>
  );
};

export default NavBar;
