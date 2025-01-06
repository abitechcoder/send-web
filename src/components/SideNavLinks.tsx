import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

// Import PNG icons
import {
  HomeIcon,
  ActiveHomeIcon,
  PartnerIcon,
  ActivePartnerIcon,
  IdentityIcon,
  ActiveIdentityIcon,
  GalleryIcon,
  ActiveGalleryIcon,
  TeamIcon,
  ActiveTeamIcon,
  ProgramIcon,
  ActiveProgramIcon,
  ReportIcon,
  ActiveReportIcon,
  RecruitmentIcon,
  ActiveRecruitmentIcon,
  TestimonialIcon,
  ActiveTestimonialIcon,
} from "../assets/icons";

// Define the type for a single navigation link
type SideNavLink = {
  id: number;
  text: string;
  icon: string;
  icon_active: string;
  url: string;
};

// Define the navigation links
const links: SideNavLink[] = [
  {
    id: 2,
    text: "Homepage",
    icon: HomeIcon,
    icon_active: ActiveHomeIcon,
    url: "/admin",
  },
  {
    id: 3,
    text: "Partner",
    icon: PartnerIcon,
    icon_active: ActivePartnerIcon,
    url: "/admin/partner",
  },
  {
    id: 4,
    text: "Identity",
    icon: IdentityIcon,
    icon_active: ActiveIdentityIcon,
    url: "/admin/identity",
  },
  {
    id: 5,
    text: "Gallery",
    icon: GalleryIcon,
    icon_active: ActiveGalleryIcon,
    url: "/admin/gallery",
  },
  {
    id: 6,
    text: "Team",
    icon: TeamIcon,
    icon_active: ActiveTeamIcon,
    url: "/admin/team",
  },
  {
    id: 7,
    text: "Program",
    icon: ProgramIcon,
    icon_active: ActiveProgramIcon,
    url: "/admin/program",
  },
  {
    id: 8,
    text: "Report",
    icon: ReportIcon,
    icon_active: ActiveReportIcon,
    url: "/admin/report",
  },
  {
    id: 10,
    text: "Recruitment",
    icon: RecruitmentIcon,
    icon_active: ActiveRecruitmentIcon,
    url: "/admin/recruitment",
  },
  {
    id: 11,
    text: "Testimonial",
    icon: TestimonialIcon,
    icon_active: ActiveTestimonialIcon,
    url: "/admin/testimonial",
  },
];

const SideNavLinks = () => {
  const [hoveredLink, setHoveredLink] = useState<SideNavLink | null>(null);
  const location = useLocation();

  const isExactMatch = (url: string) => {
    // Remove trailing slash from both URLs for comparison
    const currentPath = location.pathname.replace(/\/$/, "");
    const linkUrl = url.replace(/\/$/, "");
    return currentPath === linkUrl;
  };

  return (
    <div className="flex flex-col gap-4">
      {links.map((link) => {
        const active = isExactMatch(link.url);
        return (
          <RouterLink key={link.id} to={link.url}>
            <div
              className="w-full px-4"
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div
                className={`flex items-center gap-4 group py-3 px-4 rounded-full ${
                  active ? "bg-[#1B43C61A]" : "hover:bg-[#1B43C61A]"
                }`}
              >
                <img
                  src={
                    active || hoveredLink?.id === link.id
                      ? link.icon_active
                      : link.icon
                  }
                  alt={`${link.text} icon`}
                  className="w-6 h-6"
                />
                <p
                  className={`${
                    active
                      ? "text-secondary font-semibold"
                      : "text-darkgrey group-hover:text-secondary group-hover:font-semibold"
                  } text-md font-nunito`}
                >
                  {link.text}
                </p>
              </div>
            </div>
          </RouterLink>
        );
      })}
    </div>
  );
};

export default SideNavLinks;
