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
  text: string;
}
