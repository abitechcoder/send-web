export interface Link {
  id: number;
  text: string;
  url: string;
  child?: null | Link[];
}

export interface ProgramCardProps {
  id?: number;
  image: string;
  title: string;
  link_url: string;
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
  title: string;
  text: string;
  year: string;
  report_url: string;
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
