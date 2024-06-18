import { NavLink } from "react-router-dom";
import { links } from "../constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBarLinks = ({ fill }: { fill: boolean }) => {
  return (
    <ul className="hidden lg:flex lg:items-center lg:justify-around">
      {links?.map((link) => (
        <>
          {link.child ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className={"group flex gap-2 items-center"}>
                  <span
                    className={`${
                      fill ? "text-darkgrey" : "text-white"
                    } group-hover:text-primary`}
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
                            className={
                              `${isActive
                                ? "text-primary"
                                : "text-darkgrey"} hover:text-primary`
                            }
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
                <div className={"flex items-center justify-center"}>
                  <span
                    className={
                      isActive
                        ? "text-primary"
                        : fill
                        ? "text-darkgrey"
                        : "text-white"
                    }
                  >
                    {link?.text}
                  </span>
                </div>
              )}
            </NavLink>
          )}
        </>
      ))}
    </ul>
  );
};

export default NavBarLinks;

{
  /* <NavLink to={link?.url} key={link?.id}>
              {({ isActive }) => (
                <div className={"flex gap-2 items-center"}>
                  <span
                    className={
                      isActive
                        ? "text-primary"
                        : fill
                        ? "text-darkgrey"
                        : "text-white"
                    }
                  >
                    {link?.text}
                  </span>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      isActive
                        ? "stroke-[#FF9901]"
                        : fill
                        ? "stroke-darkgrey"
                        : "stroke-white"
                    }
                  >
                    <path
                      d="M1.46631 1.24185L4.98355 4.75816L8.49987 1.24185"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </NavLink> */
}
