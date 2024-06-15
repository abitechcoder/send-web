import { Link } from "../types";
import { CardImage1, CardImage2, CardImage3 } from "../assets";
import { ProgramCardProps, IdentityCardProps } from "../types";

export const links: Link[] = [
  {
    id: 1,
    text: "Homepage",
    url: "/",
  },
  {
    id: 2,
    text: "Who We Are",
    url: "/whoweare",
  },
  {
    id: 3,
    text: "Strategic Direction",
    url: "/dashboard",
  },
  {
    id: 4,
    text: "Gallery",
    url: "/dashboard",
  },
  {
    id: 5,
    text: "Work With Us",
    url: "/dashboard",
  },
  {
    id: 6,
    text: "Publications",
    url: "/dashboard",
  },
  {
    id: 7,
    text: "Contact Us",
    url: "/dashboard",
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
