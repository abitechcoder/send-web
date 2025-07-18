export interface Link {
  id: number;
  text: string;
  url: string;
  child?: null | Link[] | any;
}

export interface SideNavLink {
  id: number;
  text: string;
  icon?: string;
  icon_active?: string;
  url: string;
}

export interface ProgramCardProps {
  id?: number;
  image: string;
  title: string;
  link_url?: string;
}

export interface IdentityCardProps {
  id: number;
  title: string;
  text: string;
}

export interface Director {
  id: number;
  name: string;
  title: string;
  image: string;
}

export interface StrategicPlan {
  id: number;
  title: string;
  image: string;
  document_url: string;
}

export interface StrategicPlan {
  id: number;
  title: string;
  document_url: string;
}

export interface GeneralList {
  id: number;
  title: string;
  // value: string;
}

export interface Job {
  id: number;
  title: string;
  description: string;
  classification: string;
  region: string;
  deadline: string;
  link_url?: string;
}
export interface AnnualReport {
  id?: number;
  title: string;
  image: string;
  report_url: string;
}

export interface ReportType {
  id: number;
  title: string;
  image_url: string;
  report_url: string;
  report_type: string;
}

export interface Newsletter {
  id?: number;
  title: string;
  image: string;
  url: string;
}

export interface ProfileManual {
  id?: number;
  image: string;
  link_url: string;
}

export interface StrategicProjectType {
  id?: number;
  title: string;
  text: string;
  link_url: string;
  status: string;
  description: string;
  donor: string;
  partner: string;
  location: string;
  duration: string;
  budget: string;
  areas: string;
  problem_image: string;
  problem: any;
}
export interface Overview {
  name: string;
  value: string;
  imgURL: string;
  number: string;
  color: string;
}
export interface Admin {
  page: string;
  button: string;
  filter?: boolean;
  searchBar?: boolean;
  sortBy?: string;
  placeholder?: string;
}
export interface partner {
  partnerLogo: string;
}
export interface Photo {
  title?: string;
  subtitle?: string;
  image?: string;
}
export interface Button3 {
  white?: boolean;
  name: string;
  py: number;
  px: number;
}
export interface PhotoCard {
  ImgURL?: boolean;
  description?: string;
  Video?: boolean;
}

export interface DonationListingType {
  id: number;
  title: string;
  image: string;
}

export interface CaseStoryType {
  id: number;
  name: string;
  image: string;
  title: string;
  text: string;
  createdAt: string;
  link_url: string;
}

export interface SMgtTeamType {
  id?: number;
  name: string;
  title: string;
  image: string;
}

export interface PartnerProps {
  id: number;
  logo: string;
  name: string;
}

export interface TeamMemberProps {
  id: number;
  role: string;
  name: string;
  image: string;
  board_member: string;
  facebook_profile: string;
  instagram_profile: string;
}

export interface GalleryPropsType {
  id: number;
  image: string;
  title: string;
  linkUrl: string;
  type: string;
  photos: string;
}

export interface JobPropsType {
  id: number;
  link_url: string;
  title: string;
  description: string;
  deadline: string;
  classification: string;
  region: string;
}

export interface IdentityPropsType {
  id: number;
  text: string;
  mission: string;
  vision: string;
  value: string;
  principle: string;
}

export interface HomePageProps {
  id: number;
  title: string;
  subtitle: string;
  text: string;
}

export interface TestimonialProps {
  id: number;
  name: string;
  image: string;
  title: string;
  text: string;
  link_url: string;
}

export interface ProjectType {
  id: number;
  name: string;
  description: string;
  donor: string;
  status: string;
  partner: string;
  location: string;
  duration: string;
  budget: string;
  program_area: string;
  report: string;
  problem_image: string;
  problem_desc: string;
  solution_desc: string;
  beneficiaries_desc: string;
}

export interface ProgramType {
  id: number;
  image: string;
  title: string;
  overview: string;
}
