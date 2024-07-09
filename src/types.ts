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
