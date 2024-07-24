import { NavLink } from "react-router-dom";
import { links } from "../constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logo } from "../assets";

const NavBarLinks = ({
  fill,
  isOpen,
  setIsOpen,
}: {
  fill: boolean;
  isOpen: boolean;
  setIsOpen: any;
}) => {
  return (
    <ul
      className={`${
        isOpen
          ? "fixed top-0 left-0 w-full h-screen flex flex-col gap-4 bg-white p-4 z-50"
          : "hidden"
      } lg:flex lg:items-center lg:justify-around`}
    >
      <div className="lg:hidden flex items-center justify-between">
        <img
          src={Logo}
          alt="Logo Image"
          className="h-[50px] lg:h-[70px]"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className={`w-8 h-8 lg:hidden hover:cursor-pointer fill-black"`}
          onClick={() => setIsOpen(false)}
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
      {links?.map((link) => (
        <div key={link?.id}>
          {link.child ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className={"group flex gap-2 items-center"}>
                  <span
                    className={`${
                      isOpen
                        ? "text-darkgrey"
                        : fill
                        ? "text-darkgrey"
                        : "text-white"
                    } group-hover:text-primary text-sm`}
                  >
                    {link?.text}
                  </span>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      fill ? "stroke-darkgrey" : "stroke-white"
                    } group-hover:stroke-primary`}
                  >
                    <path
                      d="M1.46631 1.24185L4.98355 4.75816L8.49987 1.24185"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {link.child.map((children) => (
                  <DropdownMenuItem key={children.id}>
                    <NavLink to={children?.url}>
                      {({ isActive }) => (
                        <div className={"flex items-center justify-center"}>
                          <span
                            className={`${
                              isActive ? "text-primary" : "text-darkgrey"
                            } hover:text-primary text-sm`}
                          >
                            {children?.text}
                          </span>
                        </div>
                      )}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <NavLink to={link?.url} key={link?.id}>
              {({ isActive }) => (
                <div className={"lg:flex lg:items-center lg:justify-center"}>
                  <span
                    className={` text-sm
                      ${
                        isActive
                          ? "text-primary"
                          : isOpen
                          ? "text-darkgrey"
                          : fill
                          ? "text-darkgrey"
                          : "text-white"
                      }
                    `}
                  >
                    {link?.text}
                  </span>
                </div>
              )}
            </NavLink>
          )}
        </div>
      ))}
    </ul>
  );
};

export default NavBarLinks;
