import { title } from "process";
import { CardImage1, CardImage2, CardImage3 } from "../assets";
import {
  Director,
  Link,
  ProgramCardProps,
  IdentityCardProps,
  StrategicPlan,
  AnnualReport,
  Newsletter,
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

export const AnnualReports: AnnualReport[] = [
  {
    title: "Report 01",
    text: "SEND SL Annual",
    year: "Report 2017",
    report_url:
      "https://sendsierraleone.com/Assets/documents/SEND%20SIERRA%20LEONE%20ANNUAL%20REPORT%20(1)_2.pdf",
  },
  {
    title: "Report 02",
    text: "SEND SL Annual",
    year: "Report 2018",
    report_url:
      "https://sendsierraleone.com/Assets/documents/SEND-Annual-Report-WEB%20(2).pdf",
  },
  {
    title: "Report 03",
    text: "SEND SL Annual",
    year: "Report 2019",
    report_url:
      "https://sendsierraleone.com/Assets/documents/2019%20annual%20report2.pdf",
  },
  {
    title: "Report 04",
    text: "SEND SL Annual",
    year: "Report 2020",
    report_url:
      "https://sendsierraleone.com/Assets/documents/Anual%20Repport%202020.pdf",
  },
  {
    title: "Report 05",
    text: "SEND SL Annual",
    year: "Report 2021",
    report_url: "https://sendsierraleone.com/reports.html",
  },
  {
    title: "Report 06",
    text: "SEND SL Annual",
    year: "Report 2022",
    report_url: "https://sendsierraleone.com/Annual%20Report%202022.pdf",
  },
  {
    title: "Report 07",
    text: "SEND SL Annual",
    year: "Report 2023",
    report_url: "https://sendsierraleone.com/Annual%20Report%202023%20web.pdf",
  },
];

export const Newsletters: Newsletter[] = [
  {
    id: 1,
    title: "NEWSLETTER 2022-IMPACTING TODAY FOR A BETTER TOMORROW",
    image: "news-image-1.png",
    url: "https://sendsierraleone.com/2022NEWSLETTER.pdf",
  },
  {
    id: 2,
    title: "Nyapui Senior Secondary School of Excellence Brochure",
    image: "news-image-2.png",
    url: "https://sendsierraleone.com/Nyapuischoolbrochure.pdf",
  },
  {
    id: 3,
    title: "Second Quarter Newsletter 2021. RESILIENCE THROUGH EMPOWERMENT",
    image: "news-image-3.png",
    url: "https://sendsierraleone.com/Assets/documents/Resiliance%20through%20Empowerment%20(Online).pdf",
  },
  {
    id: 4,
    title: "Second Quarter Newsletter 2020. SURVIVING THROUGH COVID-19",
    image: "news-image-4.jpg",
    url: "https://sendsierraleone.com/Assets/documents/newsletter%202nd%20qta%20(update).pdf",
  },
  {
    id: 5,
    title: "First Quarter Newsletter 2020, MAKING A CHANGE IN DIFFICULT TIMES.",
    image: "news-image-5.png",
    url: "https://sendsierraleone.com/Assets/documents/SEND%20Sierra%20Leone%201st%20Newsletter%202020.pdf",
  },
  {
    id: 6,
    title:
      "April 2020 Newsletter, Debunking Things Believed to be True about the Corona Virus.",
    image: "news-image-6.jpg",
    url: "https://sendsierraleone.com/Assets/documents/myths.pdf",
  },
  {
    id: 7,
    title: "April 2020 Newsletter, Sensitization Manual on COVID-19 Pandemic",
    image: "news-image-7.jpg",
    url: "https://sendsierraleone.com/Assets/documents/corona.pdf",
  },
  {
    id: 8,
    title:
      "April 2020 Newsletter, NURTURING CHILDREN DURING THE COVID-19 PANDEMIC",
    image: "news-image-8.jpg",
    url: "https://sendsierraleone.com/Nyapuischoolbrochure.pdf",
  },
  {
    id: 9,
    title:
      "March 2020 Newsletter, Statement by HIS EXCELLENCY, DR. JULIUS MAADA BIO",
    image: "news-image-9.jpg",
    url: "https://sendsierraleone.com/Assets/documents/Statement%20by%20His%20Excellency,%20Dr%20Julius%20Maada%20Bio,%20President%20of%20the%20Republic%20of%20Sierra%20Leone%20at%20the%20Second%20Press%20Conference%20on%20COVID-19.%20State%20House,%20Freetown%20-%2031%20March%202020.pdf",
  },
  {
    id: 10,
    title:
      "September 2018 Newsletter, Overcoming Social & Cultural Barriers to Political & Economic Empowerment!",
    image: "news-image-10.jpg",
    url: "https://sendsierraleone.com/Assets/documents/SEND%20Women%20Empowerment%20Newsletter%202018-2.pdf",
  },
  {
    id: 11,
    title: "2019 Newsletters, Strengthening SEND and safeguarding staff",
    image: "news-image-11.jpg",
    url: "https://sendsierraleone.com/Assets/documents/news%20letter%202019.pdf",
  },
];


// Health & Education Page data
const HealthProjects = [
  {
    id: 1,
    title:
      "Implementation Of The New Educational Initiative Project (Nyapui School and Computer Training Center in Kenema)",
    link_url: "https://sendsierraleone.com/educational-initiative.html",
  },
  {
    id: 2,
    title:
      "Promotion of Nutrition Sensitive Wash Self-Supply In the Sherbro Island in Bonthe District Project",
    link_url: "https://sendsierraleone.com/promotion.html",
  },
];


// Governance & Women Empowerment Page data
const GovtProjects = [
  {
    id: 1,
    title:
      "Strengthening Community Led Accountability to Improve Service Delivery(SABI)",
    link_url: "https://sendsierraleone.com/SABI.html",
  },
  {
    id: 2,
    title:
      "Supporting Gender Equality and Social Accountability through a strengthened Civil Society",
    link_url: "https://sendsierraleone.com/Brouchure_Supporting%20Gender%20Equality.pdf",
  },
];

// Livelihood, Food & Nutrition Security Page data
const LivelihoodProjects = [
  {
    id: 1,
    title:
      "SOLAR POWER HUB PROJECT MENDEKELEMA-PHASE I",
    link_url: "https://sendsierraleone.com/SOLAR%20project%20fact%20sheet.pdf",
  },
  {
    id: 2,
    title:
      "PROMOTING EMPLOYMENT OPPORTUNITIES FOR WOMEN AND YOUTH IN BONTHE AND FALABA DISTRICTS",
    link_url: "https://sendsierraleone.com/UNDP%20Human%20Security%20Factsheet.pdf",
  },
];
