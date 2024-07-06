import { CardImage1, CardImage2, CardImage3 } from "../assets";
import {
  Director,
  Link,
  ProgramCardProps,
  IdentityCardProps,
  StrategicPlan,
} from "../types";

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
  {
    id: 1,
    title: "Health and Wash",
    image: CardImage1,
    link_url: "/strategic-direction",
  },
  {
    id: 2,
    title: "Governance and Women Empowerment",
    image: CardImage2,
    link_url: "/strategic-direction",
  },
  {
    id: 3,
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
    text: "Lucy Cecilia Foray Gondor is an Educationist, a Women’s Empowerment Advocate and currently serves as the President of Kailahun Women in Governance Network; a leading grassroots women’s advocacy CBO that champions women empowerment and participation in local governance. Under her leadership, Kailahun District became the first district to have the highest number of women elected as local councillors in Sierra Leone. She has also been a doyen of women’s empowerment in Eastern Province of Sierra Leone and double as the President for the Eastern Women’s Network that serves three districts that is Kailahun, Kenema and Kono. \n She is the Board Chairperson of the National Executive Council-SEND Sierra Leone, Board Member of Pendembu Community Bank in Upper Bambara Chiefdom in Kailahun District, Board Member of Pendembu Vocational Secondary School. She is an aspirant to become the next Member of Parliament for Upper Bambara Chiefdom in Kailahun District. \n Gondor received an Award from SEND West Africa for her leadership and commitment to SEND Sierra Leone during the Ebola outbreak in Sierra Leone that dismantled and re-ordered people’s lives in Sierra Leone.",
  },
  {
    id: 2,
    name: "Siapha Kamara",
    title: "Board Member",
    image: "siapha-kamara.png",
    text: "Mr. Siapha Kamara is the Founder and Chief Executive Officer of SEND West Africa. He holds an M.A and M.Phil. in Development from the Institute of Social Studies (ISS) in The Hague, Netherlands. He is a Social Development practitioner with expertise and hands-on experience in Social accountability and good governance practices, Organizational development and management of NGOs, Social inclusion, gender equity and women in governance, Micro-finance and small business development. During over 40 years career in Social Development, Mr Kamara has led the establishments Social Enterprise Development West Africa (SEND West Africa), Ghana Participatory Monitoring and Evaluation Network (PM & E Network), SODEC Northern Ghana Program for Institutional Capacity Building for Poverty Alleviation, Northern Ghana Network for Development, Ecumenical Training and Consultancy Centre (ETCC) of the Christian Council of Ghana. Under his leadership, SEND West Africa became operational in Ghana (1998), Liberia (2004) and Sierra Leone (2008), empowering disadvantaged citizens including women, youth, persons with disability, farmers and key population to exercise their social, economic and political rights. Some of his books and articles include: The Journey of A Male Gender Trainer in Northern Ghana, an article published in the book: Gender Training in Ghana in 2001 by D. Tsikata et al., A Participatory Training Handbook: Volume One: Project Planning, Management and Animation and Volume Two: Gender in Development Training, co-authored with A. Denkabe and published in 1993 by Freedom Press. Experiences in planning and conducting participatory and gender training for the staff and beneficiaries of NGOs in Northern Ghana and Problems of Food Insecurity in Liberia, published in Forum, Volume No 5, 1987. Impact of plantation agriculture on food insecurity in Liberia especially among low income groups.",
  },
  {
    id: 3,
    name: "Marion Joy Minah",
    title: "Board Member",
    image: "marion-joy.png",
    text: "Marion Minah is a Chartered and Certified Accountant with wealth of experience in financial management and controls for 20 years now. She has been exposed to different ways of working as she has being journeying in her career in Organisations like Action Aid, Christian Aid, Restless Development and Child Fund. This has afforded her the opportunity to learn and work on all forms of budgeting and reporting systems of all the major players in Development like the UN agencies, USAID, European Union, DFID, Global Fund, Comic Relief, Guernsey, DEC Appeals etc. She has managed various budget portfolio in all recognised currencies, the most recent being over £6 million. She has facilitated external and internal audits for over 15 years, having conducted internal audits herself for two Organisations in Zambia and Tanzania and supported financial management reforms in Liberia for a period of 3 months. She has facilitated trainings for finance and non-finance staff in finance polices, procurements, taxation, document retention, preparing for audits and many more. She is an excellent communicator and is a positive woman that can easily work in a team which has earned her a good experience in other areas of work like programming, Human Resource management and Office Administration. She currently serves as a Director/Trustee of a petroleum and estate outfit and also a Commissioner in the National Commission for Privatisation in the Office of the President of Sierra Leone; this additionally exposes her to understanding how public and private outfits are financed and managed so that they are profitable or deliver to the purpose of their existence. She has worked in multi-racial environments and she is highly results oriented and believes that nothing is impossible if you put your mind to it.",
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
