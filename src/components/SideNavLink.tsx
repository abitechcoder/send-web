import { Link } from "react-router-dom";
import { UsersIcon, DashboardIcon, ProjectIcon,  } from "./";
import { ReactNode } from "react";

type Link = {
  text: string,
  // icon: ReactNode,
};

const SideNavLink = (link: Link) => {
  return (
    <Link to="" className="flex items-center gap-4 py-4 px-8 group">
      {/* {link.icon} */}
      {/* <ProjectIcon className="group-hover:fill-primary group-hover:stroke-primary" /> */}
      <p className="group-hover:text-primary group-hover:font-semibold text-lg font-nunito">{link?.text}</p>
    </Link>
  );
};

export default SideNavLink;
