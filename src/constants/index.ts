import { CardImage1, CardImage2, CardImage3, Lucy, Siapha, Marion, CountryDirector, Jean, Sheku, Fatmata, NewsImage1, NewsImage2, NewsImage3, NewsImage4, NewsImage5, NewsImage6, NewsImage7, NewsImage8, NewsImage9, NewsImage10, NewsImage11, ManualImage1, ManualImage2, ManualImage3, ManualImage4, ManualImage5, ManualImage6, ManualImage7, ManualImage8, ManualImage9, ManualImage10, ManualImage11, ProfileManualImage1, ProfileManualImage2, HeroImage, HappyCommunity, DonateListingImage, ProblemImage1, ProblemImage2, ProblemImage3, ProblemImage4, HangingDrip, Women, IgnitingWomen, Kailahun, ImprovedImage, PromotingResilience, CitizenWash, ClimateChange } from "../assets";
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
  StrategicProjectType,
  DonationListingType,
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
      { id: 6, text: "About Sierra Leone", url: "/whoweare/sierra-leone" },
    ],
  },
  {
    id: 3,
    text: "Program Areas",
    url: "/program-areas",
    child: [
      {
        id: 1,
        text: "Sustainable Growth",
        url: "/program-areas/sustainable-growth",
      },
      {
        id: 2,
        text: "Health, Nutrition & WaSH",
        url: "/program-areas/health",
      },
      {
        id: 3,
        text: "Education",
        url: "/program-areas/education",
      },
      {
        id: 4,
        text: "Gender Equality",
        url: "/program-areas/gender-equality",
      },
      {
        id: 5,
        text: "Climate & Disaster Resilience",
        url: "/program-areas/climate",
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
  {
    id: 1,
    title: "Sustainable Growth",
    image: CardImage3,
    link_url: "/program-areas/sustainable-growth",
  },
  {
    id: 2,
    title: "Health, Nutrition & WaSH",
    image: CardImage1,
    link_url: "/program-areas/health",
  },
  {
    id: 3,
    title: "Education",
    image: CardImage1,
    link_url: "/program-areas/education",
  },
  {
    id: 4,
    title: "Gender Equality",
    image: CardImage2,
    link_url: "/program-areas/gender-equality",
  },
  {
    id: 5,
    title: "Climate & Disaster Resilience",
    image: CardImage3,
    link_url: "/program-areas/climate",
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
    image: Lucy,
  },
  {
    id: 2,
    name: "Siapha Kamara",
    title: "Board Member",
    image: Siapha,
  },
  {
    id: 3,
    name: "Marion Joy Minah",
    title: "Board Member",
    image: Marion,
  },
  {
    id: 4,
    name: "JOSEPH AYAMGA",
    title: "Board Member",
    image: CountryDirector,
  },
  {
    id: 5,
    name: "JEANNE KAMARA",
    title: "Board Member",
    image: Jean,
  },
  {
    id: 6,
    name: "SHEKU JAMES",
    title: "Board Member",
    image: Sheku,
  },
  {
    id: 7,
    name: "FATMATA DASSAMA",
    title: "Board Member",
    image: Fatmata,
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

export const jobs: Job[] = [
  {
    id: 1,
    title: "Security Officer - Freetown",
    description:
      "SEND Sierra Leone seeks the services of an experienced Security Officer to join our organisation and be stationed at the Freetown Program Office located along Spur Road”",
    deadline: " 10 May 2024",
    classification: "1",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Security.pdf",
  },

  {
    id: 2,
    title: "Security Officer",
    description:
      "SEND Sierra Leone seeks the services of an experienced Security Officer to join our organisation and be stationed at the Freetown Program Office located along Spur Road”",
    deadline: "10 June 2024",
    classification: "2",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Security.pdf",
  },
  {
    id: 3,
    title: "Invitation for Bids",
    description:
      "SEND Sierra Leone invites bids from experienced WASH construction firms to provide services in the construction of WASH facilities in Sierra Leone.”",
    deadline: "22 April 2024",
    classification: "1",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Invitation%20for%20Bids%20ADVERT.pdf",
  },
  {
    id: 4,
    title: "End-Line Evaluation Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced Evaluation Consultant or Consultancy Firm to conduct an for End-Term Evaluation for the “More than a Woman: Strengthening Women's Participation in Politics and Governance- Phase II”",
    deadline: ":30 April 2024",
    classification: "2",
    region: "1",
    link_url: "https://sendv2.sendsierraleone.com/documents/mtawtor.pdf",
  },

  {
    id: 5,
    title: "End-Line Evaluation Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced Evaluation Consultant or Consultancy Firm to conduct an for End-Term Evaluation for the “Improving business conditions for fishing and fish trading in Bonthe, Sierra Leone (BIFT) in Bonthe district”",
    deadline: "30 March 2024",
    classification: "1",
    region: "2",
    link_url: "https://sendv2.sendsierraleone.com/documents/mtawtor.pdf",
  },
  {
    id: 6,
    title: "Field Officer",
    description:
      "SEND Sierra Leone is actively seeking qualified individuals to fill the role of Field Officers responsible for the program's implementation in the Kono and Kenema districts. These Field Officers will be stationed within the respective communities in these districts. They should possess a high level of competence in community development work, specifically focusing on health-related initiatives.",
    deadline: "14 December 2023",
    classification: "2",
    region: "2",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Field%20Officer_SLiSL%20Final%20.pdf",
  },
  {
    id: 7,
    title: "Finance Officer",
    description:
      "SEND Sierra Leone is actively seeking qualified individuals to fill the role of Finance Officer responsible for managing and overseeing the program's financial transactions.",
    deadline: "14 December 2023",
    classification: "2",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Finance%20Officer%20Advert%20Final.pdf",
  },
  {
    id: 8,
    title: "Programme Office Intern",
    description:
      "SEND is looking for a qualified national from any of the Universities. The Intern will support the Accounts Officer in undertaking administrative, financial and accounting tasks of the organization. The right candidate will track, evaluate and process day to day activities. Responsibilities include accounts payable, accounts receivable, internal and external duties, such as vendors, clients including banks, NRA and NASSIT. The Intern may handle daily bookkeeping, preparing financial report, taxes, budgets, and assisting in ensuring proper financial policies, procedures and structures are maintained.",
    deadline: "25 October 2023",
    classification: "5",
    region: "2",
    link_url: "https://sendv2.sendsierraleone.com/documents/TOR%20-%20Programs%20Intern.pdf",
  },
  {
    id: 9,
    title: "Accounts Office Intern",
    description:
      "SEND is looking for a qualified national from any of the Universities. The Intern will support the Accounts Officer in undertaking administrative, financial and accounting tasks of the organization. The right candidate will track, evaluate and process day to day activities. Responsibilities include accounts payable, accounts receivable, internal and external duties, such as vendors, clients including banks, NRA and NASSIT. The Intern may handle daily bookkeeping, preparing financial report, taxes, budgets, and assisting in ensuring proper financial policies, procedures and structures are maintained.",
    deadline: "25 October 2023",
    classification: "5",
    region: "1",
    link_url: "https://sendv2.sendsierraleone.com/documents/Account%20Officer%20Advert.pdf",
  },
  {
    id: 12,
    title: "ASSET AUCTION",
    description:
      "SEND Sierra Leone informs the public of an proposed auction of a number of its assets to the general public.",
    deadline: "25 September 2023",
    classification: "9",
    region: "2",
    link_url: "https://sendv2.sendsierraleone.com/documents/assetsauction.pdf",
  },
  {
    id: 14,
    title: "Account Officer Intern",
    description:
      "SEND Sierra Leone seeks the services of an account officer intern to develop a comprehensive data protection policy document for the organisation.",
    deadline: " 16 June 2023",
    classification: "1",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/TOR%20-%20Account%20Officer%20Intern.pdf",
  },
  {
    id: 15,
    title: "Gender Policy Consultant (Re-Advertised)",
    description:
      "SEND Sierra Leone seeks the services of an experienced Gender Policy Consultant to develop a comprehensive gender policy document for the organisation.",
    deadline: " 16 June 2023",
    classification: "1",
    region: "2",
    link_url: "https://sendv2.sendsierraleone.com/documents/TOR-GenderPolicyFinal.pdf",
  },
  {
    id: 16,
    title: "IT Officer",
    description:
      "SEND Sierra Leone seeks the services of an IT Office to support the country program office in ensuring the organisation technological assets and support systems are in good working order for all staff.",
    deadline: "5 June 2023",
    classification: "2",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/ITTutorPewless.pdf",
  },
  {
    id: 17,
    title: "Communications Consultant",
    description:
      "SEND Sierra Leone seeks the services of a Communications Consultant to support the country program office in delivering communication deliverables aligned with the organisations digital and communications strategy",
    deadline: "5 June 2023",
    classification: "4",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/TOR-Communications%20Consultant.pdf",
  },
  {
    id: 18,
    title: "Office Assistant",
    description:
      "SEND Sierra Leone seeks the services of an Office Assistant to support the Freetown program office in ensuring the office is a conducive working environment for all staff",
    deadline: "20 May 2023",
    classification: "3",
    region: "1",
    link_url: "https://sendv2.sendsierraleone.com/documents/Office%20AssistantFreetown.pdf",
  },
  {
    id: 19,
    title: "Solar Technician",
    description:
      "SEND Sierra Leone seeks the services of an experienced Solar Technician who will work with the organisation to design and install photo voltaic systems based on site conditions.",
    deadline: "20 May 2023",
    classification: "3",
    region: "2",
    link_url: "https://sendv2.sendsierraleone.com/documents/Solar%20Technician.pdf",
  },
  {
    id: 20,
    title: "Data Protection Policy Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced Data Protection Policy Consultant to develop a comprehensive data protection policy document for the organisation.",
    deadline: "12 May 2023",
    classification: "4",
    region: "2",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/TOR-Data%20Protection%20Policy.pdf",
  },
  {
    id: 21,
    title: "Gender Policy Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced Gender Policy Consultant to develop a comprehensive gender policy document for the organisation.",
    deadline: "12 May 2023",
    classification: "4",
    region: "2",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/pewlesseducationgenderaudit.docx",
  },
  {
    id: 22,
    title: "Gender Audit Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced Gender Audit Consultant to conduct a gender audit of female education workers in Sierra Leone",
    deadline: "15 March 2023",
    classification: "4",
    region: "2",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/TOR-GenderPolicyFinal.pdf",
  },
  {
    id: 23,
    title: "Evaluation Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced Evaluation Consultant to conduct a mid-term evaluation for the Citizen Driven Climate Sensitive WASH Management project in the Kenema district.",
    deadline: "27 February 2023",
    classification: "4",
    region: "2",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/TOR%20Mid-Term%20Evaluation%20P-150.pdf",
  },
  {
    id: 24,
    title: "Project Manager",
    description:
      "SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Manager working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.",
    deadline: "10 February 2023",
    classification: "2",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/projectmanagerjd.pdf",
  },
  {
    id: 25,
    title: "Project Manager",
    description:
      "SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Manager working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.",
    deadline: "10 February 2023",
    classification: "2",
    region: "1",
    link_url: "https://sendv2.sendsierraleone.com/documents/projectmanagerjd.pdf",
  },
  {
    id: 26,
    title: "Project Officer",
    description:
      "SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Officer working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.",
    deadline: "10 February 2023",
    classification: "2",
    region: "1",
    link_url: "https://sendv2.sendsierraleone.com/documents/projectofficerjd.pdf",
  },
  {
    id: 27,
    title: "IT Tutors",
    description:
      "SEND Sierra Leone seeks the services of experienced ICT Tutors to work under the PEWLESS project aimed at increasing the ICT literacy of teachers especially female teachers in the Kailahun, Kenema and Kono districts.",
    deadline: "25 January 2023",
    classification: "3",
    region: "2",
    link_url: "https://sendv2.sendsierraleone.com/documents/ITTutorPewless.pdf",
  },
  {
    id: 28,
    title: "Feasibility Study Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced Consultant to conduct a feasibility study fo the proposed Citizen-Driven Climate Change project to guide the development of the project proposal and submission.",
    deadline: "30 January 2023",
    classification: "4",
    region: "2",
    link_url: "https://sendv2.sendsierraleone.com/documents/cdccfeasibility.pdf",
  },
  {
    id: 29,
    title: "End-Line Evaluation Consultant",
    description:
      "SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Account Officer working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.",
    deadline: " 28 December 2022",
    classification: "4",
    region: "2",
    link_url: "https://sendv2.sendsierraleone.com/documents/kependline.pdf",
  },
  {
    id: 30,
    title: "Finance Director",
    description:
      "SEND Sierra Leone seeks the services of an experienced Finance Professional to join our team as the Finance Director",
    deadline: " 25 December 2022",
    classification: "1",
    region: "2",
    link_url: "https://sendv2.sendsierraleone.com/documents/financedirectorad.pdf",
  },
  {
    id: 31,
    title: "Project Manager",
    description:
      "SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Manager working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.",
    deadline: "10 February 2023",
    classification: "2",
    region: "1",
    link_url: "https://sendv2.sendsierraleone.com/documents/projectmanagerjd.pdf",
  },
  {
    id: 32,
    title: "Principal and Teachers",
    description:
      "Nyapui Senior Secondary School of Excellence invites applications for a School Principal and School Teachers in Kenema.",
    deadline: "21 July 2022",
    classification: "2",
    region: "1",
    link_url: "https://sendv2.sendsierraleone.com/documents/nssseadvert.pdf",
  },
  {
    id: 33,
    title: "Office Assistant",
    description:
      "SEND Sierra Leone seeks the services of an Office Asssistant to support the management and maintenance of its Program Office in Port Loko District, Northern Region of Sierra Leone",
    deadline: "25 April 2022",
    classification: "1",
    region: "2",
    link_url: "https://sendv2.sendsierraleone.com/documents/nssseadvert.pdf",
  },
  {
    id: 34,
    title: "Project Manager",
    description:
      "SEND Sierra Leone seeks the services of a qualified candidate to act as a Project Manager for the In Their Lifetime project-A women's economic and leadership transformational project in Kailahun district",
    deadline: "14 February 2022",
    classification: "1",
    region: "1",
    link_url: "https://sendv2.sendsierraleone.com/documents/projectmanagerjd.pdf",
  },
  {
    id: 35,
    title: "Project Manager",
    description:
      "SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Manager working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.",
    deadline: "10 February 2023",
    classification: "2",
    region: "1",
    link_url: "https://sendv2.sendsierraleone.com/documents/projectmanagerjd.pdf",
  },
  {
    id: 36,
    title: "Advocacy Manager",
    description:
      "SEND Sierra Leone seeks the services of a Advocacy manager to support the Project manager of a Climate sensitve WASH management project to successfully plan, design, execute, coordinate and monitor the successful delivery of the project objectives and donor guidelines.",
    deadline: "19 January 2022",
    classification: "1",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/WASHAdvisorjob.pdf",
  },
  {
    id: 37,
    title: "Project Manager",
    description:
      "SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Manager working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.",
    deadline: "10 February 2023",
    classification: "2",
    region: "1",
    link_url: "https://sendv2.sendsierraleone.com/documents/projectmanagerjd.pdf",
  },
  {
    id: 38,
    title: "Project Manager",
    description:
      "SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Manager working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.",
    deadline: "10 February 2023",
    classification: "2",
    region: "1",
    link_url: "https://sendv2.sendsierraleone.com/documents/projectmanagerjd.pdf",
  },
  {
    id: 40,
    title: "Principal & Teachers",
    description:
      'The Board of Governors of "NYAPUI SENIOR SECONDARY SCHOOL OF EXCELLENCE FOR GIRLS" invites applications for the positions of Principal & Teachers:',
    deadline: "10 August 2021",
    classification: "1",
    region: "2",
    link_url: "https://sendv2.sendsierraleone.com/documents/Nyapui%20.pdf",
  },
  {
    id: 41,
    title: "Account Officer",
    description:
      "SEND Sierra Leone is looking for Account Officer for our Country Office in Kenema who will be reporting to the Finance Officer.",
    deadline: "26 July, 2021",
    classification: "2",
    region: "1",
    link_url: "https://sendv2.sendsierraleone.com/documents/Account%20Officer%20Advert.pdf",
  },
  {
    id: 42,
    title: "Driver",
    description:
      "The Driver will provide support to project and programme staff, official visitors, guests and project activities.",
    deadline: "26 July, 2021",
    classification: "2",
    region: "2",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf",
  },
  {
    id: 43,
    title: "Account Officer",
    description:
      "SEND Sierra Leone is looking for Account Officer for our Country Office in Kenema who will be reporting to the Finance Officer.",
    deadline: "26 July, 2021",
    classification: "2",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Account%20Officer%20Advert.pdf",
  },
  {
    id: 44,
    title: "Project Manager",
    description:
      "SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Manager working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.",
    deadline: "10 February 2023",
    classification: "2",
    region: "1",
    link_url: "https://sendv2.sendsierraleone.com/documents/projectmanagerjd.pdf",
  },
  {
    id: 45,
    title: "Request for Tender for SEND Sierra Leone 2020 External Audit",
    description:
      "Tenders are invited to provide external audit services for SEND Sierra Leone for the 2020 financial year. SEND’s financial year runs from 1st January to 31st December.",
    deadline: "23:59 (GMT) on 30 June 2021",
    classification: "2",
    region: "2",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf",
  },
  {
    id: 46,
    title: "Project Manager",
    description:
      "SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Manager working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.",
    deadline: "10 February 2023",
    classification: "2",
    region: "1",
    link_url: "https://sendv2.sendsierraleone.com/documents/projectmanagerjd.pdf",
  },
  {
    id: 47,
    title: "Request for Tender for SEND Sierra Leone 2020 External Audit",
    description:
      "Tenders are invited to provide external audit services for SEND Sierra Leone for the 2020 financial year. SEND’s financial year runs from 1st January to 31st December.",
    deadline: "23:59 (GMT) on 30 June 2021",
    classification: "2",
    region: "2",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf",
  },
  {
    id: 48,
    title: "Auction Notice! Auction Notice! Auction Notice!",
    description:
      "Management of SEND Sierra Leone wishes to bring to the notice of all staff and the general Public that Vehicle AIJ-366 is available for Auction sale to the General Public.",
    deadline: "19 April, 2021",
    classification: "2",
    region: "2",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf",
  },
  {
    id: 49,
    title:
      "Integrated Project for Education and Empowerment of Women and Civil Society Groups in Sierra Leone",
    description:
      "SEND Sierra Leone, funded by German Federal Ministry for Economic Cooperation (BMZ AND TERRA TECH), are implementing the project ‘Integrated Project for Education and Empowerment of Women and Civil Society Groups in Sierra Leone’ to contribute to achieving the Sustainable Development Goals.",
    deadline: " 1 March, 2021",
    classification: "1",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf",
  },
  {
    id: 50,
    title: "Consultant for the Evaluation of the More Than A Woman Project",
    description: `The "More than a Woman: Strengthening Women's Participation in Politics and Governance" project be evaluated and works to empower women in the Eastern Region of Sierra Leone to increase their participation in politics and governance.`,
    deadline: "25 February, 2021",
    classification: "1",
    region: "2",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf",
  },
  {
    id: 51,
    title: "Credit Union Manager",
    description:
      "The Credit Union Manager is responsible for the day to day running of the Credit Union. He/she is responsible for the proper technical performance of all the Credit Union's accounting and financial activities in consultation with the Board of Directors.",
    deadline: "15 January, 2021",
    classification: "2",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf",
  },
  {
    id: 52,
    title: "Account Officer",
    description:
      "The Accounts Officer is responsible for loan disbursement, opening the account, and maintaining high proficient and comprehensive credit union knowledge.",
    deadline: "15 January, 2021",
    classification: "2",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Account%20Officer%20Advert.pdf",
  },
  {
    id: 53,
    title: "Security Officer",
    description:
      "The Security Officer is responsible for the safety and security of all assets and property of the Credit Union. He/she ensures that the office premises are well tidy and the generator is in good order.",
    deadline: "15 January, 2021",
    classification: "1",
    region: "2",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Security.pdf",
  },
  {
    id: 54,
    title: "PURCHASE OF OFFICE EQUIPMENT",
    description:
      "SEND Sierra Leone is non-governmental organization registered with the Ministry of Finance and Economic Development of the Republic of Sierra Leone with a vision to contribute to a Sierra Leone where people’s rights and well-being are guaranteed.",
    deadline: "10 December, 2020",
    classification: "1",
    region: "2",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf",
  },
  {
    id: 55,
    title: "Invitation for Bids",
    description:
      "The Social Enterprise Development (SEND) Sierra Leone has received funds from the BMZ through Terra Tech Germany for the procurement of works and now invites sealed bids from eligible bidders for the construction of Kenema Model Senior Secondary School for Girls.",
    deadline: "20 November, 2020",
    classification: "1",
    region: "2",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Invitation%20for%20Bids%20ADVERT.pdf",
  },
  {
    id: 56,
    title: "Computer/IT Tutors(2)",
    description:
      "SEND Sierra Leone is looking for a Computer/IT Tutors who will assume the responsibility of training teachers in the Kenema District to ensure quality teaching service.",
    deadline: "18th November, 2020",
    classification: "2",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf",
  },
  {
    id: 57,
    title: "Engineers Without Borders(Terms of Reference)",
    description:
      "Applications must be sent to: ayamga@sendsierraleone.com and jattu@sendsierraleone.com",
    deadline: "25 November, 2020",
    classification: "2",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf",
  },
  {
    id: 58,
    title: "FINANCE DIRECTOR ALERT",
    description:
      "SEND Sierra Leone is looking for Finance Director to Oversee the performance of accurate reporting procedures and timely submission of reports to relevant donors, the SEND National Executive Council and other stakeholders.",
    deadline: "30 June, 2020",
    classification: "1",
    region: "2",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/financedirectorad.pdf",
  },
  {
    id: 59,
    title: "FINANCE OFFICER ALERT",
    description:
      "SEND Sierra Leone is looking for Finance Officer for Country Office in Kenema who will be reporting to the Finance Director.The Officer will be responsible for fixed assets transactions managements and preparing letters for cash transfers , new bank openings ,program area payroll payments etc among others.",
    deadline: "10 March, 2020",
    classification: "1",
    region: "2",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Finance%20Officer%20Advert%20Final.pdf",
  },
  {
    id: 60,
    title: "Account Officer",
    description:
      "SEND Sierra Leone is looking for Account Officer for our Country Office in Kenema who will be reporting to the Finance Officer.",
    deadline: "26 July, 2021",
    classification: "2",
    region: "1",
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Account%20Officer%20Advert.pdf",
  },
];
export const AnnualReports: AnnualReport[] = [
  {
    id: 1,
    title: "Report 01",
    text: "SEND SL Annual",
    year: "Report 2017",
    report_url:
      "https://sendv2.sendsierraleone.com/documents/SEND%20SIERRA%20LEONE%20ANNUAL%20REPORT%20(1)_2.pdf",
  },
  {
    id: 2,
    title: "Report 02",
    text: "SEND SL Annual",
    year: "Report 2018",
    report_url:
      "https://sendv2.sendsierraleone.com/documents/SEND-Annual-Report-WEB%20(2).pdf",
  },
  {
    id: 3,
    title: "Report 03",
    text: "SEND SL Annual",
    year: "Report 2019",
    report_url:
      "https://sendv2.sendsierraleone.com/documents/2019%20annual%20report2.pdf",
  },
  {
    id: 4,
    title: "Report 04",
    text: "SEND SL Annual",
    year: "Report 2020",
    report_url:
      "https://sendv2.sendsierraleone.com/documents/Anual%20Repport%202020.pdf",
  },
  {
    id: 5,
    title: "Report 05",
    text: "SEND SL Annual",
    year: "Report 2021",
    report_url: "https://sendv2.sendsierraleone.com/documents/Annual%20Report%202021.pdf",
  },
  {
    id: 6,
    title: "Report 06",
    text: "SEND SL Annual",
    year: "Report 2022",
    report_url: "https://sendv2.sendsierraleone.com/documents/Annual%20Report%202022.pdf",
  },
  {
    id: 7,
    title: "Report 07",
    text: "SEND SL Annual",
    year: "Report 2023",
    report_url: "https://sendv2.sendsierraleone.com/documents/Annual%20Report%202023%20web.pdf",
  },
];

export const Newsletters: Newsletter[] = [
  {
    id: 1,
    title: "NEWSLETTER 2022-IMPACTING TODAY FOR A BETTER TOMORROW",
    image: NewsImage1,
    url: "https://sendv2.sendsierraleone.com/documents/2022NEWSLETTER.pdf",
  },
  {
    id: 2,
    title: "Nyapui Senior Secondary School of Excellence Brochure",
    image: NewsImage2,
    url: "https://sendv2.sendsierraleone.com/documents/Nyapuischoolbrochure.pdf",
  },
  {
    id: 3,
    title: "Second Quarter Newsletter 2021. RESILIENCE THROUGH EMPOWERMENT",
    image: NewsImage3,
    url: "https://sendv2.sendsierraleone.com/documents/Resiliance%20through%20Empowerment%20(Online).pdf",
  },
  {
    id: 4,
    title: "Second Quarter Newsletter 2020. SURVIVING THROUGH COVID-19",
    image: NewsImage4,
    url: "https://sendv2.sendsierraleone.com/documents/newsletter%202nd%20qta%20(update).pdf",
  },
  {
    id: 5,
    title: "First Quarter Newsletter 2020, MAKING A CHANGE IN DIFFICULT TIMES.",
    image: NewsImage5,
    url: "https://sendv2.sendsierraleone.com/documents/SEND%20Sierra%20Leone%201st%20Newsletter%202020.pdf",
  },
  {
    id: 6,
    title:
      "April 2020 Newsletter, Debunking Things Believed to be True about the Corona Virus.",
    image: NewsImage6,
    url: "https://sendv2.sendsierraleone.com/documents/myths.pdf",
  },
  {
    id: 7,
    title: "April 2020 Newsletter, Sensitization Manual on COVID-19 Pandemic",
    image: NewsImage7,
    url: "https://sendv2.sendsierraleone.com/documents/corona.pdf",
  },
  {
    id: 8,
    title:
      "April 2020 Newsletter, NURTURING CHILDREN DURING THE COVID-19 PANDEMIC",
    image: NewsImage8,
    url: "https://sendv2.sendsierraleone.com/documents/Nyapuischoolbrochure.pdf",
  },
  {
    id: 9,
    title:
      "March 2020 Newsletter, Statement by HIS EXCELLENCY, DR. JULIUS MAADA BIO",
    image: NewsImage9,
    url: "https://sendv2.sendsierraleone.com/documents/Statement%20by%20His%20Excellency,%20Dr%20Julius%20Maada%20Bio,%20President%20of%20the%20Republic%20of%20Sierra%20Leone%20at%20the%20Second%20Press%20Conference%20on%20COVID-19.%20State%20House,%20Freetown%20-%2031%20March%202020.pdf",
  },
  {
    id: 10,
    title:
      "September 2018 Newsletter, Overcoming Social & Cultural Barriers to Political & Economic Empowerment!",
    image: NewsImage10,
    url: "https://sendv2.sendsierraleone.com/documents/SEND%20Women%20Empowerment%20Newsletter%202018-2.pdf",
  },
  {
    id: 11,
    title: "2019 Newsletters, Strengthening SEND and safeguarding staff",
    image: NewsImage11,
    url: "https://sendv2.sendsierraleone.com/documents/news%20letter%202019.pdf",
  },
];

// Health & Education Page data
export const HealthProjects: StrategicProjectType[] = [
  {
    id: 1,
    title: "Project 01",
    text: "Implementation Of The New Educational Initiative Project (Nyapui School and Computer Training Center in Kenema)",
    link_url: "/program-areas/education/1",
    status: "on going",
    description:
      "Reproduction of all or parts of this publication for educational or other non-commercial purposes is authorized without prior written permission from the copyright holders provided the source is fully acknowledged and any alterations to its integrity are indicated. Reproduction of this publication for sale or other commercial purposes without the prior written consent of the copyright holder is prohibited. The publication has been produced with financial support from the GERMAN FEDERAL MINISTRY FOR ECONOMIC COOPERATION AND DEVELOPMENT (BMZ) AND TERRA TECH FOERDERPROJEKTE E.V.",
    donor:
      "THE GERMAN FEDERAL MINISTRY FOR ECONOMIC COOPERATION AND DEVELOPMENT (BMZ) AND TERRA TECH FOERDERPROJEKTE E.V.",
    partner: "SEND SIERRA LEONE",
    location: "SIERRA LEONE",
    duration: "1st AUGUST 2020 TO 31ST OCTOBER 2022",
    budget: "",
    areas: "Education",
    problem_image: ProblemImage1,
    problem: [
      {
        id: 1,
        text: "According to the United Nations Development Programme (UNDP), the poverty rate in Sierra Leone is estimated at 77.5%. This high poverty rate can be attributed to a decade long civil war and the Ebola outbreak which further exacerbated poor national structures such as healthcare, education and agriculture. It is estimated that 70% of all school-going children had limited or no access to education during the civil war. School buildings and educational materials were destroyed while students and teachers lost their lives in the war. This incidence has affected the quality of education in the country over the years.",
      },
      {
        id: 2,
        text: "The education sector in Sierra Leone is characterized by teachers not having the requisite qualifications, lack of access to equal quality education, ineffective educational structures, lack of adequate educational infrastructure, and the absence of capacity-building systems to improve the capacity of available teachers. The Government's introduction of the Free Quality Education (FQE) in 2018 was welcomed as it guaranteed all children from pre-primary to senior secondary level access to education. This is a necessary step for the development of Sierra Leone, as the school enrolment rate and school completion rate remain low, and the illiteracy rate persistently keeps rising over the years. There is also an imbalance between gender-equitable access to education. However, the FQE policy's effectiveness in the Kenema region is under threat as the Ministry of Basic and Senior Secondary Education (MBSSE) is faced with a low operational capacity as a result of the Lack of qualified teachers, ineffective organizational structures, and poor and inadequate educational infrastructure.",
      },
    ],
  },
  {
    id: 2,
    title: "Project 02",
    text: "Promotion of Nutrition Sensitive Wash Self-Supply In the Sherbro Island in Bonthe District",
    link_url: "/program-areas/education/2",
    status: "on going",
    description:
      "The Sherbro Island in the Bonthe district in Sierra Leone is one of the areas with the worst food insecurity and poorest access to Wash facilities. This has led to alarming level of sanitation related illness as well as malnutrition. SEND Sierra Leone in partnership with development partners seeks to educate, empower and sensitize the inhabitants of this island to develop self-solutions in dealing with these issues. SEND Sierra Leone will facilitate and support the process of education and execution of development of solutions.",
    donor:
      "German Federal Ministry for Economic Cooperation and Development (BMZ) and Deutsche Welthungerhilfe (WHH)",
    partner: "SEND Sierra Leone",
    location: "Bonthe District, Southern Sierra Leone.",
    duration: "December 2018 - August 2021",
    budget: "€ 666,198",
    areas: "WaSH, Health and Nutrition",
    problem_image: ProblemImage2,
    problem: [
      {
        id: 1,
        text: "Sherbro Island in Bonthe District in Sierra Leone is one of the areas with the greatest food and nutrition insecurity, and poorest access to WaSH facilities. About 22.7% of the population in Bonthe District is considered food insecure. Less households consume a sufficiently diverse diet for their health and wellbeing. 60.7% of the people in the Sherbro Island draw their water from a river and only a few have access to adequate sanitation facilities. This causes a high prevalence of diarrhea diseases and poses a great health risk to the Island, and the District. The Sherbro Island has less credit institutions providing credit services to men and women. The only access to credit facility is through ‘osusu’, and thrift and credit for some communities,locally organized among people with a maximum loan of five hundred thousand Leones (Le 500,000) and minimum of one hundred thousand Leones (Le 100,000).",
      },
      {
        id: 2,
        text: "During preliminary assessment for the development of this project, 48.6% of respondents in the Sherbro Island consider access to clean drinking water to be a major priority and 79% consider access to VSLA/loans as necessary to improve their livelihoods and reduce vulnerability. Due to the sandy soil, large number of the communities can only be accessed by boat, which is very expensive and in most communities, income is generated through the sale of fish. Agricultural activities also remain poor and at an insignificant scale to be able to provide sufficient food and income for the people. Development activities hardly reach the people in the Island due to its riverine ecology, sandy soil, and lack of inadequate river transport facilities that limit business activities.",
      },
    ],
  },
  {
    id: 3,
    title: "Project 03",
    text: "Community Empowerment To Participate In Health Service Deliver Appreciate, Learn And Transfer(SALT) Approach",
    link_url: "/program-areas/education/3",
    status: "on going",
    description:
      "Due to decades of war and the Ebola epidemic, Sierra Leone’s health and education infrastructure are limited to urban areas. Inhabitants in rural areas do not without access to quality health and education infrastructure and as such do not receive healthcare services and are mostly illiterate. Healthcare providers are also without the requisite training to engage patients effectively and are unable to handle complex health situations leading to worsening of health issues in the communities. Also due to lack of education and societal stereotypes, rural communities are unable and receive in some cases healthcare services.",
    donor: "GIZ",
    partner: "SEND Sierra Leone",
    location: "Kailahun",
    duration: "9 months",
    budget: "€ 100,000",
    areas: "Community Empowerment to participate in Service Delivery.",
    problem_image: ProblemImage3,
    problem: [
      {
        id: 1,
        text: "- Poor quality of healthcare service by healthcare providers.",
      },
      {
        id: 2,
        text: "- Lack of public awareness on safe healthcare practices.",
      },
      {
        id: 3,
        text: "- Lack of adequate healthcare structures and the lack of trust between communities and institutions.",
      },
      {
        id: 4,
        text: "- Due to traditional stereotypes accessing healthcare is difficult.",
      },
    ],
  },
  {
    id: 4,
    title: "Project 04",
    text: "Enhanced Community Health Resilience Project",
    link_url: "/program-areas/education/4",
    status: "on going",
    description:
      "Reproduction of all or parts of this publication for educational or other non-commercial purposes is authorized without prior written permission from the copyright holders provided the source is fully acknowledged and any alterations to its integrity are indicated. Reproduction of this publication for sale or other commercial purposes without the prior written consent of the copyright holder is prohibited. The project is funded and supported by Engineers without Borders-DK and Civil Soceity in Development",
    donor: "Engineers without Borders-Denmark and Civil Society in Development",
    partner: "SEND Sierra Leone",
    location: "Kenema District",
    duration: "October 2021 - May 2022",
    budget: "$89,860",
    areas: "Healthcare",
    problem_image: ProblemImage4,
    problem: [
      {
        id: 1,
        text: "- With 56.8% of the Sierra Leonean population living in poverty, 12.9% of the population living under extreme poverty and the food poverty rate standing at 54.5%, Sierra Leone faces considerable challenges in been able to achieve the Sustainable Development Goals (SDGs) 2030.The country ranks 182 out of 189 in the 2020 Global Human Development Index with a Human Development Index of 0.452 and life expectancy 54.7 years.",
      },
      {
        id: 2,
        text: "- In Kenema district, the incidence of extreme poverty affects 24.2% of the population, a statistic which is worsened due to the economic effects of the COVID-19 pandemic which caused widespread loss of livelihoods for rural communities heavily dependent on petty-trading and agriculture.",
      },
      {
        id: 3,
        text: "- In 2017, it was estimated that 1,120 mothers died for every 100,000 live births in Sierra Leone. With one of the highest maternal mortalities globally, the mortality rates of neonates, infants and children under five are also amongst the highest globally, at 34,81 and 109 deaths per 1,000 live deaths respectively. These figures represent the difficulty and challenges women and children face in Sierra Leone in accessing health care. The health care system is characterised with lack of sufficient health care facilities, under resourced healthcare facilities, poor management culture of healthcare facilities, non-existent emergency facilities and poor healthcare practices.",
      },
      {
        id: 4,
        text: "- Boama, a main town in the rural areas of Kenema district with a population of 3,000 inhabitants surrounded with dependent peripheral villages with a total population of 4,000 inhabitants lacks a health care facility. The lack of any health care facility within 11 kilometres of Boama and its surrounding villages has resulted in high mortality rates of its population and ranking as one of the worst communities in terms of access to healthcare services in the district. The closest health facility is a clinic in Faama, a community 11 kilometres away, however with a poor road network, limited access to motorized transportation, high poverty rates this journey over 11 kilometres lasts over an hour. In Boama, women regularly deliver babies on the way to the Faama health clinic.",
      },
    ],
  },
];

// Governance & Women Empowerment Page data
export const GovtProjects: StrategicProjectType[] = [
  {
    id: 1,
    title: "Project 01",
    text: "Strengthening Community Led Accountability to Improve Service Delivery(SABI)",
    link_url: "/program-areas/gender-equality/1",
    status: "on going",
    description:
      "The Western Area Rural District in Sierra Leone is a prime example of the discrimination and unfair low representation of women in governance despite representing over 50% of the population. Out of the 27 district councillors, only three are women. Of the 8 MPs, only 2 are women, and only 5 women are among the 121 tribal heads who constitute the traditional governance structure in the District. Poor road networks coupled with unstable and inexistent electricity supply in some areas makes it difficult or impossible in some areas for women to diversify from subsistence farming as that is the only way to provide for their families.",
    donor: "Christian Aid",
    partner: "SEND Sierra Leone",
    location:
      "Western Area Rural District and the Eastern province of Sierra Leone.",
    duration: "",
    budget: "",
    areas: "Governance",
    problem_image: HangingDrip,
    problem: [
      {
        id: 1,
        text: "- Lack of accountability in health service delivery healthcare providers.",
      },
      {
        id: 2,
        text: "- Poor quality of healthcare service by healthcare providers.",
      },
      {
        id: 3,
        text: "- Lack of public awareness on safe healthcare practices.",
      },
      {
        id: 4,
        text: "- Lack of adequate healthcare structures and the lack of trust between communities and institutions.",
      },
    ],
  },
  {
    id: 2,
    title: "Project 02",
    text: "Strengthening Women’s Participation in Politics and Governance",
    link_url: "/program-areas/gender-equality/2",
    status: "on going",
    description:
      "In Sierra Leone, women and youth make up for over 70% of the population but women are the least represented in governance on the community, district and national level. Out the 132 ordinary members of parliament, only 16 are women leading to less than 15% representation. Women and the youth are the most affected by decisions made through the legislature and executive but do not have an active say in those decisions. SEND Sierra Leone together with its development partners is keen to strengthen the collective voice of women, increase their knowledge and capacity on gender and accountability at the community, district and national level. We are also committed to increasing the national advocacy and networking on women participation in decision -making, governance and politics.",
    donor: "The Government of Ireland",
    partner: "SEND Sierra Leone",
    location:
      "Eastern Province (Kailahun, Kenema and Kono districts), Sierra Leone",
    duration: "1/4/2019 - 30/04/2020 with possibility of extension",
    budget: "€300,000 for the first year.",
    areas: "Women in governance.",
    problem_image: Women,
    problem: [
      {
        id: 1,
        text: "In Sierra Leone women and youth make up more than 70 percent of the population and are the main labour force in the economy, yet they are the most impoverished and least represented in the governance of the country. Of the 132 Ordinary Members of Parliament elected in the 2018 General Election, only 16 (12 percent) are women. In 2018 only 2 out of the 14 Paramount Chief MPs in Parliament are women.",
      },
      {
        id: 2,
        text: "Women’s participation in governance at community, district and national levels is limited to handful of positions. Moreover, a decade after the passage of the Four Gender Acts, which were intended to free women and girls from the bondage of traditional beliefs and practices, violence against women continues unabated.",
      },
      {
        id: 3,
        text: "Existing international laws and policies advocate for gender equity in decision-making and political participation, as outlined in documents such as the Convention on the Elimination of All Forms of Discrimination against Women (CEDAW), and UN Security Council Resolution 1325 on Women, Peace and Security. More recently, the UN General Assembly in a Joint Declaration on “Advancing Women’s Political Participation” declared, “women’s political participation is fundamental to democracy and essential to the achievement of sustainable development and peace”. However, Sierra Leone is long way from achieving the standards laid out in international codes, with structural discrimination against women entrenched across all levels and institutions of society. This inhibits the participation of women in public life and decision-making at all levels. The 2018 EU Election Observation Mission report findings (pages 28-29) indicate that women were clearly disadvantaged in these elections. None of the major parties had a woman as a presidential candidate or running mate. There were two female presidential candidates, however they only gained 0.5% and 0.2% in the first round. There were four female running mates in a field of 16. The number of female parliamentary candidates was 100 out of 795 (12.6%). While the total number of female MPs slightly increased to 18; taking into account the increase in the overall size of the parliament, this election marked no progress in the percentage of female MPs at 12.3%. Sierra Leone is ranked 144 out of 192 in the world for the lowest percentages of elected female politicians. There were 73 women elected out of the 489 local councilors (15%). There was a palpable lack of will among male politicians to address the reasons for low female nominations.",
      },
    ],
  },
  {
    id: 3,
    title: "Project 03",
    text: "KAILAHUN WOMEN IN GOVERNANCE",
    link_url: "/program-areas/gender-equality/3",
    status: "on going",
    description:
      "Kailahun is a district in Sierra Leone bordered by both Liberia and Guinea and has been the first point of entry of two calamities to befall Sierra Leone-The Civil War and Ebola. This district therefore bears the resembles of a rural community cut of from development. This is as a result of the absence of quality health and education infrastructure. In the Kailahun district, women are faced with heightened rural stereotypes and discrimination. Women in Kailahun are not able to participate in governance and are not part of the decision-making process. SEND Sierra Leone and its developmental partners are keen on educating and empowering women not only to be able to actively contribute to governance and decision-making process but also to be elected to key governance positions.",
    donor: "Irish Aid",
    partner: "SEND Sierra Leone",
    location: "Kailahun",
    duration: "2017 - 2021",
    budget: "€348 000",
    areas: "Women in Governance.",
    problem_image: Kailahun,
    problem: [
      {
        id: 1,
        text: "Sierra Leone is slowly recovering from the Ebola epidemic that erupted in May, 2014 and quickly spread to all the 14 administrative districts. By May 2015, the virus had infected 12,208 men, women and children killing over 3,800 of its victims. The economic and social impact has been equally severe. A World Bank January, 2015 Report approximates the loss to the Gross Domestic Product (GDP) caused by Ebola to be US$ 920 million. Iron ore mining companies which are key sources of foreign exchange earnings have closed down, exacerbating the unemployment situation in the country. The report emphasis that women especially those in informal economic activities livelihoods were hit hardest by the Ebola crisis.",
      },
      {
        id: 2,
        text: "Sierra Leone is among the poorest countries in the world. Nearly 60% of its 6.2 million populations live below the poverty line .The majority of the poor are smallholder farmers. The country has a very low score on the Human Development Index, ranking 183 out of 187 in 2013 (UNDP Human Development Report 2011). Sierra Leone’s low rank on the Gender Inequality Index, ranking 137 out of 146, shows the loss in potential human development due to gender inequalities in reproductive health, empowerment and economic activity (GII, UNDP 2011). Kailahun is among the four top poorest districts in the country, but it is a major export income earner. It is the largest cocoa producer in the country as well as key producer of rice, the staple food. Sharing border with Liberia and Guinea has made Kailahun among the most fragile location in the country. Kailahun was where the civil war of the 1990s started and the last place where the rebels were disarmed. It reported the first cases of Ebola infection and death, and has recorded 565 infections, 228 death, 202 survivors and 620 orphans. Fortunately, since December 2014, Kailahun has not reported any new Ebola case.",
      },
      {
        id: 3,
        text: "SEND Sierra Leone operational communities of Beude and Koindu in the Kissi Tongi chiefdom recorded the initial victims of the Ebola crisis and it lost more than 40 of its direct beneficiaries especially women in the livelihood program. In addition, SEND was forced to reduce developmental activities and convert the resources to deliver relief .The staff and KWIGN members worked with District Ebola Relief Task Force to conduct Ebola prevention education across the district In Sierra Leone, rural women are particularly affected by poverty, a situation aggravated by the Ebola pandemic as underscored by the World Bank cited. Illiteracy, combined with an ingrained sense of stereotypical roles and responsibilities, have left many women without the confidence to become leaders or involve in governance. Harmful traditional practices, for example early marriage, FGM and secret societies increase the vulnerability of women and contribute to their discrimination.",
      },
    ],
  },
  {
    id: 4,
    title: "Project 04",
    text: "WOMEN IGNITING THE SPIRIT OF ENTERPRENEURSHIP",
    link_url: "/program-areas/gender-equality/4",
    status: "on going",
    description:
      "The Western Area Rural District in Sierra Leone is a prime example of the discrimination and unfair low representation of women in governance despite representing over 50% of the population. Out of the 27 district councillors, only three are women. Of the 8 MPs, only 2 are women, and only 5 women are among the 121 tribal heads who constitute the traditional governance structure in the District. Poor road networks coupled with unstable and inexistent electricity supply in some areas makes it difficult or impossible in some areas for women to diversify from subsistence farming as that is the only way to provide for their families. The lack of social awareness and high levels of rural society stereotypes has increased the incidence of gender based violence in schools and homes against women which leads to injuries, sexual related diseases(STDs) and even death. SEND Sierra Leone and its development partner TROCAIRE together with beneficiaries developed this project to focus on capacity building ranging from skills training, business trainings and development, agricultural support, financial support, and support for women to access vocational, adult and tertiary education to empower and prepare them to seek opportunities in the job market. Other proposed interventions include provision of storage facilities to support the expansion of businesses on fish, construction of market centres with adequate sanitary facilities and encouraging women participation in decision making process in the community.",
    donor: "Irish Aid through TROCAIRE",
    partner: "SEND Sierra Leone",
    location: "Western Area Rural District",
    duration: "9 months (1st April – 31st December, 2019)",
    budget: "€55,000",
    areas: "Governance",
    problem_image: IgnitingWomen,
    problem: [
      {
        id: 1,
        text: "The Western Area Rural District has a total population of 442,951 of which 219,542 and 223,409 are respectively men and women. Despite being more than men, women’s participation in decision making in the District Council is appalling. Out of the 27 district councillors, only three are women. Of the 8 MPs, only 2 are women, and only 5 women are among the 121 tribal heads who constitute the traditional governance structure in the District.",
      },
      {
        id: 2,
        text: "Poor road network hinders women access to market centres for local trade. This limits their income earning capacity to support themselves and their dependents. Lack of regular electricity hinders their trade in perishable goods such as fish, and agricultural products. The lack of social awareness and available social options greatly contribute to the increasing rates of Gender Based Violence in homes and in schools, which expose them to sexual and reproductive health risks such as STIs.",
      },
      {
        id: 3,
        text: "Low education among women in Western Rural District also limit their choices and options, contributing to inferiority complex among them, and their inability to unite as a group to fight for the empowerment and liberation of themselves. As a result, there is widening gender inequality in slum communities and rural villages, increased sexual harassment, and stigmatization of women, early marriage as a source of livelihood, which contributes to their overreliance on men. Lack of skills trainings put women in the communities around the district in the lower scale of economic rankings of men and women. The associated consequences are increased poverty among women and continuous marginalisation. These major challenges women face are aligned to the challenges identified in Pillar 8 of the Sierra Leone Government’s Agenda for Prosperity, which affirms the patriarchal nature of Sierra Leone society. Discriminatory customs continue to dehumanize and marginalise women across communities in the country. It confirms early marriage, increasing rates of GBV, high illiteracy among women, and their limited options to employment as other major challenges that affect the empowerment and progress of women. Women’s access to education, health care and political decision making are limited. It is estimated that in the just concluded national elections, women constitute only 13% of the number of MPs in the Country’s Parliament. As result, national development and cohesion is threatened by the disparity between men and women in the governance of the country.",
      },
    ],
  },
];

// Livelihood, Food & Nutrition Security Page data
export const LivelihoodProjects: StrategicProjectType[] = [
  {
    id: 1,
    title: "Project 01",
    text: "CITIZEN DRIVEN CLIMATE SENSITIVE WASH MANAGEMENT PROJECT",
    link_url: "/program-areas/climate/1",
    status: "on going",
    description:
      "Reproduction of all or parts of this publication for educational or other non-commercial purposes is authorized without prior written permission from the copyright holders provided the source is fully acknowledged and any alterations to its integrity are indicated. Reproduction of this publication for sale or other commercial purposes without the prior written consent of the copyright holder is prohibited. The project is funded and supported by Engineers without Borders-DK",
    donor: "Engineers without Borders-Denmark",
    partner: "SEND Sierra Leone & World Hope International",
    location: "Kenema District",
    duration: "December 2021 - May 2024",
    budget: "Le 2,194,153,833,33",
    areas: "GWASH and CLIMATE RESILIENCE",
    problem_image: CitizenWash,
    problem: [
      {
        id: 1,
        text: "TWith 56.8% of the Sierra Leonean population living in poverty, 12.9% of the population living under extreme poverty and the food poverty rate standing at 54.5%, Sierra Leone faces considerable challenges in been able to achieve the Sustainable Development Goals (SDGs) 2030.The country ranks 182 out of 189 in the 2020 Global Human Development Index with a Human Development Index of 0.452 and life expectancy 54.7 years. The COVID-19 pandemic and its resultant lockdown effects has worsened the country’s economic recovery as it continues to suffer from the twin shocks of the 2014-2017 Ebola pandemic and the global commodity price slump.",
      },
      {
        id: 2,
        text: "TEven though water and sanitation are among the high priorities for the Government of Sierra Leone as stated in its National Development Plan 2019-2023, there has been very adoption of climate robust WASH. Changed weather patterns are recorded in 2017 to have resulted in an increasing number of wells being dry during parts of the year, a situation which has resulted in the increased incidence of outbreaks of cholera and water-borne diseases. Over a 17-year period access to water in rural communities has increased by 22% from 25% in 2000 to 47% in 2017, a statistic that needs to double in less than a decade to reach the SDG target of 100% in the year 2030.",
      },
      {
        id: 3,
        text: "Sierra Leone is ranked as the third most vulnerable country in relation to the adverse effects of climate change due to a high level of multi-dimensional fragility. In 2018, after a Country Policy and Institutional Assessment (CPIA), Sierra Leone recorded a low score of 3.1 which indicated a 0.1 decline from the previous year. This fragility represents a high infrastructure debt stock, weak governance institutions, low human capacity and high youth unemployment estimated to be 70% among other factors. The Government and decentralized governance structure are aware of the fragility pressures but lack the capacity to adequately address these challenges thereby exacerbating the effects over time.",
      },
      {
        id: 4,
        text: "In Kenema district, the incidence of extreme poverty affects 24.2% of the population, a statistic worsened by only 22% of the population having access to safe water mainly concentrated in the urban center of Kenema township. The district experiences excessive rainfall which destroys and/or leads to contamination of the scarce water sources, farmland and crops. The health risks induced by flooding, changed rain patterns, and insufficient WASH infrastructure puts additional pressures on the very fragile health system as water-borne disease and cholera outbreaks are annual recurrent incidents.",
      },
      {
        id: 5,
        text: "There also a exists a poor culture in the maintenance of WASH facilities. According to statistics, it takes over a year for 28.9% of water system to be repaired and over a month for 60.5% of the water systems to be repaired. In rural communities where user fees the main source of revenue used to maintain water facilities; it was recorded that 89.4% of the population who have access to these water points do not pay for water.",
      },
    ],
  },
  {
    id: 2,
    title: "Project 02",
    text: "ENHANCING CLIMATE RESILIENCE IN RURAL SIERRA LEONE PROJECT",
    link_url: "/program-areas/climate/2",
    status: "on going",
    description:
      "Reproduction of all or parts of this publication for educational or other non-commercial purposes is authorized without prior written permission from the copyright holders provided the source is fully acknowledged and any alterations to its integrity are indicated. Reproduction of this publication for sale or other commercial purposes without the prior written consent of the copyright holder is prohibited. The project is funded and supported by Engineers without Borders-DK and Civil Soceity in Development",
    donor: "Engineers without Borders-Denmark and Civil Society in Development",
    partner: "SEND Sierra Leone",
    location: "Kenema District",
    duration: "",
    budget: "$48,406",
    areas: "WASH and CLIMATE ACTION",
    problem_image: ClimateChange,
    problem: [
      {
        id: 1,
        text: "In Kenema district, the incidence of extreme poverty affects 24.2% of the population, a statistic which is worsened due to the economic effects of the COVID-19 pandemic, which caused widespread loss of livelihoods for rural communities heavily dependent on petty trading and agriculture. UNICEF estimates that only 22% of the population in Kenema district have access to potable water. With high poverty levels in the Kenema district, developing measures to adapt to climate change has been minimal, worsening access to potable water for most rural communities.",
      },
      {
        id: 2,
        text: "Ranked the third most vulnerable country globally only after Bangladesh and Guinea Bissau, Sierra Leone faces harsh adverse climate change effects due to its high level of multi-dimensional fragility. With only 47% of the rural population having access to water, achieving the United Nation’s Sustainable Development Goals in 2030 presents a challenge for the country to succeed. According to a national survey (2017), climate change is causing the drying of wells at critical times of the year due to weather patterns. This poses further challenges in achieving the SDG targets. With fragile health systems, the persistent occurrence of cholera outbreaks and water-borne diseases, rural communities are threatened with health risks related to flooding, insufficient WASH infrastructure, and changed rainfall patterns.",
      },
    ],
  },
  {
    id: 3,
    title: "Project 03",
    text: "STRENGTHENING WOMEN AND YOUTH-LED BUSINESS FOR LOCAL ECONOMIC DEVELOPMENT PROJECT",
    link_url: "/program-areas/climate/3",
    status: "on going",
    description:
      "This project aims to promote and improve access to finance and fishing equipment. This will enable those affected to generate more income in the long term and thus transform their livelihoods. This will be achieved through access to improved fishing equipment, appropriate fishing and processing machinery, access to finance and gender education; capacity building of women's groups and training for fishermen and fisherwomen in improved techniques, especially in the use of sustainable fishing and adaptation techniques and technologies, business and marketing practices and skills.",
    donor: "UNDP",
    partner: "SEND Sierra Leone",
    location: "KAMBIA AND PUJEHUN DISTRICTS",
    duration: "SEPTEMBER 2021-NOVEMBER 2021",
    budget: "110,000 Dollars",
    areas:
      "Livelihood Security, Access to Finance and Market Opportunities,Improved Gender Relations, Women Empowerment",
    problem_image: PromotingResilience,
    problem: [
      {
        id: 1,
        text: "Out of all the 16 districts, the border districts of Pujehun and Kambia are hit hard by these issues, as they form part of the poorest sections of Sierra Leone.These two border districts stand at 87.2% & 77% poverty rates, respectively. In these areas, men earn three times more than women in wage employment and 2.5 times more in self-employment and two times more in agriculture. These issues have been further heightened by climate-induced shocksand the COVID 19 pandemic.",
      },
      {
        id: 2,
        text: "As climate change affects weather patterns causing heavier than normal rainfall, droughts and general environmental instability, the fishing communities of Pujehun and farming communities of Kambia are adversely hit economically. This was worsened with the COVID-19 pandemic, which necessitated the closure of borders and limiting of movement in the country. Women bore the brunt of this as 65% of women in these areas engaged in border trade and rely on this to feed their families. The Quick Action Economic Response Programme of 2020 indicated a rise in household expenditure ranging from 58.5% to 60%. Additionally, weekly income generated by their businesses dropped significantly as surveys of the informal sector indicated a 68% drop in weekly income of the informal sector. This has contributed to a 30% increment in the number of households that have reduced their meals.",
      },
      {
        id: 3,
        text: "Sierra Leone is a West African coastal country with approximately 7.1 million people, divided into 16 districts. Despite the 10 years civil war, which lasted from 1991-2002, Sierra Leone has worked tirelessly to rebuild the nation, focusing on peace promotion and strengthening state institutions. These are particularly important as the nation struggles with issues concerning gender inequality in the form of Gender-Based Violence, higher unemployment coupled with lower wages and high instances of food insecurity. As a result, in 2018 the Gender Inequality Index score for the nation was 0.644, ranking very low at 153 out of 170 countries.",
      },
      {
        id: 4,
        text: "Coupled with this, the Kambia district is faced with many logging activities that expose the communities to drought, flooding in the rains and a loss of livelihood opportunities. Pujehun faces issues pertaining to mining. Mining activities by companies in the district exposes the communities to many environmental hazards that leave them vulnerable to climate-induced shocks. The Sulima beach in Pujehun district will be used as a harbour for transporting bauxites and rutile in the district. This reduces the economic livelihood of the communities that are reliant on fishing. Reports have indicated that extractive mining companies’ economic activities have resulted in reducing fish in the community.",
      },
    ],
  },
  {
    id: 4,
    title: "Project 04",
    text: "IMPROVED ACCESS TO SUSTAINABLY MANAGED MICRO-FINANCE AND WaSH SYSTEMS – WaSH SELF SUPPLY PROJECT",
    link_url: "/program-areas/climate/4",
    status: "on going",
    description:
      "Reproduction of all or parts of this publication for educational or other non-commercial purposes is authorized without prior written permission from the copyright holders provided the source is fully acknowledged and any alterations to its integrity are indicated. Reproduction of this publication for sale or other commercial purposes without the prior written consent of the copyright holder is prohibited. The publication has been produced with financial support from the European Union.",
    donor: "EUROPEAN UNION",
    partner: "SEND SIERRA LEONE, MOPADA, WELTHUNGERHILFE (WHH)",
    location: "KENEMA",
    duration: "34 MONTHS",
    budget: "1,465,268.70 Euros",
    areas: "WASH, ACCESS TO FINANCE, GENDER, HEALTH AND HYGIENE",
    problem_image: ImprovedImage,
    problem: [
      {
        id: 1,
        text: "In Sierra Leone, malnutrition is characterised by both by widespread food insecurity and poor WASH situation. Between 59.7% and 49.8% in rural and urban areas are respectively food insecure due low educational opportunities, low agricultural productivity, absence of rural income diversification sources, low access to imported farm inputs, poor infrastructure and market access.",
      },
      {
        id: 2,
        text: "In Kenema District, 5 of the 17 chiefdoms are food insecurity above 70%. The Global Acute Malnutrition is 5.7% higher above the international average. In Sierra Leone, over 70% of women make up the agricultural workforce ranging from production, processing to marketing. Despite this, women are marginalized when it comes to decision making and governance.",
      },
    ],
  },
];

export const ProfileManuals: ProfileManual[] = [
  {
    id: 1,
    image: ManualImage1,
    link_url: "https://sendv2.sendsierraleone.com/documents/Women%20Manifesto%20Final.pdf",
  },
  {
    id: 2,
    image: ManualImage2,
    link_url: "https://sendv2.sendsierraleone.com/documents/Advocacy%20Strategy%20Document.pdf",
  },
  {
    id: 3,
    image: ManualImage3,
    link_url: "https://sendv2.sendsierraleone.com/documents/womencandidatestrainingmanual.pdf",
  },
  {
    id: 4,
    image: ManualImage4,
    link_url: "https://sendv2.sendsierraleone.com/documents/handbook.pdf",
  },
  {
    id: 5,
    image: ManualImage5,
    link_url:
      "https://sendv2.sendsierraleone.com/documents/GTA%20Final%20Report.pdf",
  },
  {
    id: 6,
    image: ManualImage6,
    link_url:
      "https://sendv2.sendsierraleone.com/documents/GTA%20Final.pdf",
  },
  {
    id: 7,
    image: ManualImage7,
    link_url:
      "https://sendv2.sendsierraleone.com/documents/vsla%20manual.pdf",
  },
  {
    id: 8,
    image: ManualImage8,
    link_url: "https://sendv2.sendsierraleone.com/documents/manual.pdf",
  },
  {
    id: 9,
    image: ManualImage9,
    link_url:
      "https://sendv2.sendsierraleone.com/documents/health&hygiene%20manual.pdf",
  },
  {
    id: 10,
    image: ManualImage10,
    link_url:
      "https://sendv2.sendsierraleone.com/documents/food%20and%20nutrision%20manual.pdf",
  },
  {
    id: 11,
    image: ManualImage11,
    link_url:
      "https://sendv2.sendsierraleone.com/documents/GMF%20MANUAL%20for%20SEND%20final.pdf",
  },
  {
    id: 12,
    image: ProfileManualImage1,
    link_url: "https://sendv2.sendsierraleone.com/documents/Climate%20Profile%20.pdf",
  },
  {
    id: 13,
    image: ProfileManualImage2,
    link_url:
      "https://sendv2.sendsierraleone.com/documents/Health,%20Hygiene,%20Sanitation%20&%20Water%20Profile-1.pdf",
  },
];

export const donationListings: DonationListingType[] = [
  {
    id: 1,
    title: "little help can make a big difference",
    image: DonateListingImage,
  },
  {
    id: 2,
    title: "little help can make a big difference",
    image: HappyCommunity,
  },
  {
    id: 3,
    title: "little help can make a big difference",
    image: HeroImage,
  },
];
