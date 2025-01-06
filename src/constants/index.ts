import {
  Link,
  GeneralList,
} from "../types";

export let links: Link[] = [
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
      { id: 3, text: "Organization Structure", url: "/whoweare/org-structure" },
      { id: 4, text: "Senior Management Team", url: "/whoweare/mgt-team" },
      {
        id: 5,
        text: "Board of Directors",
        url: "/whoweare/board-of-directors",
      },
    ],
  },
  {
    id: 3,
    text: "Program Areas",
    url: "/program-areas",
    child: null,
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


export const jobClassification: GeneralList[] = [
  {
    id: 1,
    title: "Administration / Finance",
  },
  {
    id: 2,
    title: "Advocacy / Communications",
  },
  {
    id: 3,
    title: "Techinal / Information Technology",
  },
  {
    id: 4,
    title: "Consultation",
  },
  {
    id: 5,
    title: "Intership / SIWES ",
  },
  {
    id: 6,
    title: "Healthcare / Medical Assitance  ",
  },
  {
    id: 7,
    title: "Teaching / Administrative",
  },
  {
    id: 8,
    title: "Construction / Skilled Trade",
  },
  {
    id: 9,
    title: "Office",
  },
  {
    id: 10,
    title: "Education /Empowerment",
  },
  {
    id: 11,
    title: "Security",
  },
  {
    id: 12,
    title: "Driver",
  },
];

export const regions: GeneralList[] = [
  {
    id: 1,
    title: "Bonthe",
  },

  {
    id: 2,
    title: "Kailahum",
  },
  {
    id: 3,
    title: "Kenema",
  },
  {
    id: 4,
    title: "Kono",
  },
  {
    id: 5,
    title: "Port Loko",
  },
  {
    id: 6,
    title: "Freetown, Western Area",
  },
];

