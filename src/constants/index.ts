import { CardImage1, CardImage2, CardImage3 } from "../assets";
import {
  Director,
  Link,
  ProgramCardProps,
  IdentityCardProps,
  StrategicPlan,
  GeneralList,
  Job,
} from "../types";

export const links: Link[] = [
  // {
  //   id: 1,
  //   text: "Homepage",
  //   url: "/",
  //   child: null,
  // },
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
  // { id: 1, title: "Education", image: CardImage1 },
  {
    id: 1,
    title: "Health and Wash",
    image: CardImage1,
    link_url: "/strategic-direction",
  },
  {
    id: 2,
    title: "Education",
    image: CardImage1,
    link_url: "/strategic-direction",
  },
  {
    id: 3,
    title: "Governance and Women Empowerment",
    image: CardImage2,
    link_url: "/strategic-direction",
  },
  {
    id: 4,
    title: "Climate Change and Livelihood",
    image: CardImage3,
    link_url: "/strategic-direction",
  },
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
    text: "Promotion of good governance, voice, accountably basic services and equality for women and men in Sierra Leone.",
  },
  {
    id: 3,
    title: "Core Values",
    text: "We believe in the potential of PEOPLE to champion their own development, characterized by equality of women and men, openness and accountability.",
  },
  {
    id: 4,
    title: "Our Principle",
    text: "Development is a human right that provides men and women with equal opportunity to actively participate in and contribute to the political, economic and social transformation of their communities.",
  },
];

export const directors: Director[] = [
  {
    id: 1,
    name: "Lucy Cecilia",
    title: "Board Chairperson",
    image: "lucy-cecelia.png",
  },
  {
    id: 2,
    name: "Siapha Kamara",
    title: "Board Member",
    image: "siapha-kamara.png",
  },
  {
    id: 3,
    name: "Marion Joy Minah",
    title: "Board Member",
    image: "marion-joy.png",
  },
  {
    id: 4,
    name: "JOSEPH AYAMGA",
    title: "Board Member",
    image: "country-director.png",
  },
  {
    id: 5,
    name: "JEANNE KAMARA",
    title: "Board Member",
    image: "jean-kamara.jpg",
  },
  {
    id: 6,
    name: "SHEKU JAMES",
    title: "Board Member",
    image: "sheku-james.jpg",
  },
  {
    id: 7,
    name: "FATMATA DASSAMA",
    title: "Board Member",
    image: "fatmata-dassama.jpg",
  },
];

export const strategicPlans: StrategicPlan[] = [
  {
    id: 1,
    title: "2019 - 2023 Strategic Plan PDF",
    document_url:
      "https://www.sendsierraleone.com/Assets/documents/SEND-Strategic-Plan-2019-2023.pdf",
  },
  {
    id: 2,
    title: "2024 - 2029 Strategic Plan PDF",
    document_url:
      "https://www.sendsierraleone.com/SEND%20SL%20Strategic%20Plan%202024-2029%20FINAL%202%20(1).pdf",
  },
  {
    id: 3,
    title: "Resource Mobilisation Strategy",
    document_url:
      "https://www.sendsierraleone.com/RESOURCE%20MOBILISATION%20STRATEGY%202.pdf",
  },
  {
    id: 4,
    title: "2019 - 2023 Strategy Evaluation Report",
    document_url:
      "https://www.sendsierraleone.com/SEND%20SL%20Strategy%20Evaluation%20Report%20FINAL.pdf",
  },
  {
    id: 5,
    title: "Organisation Profile",
    document_url: "https://www.sendsierraleone.com/sendcompanyprofile.pdf",
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
];

export const regions: GeneralList[] = [
  {
    id: 1,
    title: "Kenema",
  },
  {
    id: 2,
    title: "Kono",
  },
];

export const jobs: Job[] = [
  {
    id: 1,
    title: "Security Officer - Freetown",
    description:
      "SEND Sierra Leone seeks the services of an experienced Security Officer to join our organisation and be stationed at the Freetown Program Office located along Spur Road”",
    deadline: " 10 May 2024",
    classification: "1",
    region: "1",
  },

  {
    id: 2,
    title: "Admin Officer",
    description:
      "SEND Sierra Leone seeks the services of an experienced Security Officer to join our organisation and be stationed at the Freetown Program Office located along Spur Road”",
    deadline: "10 June 2024",
    classification: "2",
    region: "1",
  },
];
