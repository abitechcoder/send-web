import { Director, Link } from "../types";
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
  // { id: 1, title: "Education", image: CardImage1 },
  { id: 1, title: "Health and Wash", image: CardImage1 },
  { id: 2, title: "Governance and Women Empowerment", image: CardImage2 },
  { id: 3, title: "Climate Change and Livelihood", image: CardImage3 },
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

export const directors: Director[] = [
  {
    id: 1,
    name: "Lucy Cecilia",
    title: "Board Chairperson",
    image: "lucy-cecelia.png",
    text: "Lucy Cecilia Foray Gondor is an Educationist, a Women’s Empowerment Advocate and currently serves as the President of Kailahun Women in Governance Network; a leading grassroots women’s advocacy CBO that champions women empowerment and participation in local governance. Under her leadership, Kailahun District became the first district to have the highest number of women elected as local councillors in Sierra Leone. She has also been a doyen of women’s empowerment in Eastern Province of Sierra Leone and double as the President for the Eastern Women’s Network that serves three districts that is Kailahun, Kenema and Kono. \n She is the Board Chairperson of the National Executive Council-SEND Sierra Leone, Board Member of Pendembu Community Bank in Upper Bambara Chiefdom in Kailahun District, Board Member of Pendembu Vocational Secondary School. She is an aspirant to become the next Member of Parliament for Upper Bambara Chiefdom in Kailahun District. \n Gondor received an Award from SEND West Africa for her leadership and commitment to SEND Sierra Leone during the Ebola outbreak in Sierra Leone that dismantled and re-ordered people’s lives in Sierra Leone.",
  },
  {
    id: 2,
    name: "Siapha Kamara",
    title: "Board Member",
    image: "siapha-kamara.png",
    text: "Lucy Cecilia Foray Gondor is an Educationist, a Women’s Empowerment Advocate and currently serves as the President of Kailahun Women in Governance Network; a leading grassroots women’s advocacy CBO that champions women empowerment and participation in local governance. Under her leadership, Kailahun District became the first district to have the highest number of women elected as local councillors in Sierra Leone. She has also been a doyen of women’s empowerment in Eastern Province of Sierra Leone and double as the President for the Eastern Women’s Network that serves three districts that is Kailahun, Kenema and Kono. \n She is the Board Chairperson of the National Executive Council-SEND Sierra Leone, Board Member of Pendembu Community Bank in Upper Bambara Chiefdom in Kailahun District, Board Member of Pendembu Vocational Secondary School. She is an aspirant to become the next Member of Parliament for Upper Bambara Chiefdom in Kailahun District. \n Gondor received an Award from SEND West Africa for her leadership and commitment to SEND Sierra Leone during the Ebola outbreak in Sierra Leone that dismantled and re-ordered people’s lives in Sierra Leone.",
  },
  {
    id: 3,
    name: "Marion Joy Minah",
    title: "Board Member",
    image: "marion-joy.png",
    text: "Lucy Cecilia Foray Gondor is an Educationist, a Women’s Empowerment Advocate and currently serves as the President of Kailahun Women in Governance Network; a leading grassroots women’s advocacy CBO that champions women empowerment and participation in local governance. Under her leadership, Kailahun District became the first district to have the highest number of women elected as local councillors in Sierra Leone. She has also been a doyen of women’s empowerment in Eastern Province of Sierra Leone and double as the President for the Eastern Women’s Network that serves three districts that is Kailahun, Kenema and Kono. \n She is the Board Chairperson of the National Executive Council-SEND Sierra Leone, Board Member of Pendembu Community Bank in Upper Bambara Chiefdom in Kailahun District, Board Member of Pendembu Vocational Secondary School. She is an aspirant to become the next Member of Parliament for Upper Bambara Chiefdom in Kailahun District. \n Gondor received an Award from SEND West Africa for her leadership and commitment to SEND Sierra Leone during the Ebola outbreak in Sierra Leone that dismantled and re-ordered people’s lives in Sierra Leone.",
  },
];
