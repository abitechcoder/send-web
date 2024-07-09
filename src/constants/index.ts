import { title } from "process";
import { CardImage1, CardImage2, CardImage3 } from "../assets";
import {
  Director,
  Link,
  ProgramCardProps,
  IdentityCardProps,
  StrategicPlan,
  GeneralList,
  Job,
  AnnualReport,
  Newsletter,
  ProfileManual,
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
export const HealthProjects = [
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
  {
    id: 3,
    title:
      "Community Empowerment To Participate In Health Service Deliver Appreciate, Learn And Transfer(SALT) Approach Project",
    link_url: "https://sendsierraleone.com/community.html",
  },
  {
    id: 4,
    title: "Promoting Equality and Women's Leadership (PEWLESS) Project",
    link_url:
      "https://sendsierraleone.com/Promoting%20Equality%20and%20Women's%20Leadership.pdfl",
  },
  {
    id: 5,
    title: "Enhanced Community Health Resilience Project",
    link_url: "https://sendsierraleone.com/baomaproject.html",
  },
];

// Governance & Women Empowerment Page data
export const GovtProjects = [
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
    link_url:
      "https://sendsierraleone.com/Brouchure_Supporting%20Gender%20Equality.pdf",
  },
  {
    id: 3,
    title: "Strengthening Women’s Participation in Politics and Governance",
    link_url: "https://sendsierraleone.com/politics.html",
  },
  {
    id: 4,
    title: "KAILAHUN WOMEN IN GOVERNANCE",
    link_url: "https://sendsierraleone.com/kailahun.html",
  },
  {
    id: 5,
    title: "WOMEN IGNITING THE SPIRIT OF ENTERPRENEURSHIP",
    link_url: "https://sendsierraleone.com/enterpreneurship.html",
  },
  {
    id: 6,
    title:
      "Promoting Young Women Participation in Decision Making, Governance and Politics in Sierra Leone",
    link_url: "https://sendsierraleone.com/leadership.html",
  },
  {
    id: 7,
    title:
      "Integrated Project For the Education & Empowerment Of Women and Civil Society Groups",
    link_url: "https://sendsierraleone.com/IntegratedProject.html",
  },
  {
    id: 8,
    title:
      "Fostering Peaceful, Credible and Inclusive Elections in Sierra Leone 2022-2023 Project",
    link_url: "https://sendsierraleone.com/UNDP%20Elections%20Factsheet.pdfl",
  },
];

// Livelihood, Food & Nutrition Security Page data
export const LivelihoodProjects = [
  {
    id: 1,
    title: "SOLAR POWER HUB PROJECT MENDEKELEMA-PHASE I",
    link_url: "https://sendsierraleone.com/SOLAR%20project%20fact%20sheet.pdf",
  },
  {
    id: 2,
    title:
      "PROMOTING EMPLOYMENT OPPORTUNITIES FOR WOMEN AND YOUTH IN BONTHE AND FALABA DISTRICTS",
    link_url:
      "https://sendsierraleone.com/UNDP%20Human%20Security%20Factsheet.pdf",
  },
  {
    id: 3,
    title: "CITIZEN DRIVEN CLIMATE SENSITIVE WASH MANAGEMENT PROJECT",
    link_url: "https://sendsierraleone.com/citizenwashclimateproject.html",
  },
  {
    id: 4,
    title:
      "Strengthening of the Civil Society Participation for Climate Change Adaptation of the WASH Sector in two rural districts of Sierra Leone",
    link_url: "https://sendsierraleone.com/cdcc.pdf",
  },
  {
    id: 5,
    title: "ENHANCING CLIMATE RESILIENCE IN RURAL SIERRA LEONE PROJECT",
    link_url: "https://sendsierraleone.com/climatechangeproject.html",
  },
  {
    id: 6,
    title:
      "STRENGTHENING WOMEN AND YOUTH-LED BUSINESS FOR LOCAL ECONOMIC DEVELOPMENT",
    link_url: "https://sendsierraleone.com/promotingresilienceundp.html",
  },
  {
    id: 7,
    title:
      "IMPROVED ACCESS TO SUSTAINABLY MANAGED MICRO-FINANCE AND WaSH SYSTEMS – WaSH SELF SUPPLY PROJECT",
    link_url: "https://sendsierraleone.com/improved-factsheet.html",
  },
  {
    id: 8,
    title: "Bonthe Island Fish Trading (BIFT) Project",
    link_url: "https://sendsierraleone.com/bift.html",
  },
  {
    id: 9,
    title:
      "PROMOTING INCOME GENERATION FOR CASH CROP FARMERS THROUGH GENDER TRANSFORMATICE PRACTICES, SELF INITIATIVES AND BUSINESS DEVELOPMENT",
    link_url: "https://sendsierraleone.com/development.html",
  },
  {
    id: 10,
    title:
      "Linking Agriculture Natural Resources Management and WASH towards Nutrition Security in Kenema and Pujehun Districts.",
    link_url: "https://sendsierraleone.com/pujehun.html",
  },
];

export const ProfileManuals: ProfileManual[] = [
  {
    id: 1,
    image: "manual-image-1.png",
    link_url: "https://sendsierraleone.com/Women%20Manifesto%20Final.pdf",
  },
  {
    id: 2,
    image: "manual-image-2.png",
    link_url: "https://sendsierraleone.com/Advocacy%20Strategy%20Document.pdf",
  },
  {
    id: 3,
    image: "manual-image-3.png",
    link_url: "https://sendsierraleone.com/womencandidatestrainingmanual.pdf",
  },
  {
    id: 4,
    image: "manual-image-4.jpg",
    link_url: "https://www.sendsierraleone.com/handbook.pdf",
  },
  {
    id: 5,
    image: "manual-image-5.png",
    link_url:
      "https://www.sendsierraleone.com/Assets/documents/GTA%20Final%20Report.pdf",
  },
  {
    id: 6,
    image: "manual-image-6.png",
    link_url:
      "https://www.sendsierraleone.com/Assets/documents/GTA%20Final.pdf",
  },
  {
    id: 7,
    image: "manual-image-7.jpg",
    link_url:
      "https://www.sendsierraleone.com/Assets/documents/vsla%20manual.pdf",
  },
  {
    id: 8,
    image: "manual-image-8.jpg",
    link_url: "https://www.sendsierraleone.com/Assets/documents/manual.pdf",
  },
  {
    id: 9,
    image: "manual-image-9.jpg",
    link_url:
      "https://www.sendsierraleone.com/Assets/documents/health&hygiene%20manual.pdf",
  },
  {
    id: 10,
    image: "manual-image-10.jpg",
    link_url:
      "https://www.sendsierraleone.com/Assets/documents/food%20and%20nutrision%20manual.pdf",
  },
  {
    id: 11,
    image: "manual-image-11.jpg",
    link_url:
      "https://www.sendsierraleone.com/Assets/documents/GMF%20MANUAL%20for%20SEND%20final.pdf",
  },
  {
    id: 12,
    image: "profile-image-1.jpg",
    link_url: "https://www.sendsierraleone.com/Climate%20Profile%20.pdf",
  },
  {
    id: 13,
    image: "profile-image-2.jpg",
    link_url:
      "https://www.sendsierraleone.com/Health,%20Hygiene,%20Sanitation%20&%20Water%20Profile-1.pdf",
  },
];
