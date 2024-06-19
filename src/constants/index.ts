import { Link } from "../types";
import { CardImage1, CardImage2, CardImage3 } from "../assets";
import { ProgramCardProps, IdentityCardProps } from "../types";

export const links: Link[] = [
  {
    id: 1,
    text: "Homepage",
    url: "/",
    child: null,
  },
  {
    id: 2,
    text: "Who We Are",
    url: "/whoweare",
    child: [
      {
        id: 1,
        text: "Corporate Identity",
        url: "/whoweare/corporate-identity",
      },
      { id: 2, text: "Evolution Of Send", url: "/whoweare/evolution-of-send" },
      { id: 3, text: "Organization Structure", url: "/whoweare/org-structure" },
      { id: 4, text: "Management Team", url: "/whoweare/mgt-team" },
      {
        id: 5,
        text: "Board of Directors",
        url: "/whoweare/board-of-directors",
      },
      { id: 6, text: "Sierra Leone", url: "/whoweare/sierra-leone" },
    ],
  },
  {
    id: 3,
    text: "Strategic Direction",
    url: "/dashboard",
    child: [
      {
        id: 1,
        text: "Governance & Women Empowerment",
        url: "/strategic-direction",
      },
    ],
  },
  {
    id: 4,
    text: "Gallery",
    url: "/gallery",
    child: null,
  },
  {
    id: 5,
    text: "Work With Us",
    url: "/work-with-us",
    child: null,
  },
  {
    id: 6,
    text: "Publications",
    url: "/dashboard",
    child: [
      {
        id: 1,
        text: "Reports On Project",
        url: "/publications/project-reports",
      },
      {
        id: 2,
        text: "Newsletter",
        url: "/publications/newsletter",
      },
      {
        id: 3,
        text: "Manual & Profiles",
        url: "/publications/manual-and-profiles",
      },
      {
        id: 4,
        text: "Case Stories",
        url: "/publications/case-stories",
      },
    ],
  },
  {
    id: 7,
    text: "Contact Us",
    url: "/contact-us",
    child: null,
  },
];

export const ProgramCards: ProgramCardProps[] = [
  { id: 1, title: "Education", image: CardImage1 },
  { id: 2, title: "Health and Wash", image: CardImage1 },
  { id: 3, title: "Governance and Women Empowerment", image: CardImage2 },
  { id: 4, title: "Climate Change and Livelihood", image: CardImage3 },
];

export const IdentityCards: IdentityCardProps[] = [
  {
    id: 1,
    title: "Our Vision",
    text: "A Sierra Leone where people’s rights and well-being are guaranteed.",
  },
  {
    id: 2,
    title: "Our Mission",
    text: "A Sierra Leone where people’s rights and well-being are guaranteed.",
  },
  {
    id: 3,
    title: "Core Values",
    text: "A Sierra Leone where people’s rights and well-being are guaranteed.",
  },
  {
    id: 4,
    title: "Our Principle",
    text: "A Sierra Leone where people’s rights and well-being are guaranteed.",
  },
];
