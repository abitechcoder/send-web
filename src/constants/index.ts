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
  {
    id: 3,
    title: "Invitation for Bids",
    description:
      "SEND Sierra Leone invites bids from experienced WASH construction firms to provide services in the construction of WASH facilities in Sierra Leone.”",
    deadline: "22 April 2024",
    classification: "1",
    region: "1",
  },
  {
    id: 4,
    title: "End-Line Evaluation Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced Evaluation Consultant or Consultancy Firm to conduct an for End-Term Evaluation for the “More than a Woman: Strengthening Women's Participation in Politics and Governance- Phase II”",
    deadline: ":30 April 2024",
    classification: "2",
    region: "1",
  },

  {
    id: 5,
    title: "End-Line Evaluation Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced Evaluation Consultant or Consultancy Firm to conduct an for End-Term Evaluation for the “Improving business conditions for fishing and fish trading in Bonthe, Sierra Leone (BIFT) in Bonthe district”",
    deadline: "30 March 2024",
    classification: "1",
    region: "2",
  },
  {
    id: 6,
    title: "Field Officer",
    description:
      "SEND Sierra Leone is actively seeking qualified individuals to fill the role of Field Officers responsible for the program's implementation in the Kono and Kenema districts. These Field Officers will be stationed within the respective communities in these districts. They should possess a high level of competence in community development work, specifically focusing on health-related initiatives.",
    deadline: "14 December 2023",
    classification: "2",
    region: "2",
  },
  {
    id: 7,
    title: "Finance Officer",
    description:
      "SEND Sierra Leone is actively seeking qualified individuals to fill the role of Finance Officer responsible for managing and overseeing the program's financial transactions.",
    deadline: "14 December 2023",
    classification: "2",
    region: "1",
  },
  {
    id: 8,
    title: "Programme Office Intern",
    description:
      "SEND is looking for a qualified national from any of the Universities. The Intern will support the Accounts Officer in undertaking administrative, financial and accounting tasks of the organization. The right candidate will track, evaluate and process day to day activities. Responsibilities include accounts payable, accounts receivable, internal and external duties, such as vendors, clients including banks, NRA and NASSIT. The Intern may handle daily bookkeeping, preparing financial report, taxes, budgets, and assisting in ensuring proper financial policies, procedures and structures are maintained.",
    deadline: "25 October 2023",
    classification: "1",
    region: "2",
  },
  {
    id: 9,
    title: "Accounts Office Intern",
    description:
      "SEND is looking for a qualified national from any of the Universities. The Intern will support the Accounts Officer in undertaking administrative, financial and accounting tasks of the organization. The right candidate will track, evaluate and process day to day activities. Responsibilities include accounts payable, accounts receivable, internal and external duties, such as vendors, clients including banks, NRA and NASSIT. The Intern may handle daily bookkeeping, preparing financial report, taxes, budgets, and assisting in ensuring proper financial policies, procedures and structures are maintained.",
    deadline: "25 October 2023",
    classification: "2",
    region: "1",
  },
  {
    id: 10,
    title: "Feasibility Study Consultancy for The Women’s Access to Renewable Energy for Economic Development (WAREED)",
    description:
      "SEND Sierra Leone seeks the services of an experienced Consultant or Consultancy firm to conduct a feasibility study on the WAREED project which aims to provide SEND-SL and all stakeholders with a sound basis for developing the full project proposal by clarifying prerequisites, assumptions, opportunities, and risks. The study findings should provide an overview of key areas in consideration of relevance, effectiveness, efficiency, impact and sustainability (DAC OECD) scopes of the proposed intervention. The study will also be submitted to the TERRA TECH/BMZ for assessment of the overall feasibility of the project. The feasibility study will also outline the changes possible for the next three years with project support. It will critically examine the situation of the Kailahun district and the project outcomes and outputs formulated to reach the desired result. It will also help analyze target stakeholders identified as MDAs, mini-grid suppliers and operators, local authorities, etc.",
    deadline: "10 November 2023",
    classification: "1",
    region: "2",
  },
  {
    id: 11,
    title: "Feasibility Study Consultancy for The FEED: Empowering Communities through Sustainable School Feeding in Kenema, Kailahun and Bo",
    description:
      "SEND Sierra Leone seeks the services of an experienced Consultant or Consultancy firm to conduct a feasibility study on the FEED project which aims to provide SEND-SL and all stakeholders with a sound basis for developing the full project proposal by clarifying prerequisites, assumptions, opportunities, and risks. The study findings should provide an overview of key areas in consideration of relevance, effectiveness, efficiency, impact and sustainability (DAC OECD) scopes of the proposed intervention. The study will also be submitted to the TERRA TECH/BMZ for assessment of the overall feasibility of the project. The feasibility study will also outline the changes possible for the next three years with project support. It will critically examine the situation of the Kailahun district and the project outcomes and outputs formulated to reach the desired result. It will also help analyze target stakeholders identified as MDAs, mini-grid suppliers and operators, local authorities, etc.",
    deadline: "10 November 2023",
    classification: "2",
    region: "2",
  },
  {
    id: 12,
    title: "ASSET AUCTION",
    description:
      "SEND Sierra Leone informs the public of an proposed auction of a number of its assets to the general public.",
    deadline: "25 September 2023",
    classification: "1",
    region: "2",
  },
  {
    id: 13,
    title: "Strategic Plan Development Consultancy",
    description:
      "SEND Sierra Leone seeks the services of an experienced Strategy Development Consultant or Consultancy Firm to develop the organisational Strategic Plan for the organisation.",
    deadline: "1 September 2023",
    classification: "2",
    region: "1",
  },
  {
    id: 14,
    title: "Data Protection Policy Consultant (Re-Advertised)",
    description:
      "SEND Sierra Leone seeks the services of an experienced Data Protection Policy Consultant to develop a comprehensive data protection policy document for the organisation.",
    deadline: " 16 June 2023",
    classification: "1",
    region: "1",
  },
  {
    id: 15,
    title: "Gender Policy Consultant (Re-Advertised)",
    description:
      "SEND Sierra Leone seeks the services of an experienced Gender Policy Consultant to develop a comprehensive gender policy document for the organisation.",
    deadline: " 16 June 2023",
    classification: "1",
    region: "2",
  },
  {
    id: 16,
    title: "IT Officer",
    description:
      "SEND Sierra Leone seeks the services of an IT Office to support the country program office in ensuring the organisation technological assets and support systems are in good working order for all staff.",
    deadline: "5 June 2023",
    classification: "2",
    region: "1",
  },
  {
    id: 17,
    title: "Communications Consultant",
    description:
      "SEND Sierra Leone seeks the services of a Communications Consultant to support the country program office in delivering communication deliverables aligned with the organisations digital and communications strategy",
    deadline: "5 June 2023",
    classification: "1",
    region: "1",
  },
  {
    id: 18,
    title: "Office Assistant",
    description:
      "SEND Sierra Leone seeks the services of an Office Assistant to support the Freetown program office in ensuring the office is a conducive working environment for all staff",
    deadline: "20 May 2023",
    classification: "2",
    region: "1",
  },
  {
    id: 19,
    title: "Solar Technician",
    description:
      "SEND Sierra Leone seeks the services of an experienced Solar Technician who will work with the organisation to design and install photo voltaic systems based on site conditions.",
    deadline: "20 May 2023",
    classification: "1",
    region: "2",
  },
  {
    id: 20,
    title: "Data Protection Policy Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced Data Protection Policy Consultant to develop a comprehensive data protection policy document for the organisation.",
    deadline: "12 May 2023",
    classification: "1",
    region: "2",
  },
  {
    id: 21,
    title: "Gender Policy Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced Gender Policy Consultant to develop a comprehensive gender policy document for the organisation.",
    deadline: "12 May 2023",
    classification: "2",
    region: "2",
  },
  {
    id: 22,
    title: "Gender Audit Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced Gender Audit Consultant to conduct a gender audit of female education workers in Sierra Leone",
    deadline: "15 March 2023",
    classification: "2",
    region: "2",
  },
  {
    id: 23,
    title: "Evaluation Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced Evaluation Consultant to conduct a mid-term evaluation for the Citizen Driven Climate Sensitive WASH Management project in the Kenema district.",
    deadline: "27 February 2023",
    classification: "2",
    region: "2",
  },
  {
    id: 24,
    title: "Project Manager",
    description:
      "SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Manager working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.",
    deadline: "10 February 2023",
    classification: "2",
    region: "1",
  },
  {
    id: 25,
    title: "Project Manager",
    description:
      "SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Manager working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.",
    deadline: "10 February 2023",
    classification: "2",
    region: "1",
  },
  {
    id: 26,
    title: "Project Officer",
    description:
      "SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Officer working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.",
    deadline: "10 February 2023",
    classification: "2",
    region: "1",
  },
  {
    id: 27,
    title: "IT Tutors",
    description:
      "SEND Sierra Leone seeks the services of experienced ICT Tutors to work under the PEWLESS project aimed at increasing the ICT literacy of teachers especially female teachers in the Kailahun, Kenema and Kono districts.",
    deadline: "25 January 2023",
    classification: "1",
    region: "2",
  },
  {
    id: 28,
    title: "Feasibility Study Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced Consultant to conduct a feasibility study fo the proposed Citizen-Driven Climate Change project to guide the development of the project proposal and submission.",
    deadline: "30 January 2023",
    classification: "2",
    region: "2",
  },
 {
    id: 29,
    title: "End-Line Evaluation Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Account Officer working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.",
    deadline: " 28 December 2022",
    classification: "1",
    region: "2",
  },
  {
    id: 30,
    title: "Finance Director",
    description:
      "SEND Sierra Leone seeks the services of an experienced Finance Professional to join our team as the Finance Director",
    deadline: " 25 December 2022",
    classification: "1",
    region: "2",
  },
  {
    id: 31,
    title: "End-Line Evaluation Consultant",
    description:
      "A consortium of local CSOs and International Development Partners request the services of a Consultant or a team of Consultants to aid in the development of the 2023 Sierra Leone Women's Manisfesto which wil address the needs of all Sierra Leone women.",
    deadline: "18 July 2022",
    classification: "2",
    region: "1",
  },
  {
    id: 32,
    title: "Principal and Teachers",
    description:
      "Nyapui Senior Secondary School of Excellence invites applications for a School Principal and School Teachers in Kenema.",
    deadline: "21 July 2022",
    classification: "2",
    region: "1",
  },
  {
    id: 33,
    title: "Office Assistant",
    description:
      "SEND Sierra Leone seeks the services of an Office Asssistant to support the management and maintenance of its Program Office in Port Loko District, Northern Region of Sierra Leone",
    deadline: "25 April 2022",
    classification: "1",
    region: "2",
  },
  {
    id: 34,
    title: "Project Manager",
    description:
      "SEND Sierra Leone seeks the services of a qualified candidate to act as a Project Manager for the In Their Lifetime project-A women's economic and leadership transformational project in Kailahun district",
    deadline: "14 February 2022",
    classification: "1",
    region: "1",
  },
  {
    id: 35,
    title: "Construction Firm needed for the construction of the Baoma Community Health Post",
    description:
      "SEND Sierra Leone seeks the services of a construction firm to construct and deliver a community health post facility in Baoma community located in Kenema district to improve the access and quality of health services acquired by the residents of Baoma and surrounding villages",
    deadline: "21 January 2022",
    classification: "1",
    region: "1",
  },
  {
    id: 36,
    title: "Advocacy Manager",
    description:
      "SEND Sierra Leone seeks the services of a Advocacy manager to support the Project manager of a Climate sensitve WASH management project to successfully plan, design, execute, coordinate and monitor the successful delivery of the project objectives and donor guidelines.",
    deadline: "19 January 2022",
    classification: "1",
    region: "1",
  },
  {
    id: 37,
    title: "Consultant",
    description:
      "SEND Sierra Leone seeks the services of a Consultant to conduct a feasibility study of the proposed PEWLESS project.",
    deadline: "17 January 2022",
    classification: "2",
    region: "2",
  },
  {
    id: 38,
    title: "Gender Audit Consultant",
    description:
      "SEND Sierra Leone seeks the services of a Consultant to conduct a Gender Audit on Political Parties in Sierra Leone.",
    deadline: "29 September 2021",
    classification: "2",
    region: "2",
  },
  {
    id: 40,
    title: "Principal & Teachers",
    description:
      'The Board of Governors of "NYAPUI SENIOR SECONDARY SCHOOL OF EXCELLENCE FOR GIRLS" invites applications for the positions of Principal & Teachers:',
    deadline: "10 August 2021",
    classification: "1",
    region: "2",
  },
  {
    id: 41,
    title: "Account Officer",
    description:
      "SEND Sierra Leone is looking for Account Officer for our Country Office in Kenema who will be reporting to the Finance Officer.",
    deadline: "26 July, 2021",
    classification: "2",
    region: "1",
  },
  {
    id: 42,
    title: "Driver",
    description:
      "The Driver will provide support to project and programme staff, official visitors, guests and project activities.",
    deadline: "26 July, 2021",
    classification: "2",
    region: "2",
  },
  {
    id: 43,
    title: "Account Officer",
    description:
      "SEND Sierra Leone is looking for Account Officer for our Country Office in Kenema who will be reporting to the Finance Officer.",
    deadline: "26 July, 2021",
    classification: "2",
    region: "1",
  },
  {
    id: 44,
    title: "Terms of Reference",
    description:
      `SEND is implementing the "More than a Woman: Strengthening Women's Participation in Politics and Governance" project with funds from the Government of Ireland.`,
    deadline: "23:59 (GMT) on 30 July 2021",
    classification: "2",
    region: "2",
  },
  {
    id: 45,
    title: "Request for Tender for SEND Sierra Leone 2020 External Audit",
    description:
      "Tenders are invited to provide external audit services for SEND Sierra Leone for the 2020 financial year. SEND’s financial year runs from 1st January to 31st December.",
    deadline: "23:59 (GMT) on 30 June 2021",
    classification: "2",
    region: "2",
  },
  {
    id: 46,
    title: "Terms of Reference for the Development of a Training Manual for Female Aspirants and Candidates",
    description:
     "This ToR outlines the process to gather information and create a training manual for women aspirants and candidates to contest in local and national elections and participate in leadership successfully. It defines how the consultancy will be implemented in Sierra Leone within the objectives and scope of the Training Manual for Female Aspirants and Candidates.",
    deadline: "23:59 (GMT) on 11 July, 2021",
    classification: "2",
    region: "2",
  },
  {
    id: 47,
    title: "Request for Tender for SEND Sierra Leone 2020 External Audit",
    description:
     "Tenders are invited to provide external audit services for SEND Sierra Leone for the 2020 financial year. SEND’s financial year runs from 1st January to 31st December.",
    deadline: "23:59 (GMT) on 30 June 2021",
    classification: "2",
    region: "2",
  },
  {
    id: 48,
    title: "Auction Notice! Auction Notice! Auction Notice!",
    description:
     "Management of SEND Sierra Leone wishes to bring to the notice of all staff and the general Public that Vehicle AIJ-366 is available for Auction sale to the General Public.",
    deadline: "19 April, 2021",
    classification: "2",
    region: "2",
  },
  {
    id: 49,
    title: "Integrated Project for Education and Empowerment of Women and Civil Society Groups in Sierra Leone",
    description:
     "SEND Sierra Leone, funded by German Federal Ministry for Economic Cooperation (BMZ AND TERRA TECH), are implementing the project ‘Integrated Project for Education and Empowerment of Women and Civil Society Groups in Sierra Leone’ to contribute to achieving the Sustainable Development Goals.",
    deadline: " 1 March, 2021",
    classification: "1",
    region: "1",
  },
  {
    id: 50,
    title: "Consultant for the Evaluation of the More Than A Woman Project",
    description:
     `The "More than a Woman: Strengthening Women's Participation in Politics and Governance" project be evaluated and works to empower women in the Eastern Region of Sierra Leone to increase their participation in politics and governance.`,
    deadline: "25 February, 2021",
    classification: "1",
    region: "2",
  },
  {
    id: 51,
    title: "Credit Union Manager",
    description:
    "The Credit Union Manager is responsible for the day to day running of the Credit Union. He/she is responsible for the proper technical performance of all the Credit Union's accounting and financial activities in consultation with the Board of Directors.",
    deadline: "15 January, 2021",
    classification: "2",
    region: "1",
  },
  {
    id: 52,
    title: "Account Officer",
    description:
    "The Accounts Officer is responsible for loan disbursement, opening the account, and maintaining high proficient and comprehensive credit union knowledge.",
    deadline: "15 January, 2021",
    classification: "2",
    region: "1",
  },
  {
    id: 53,
    title: "Security Officer",
    description:
    "The Security Officer is responsible for the safety and security of all assets and property of the Credit Union. He/she ensures that the office premises are well tidy and the generator is in good order.",
    deadline: "15 January, 2021",
    classification: "1",
    region: "2",
  },
  {
    id: 54,
    title: "PURCHASE OF OFFICE EQUIPMENT",
    description:
    "SEND Sierra Leone is non-governmental organization registered with the Ministry of Finance and Economic Development of the Republic of Sierra Leone with a vision to contribute to a Sierra Leone where people’s rights and well-being are guaranteed.",
    deadline: "10 December, 2020",
    classification: "1",
    region: "2",
  },
  {
    id: 55,
    title: "Invitation for Bids",
    description:
    "The Social Enterprise Development (SEND) Sierra Leone has received funds from the BMZ through Terra Tech Germany for the procurement of works and now invites sealed bids from eligible bidders for the construction of Kenema Model Senior Secondary School for Girls.",
    deadline: "20 November, 2020",
    classification: "1",
    region: "2",
  },
  {
    id: 56,
    title: "Computer/IT Tutors(2)",
    description:
    "SEND Sierra Leone is looking for a Computer/IT Tutors who will assume the responsibility of training teachers in the Kenema District to ensure quality teaching service.",
    deadline: "18th November, 2020",
    classification: "2",
    region: "1",
  },
  {
    id: 57,
    title: "Engineers Without Borders(Terms of Reference)",
    description:
    "Applications must be sent to: ayamga@sendsierraleone.com and jattu@sendsierraleone.com",
    deadline: "25 November, 2020",
    classification: "2",
    region: "1",
  },
  {
    id: 58,
    title: "FINANCE DIRECTOR ALERT",
    description:
    "SEND Sierra Leone is looking for Finance Director to Oversee the performance of accurate reporting procedures and timely submission of reports to relevant donors, the SEND National Executive Council and other stakeholders.",
    deadline: "30 June, 2020",
    classification: "1",
    region: "2",
  },
  {
    id: 59,
    title: "FINANCE OFFICER ALERT",
    description:
    "SEND Sierra Leone is looking for Finance Officer for Country Office in Kenema who will be reporting to the Finance Director.The Officer will be responsible for fixed assets transactions managements and preparing letters for cash transfers , new bank openings ,program area payroll payments etc among others.",
    deadline: "10 March, 2020",
    classification: "1",
    region: "2",
  },
  {
    id: 60,
    title: "CONSULTANCY ALERT",
    description:
    "SEND Sierra Leone seeks the services of a consultant to handle all its digital communications across several digital platforms . The Consultant will have to develop a digital strategy as well as execute said strategy in line with all current and future SEND project.",
    deadline: "20 December, 2019",
    classification: "1",
    region: "2",
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
