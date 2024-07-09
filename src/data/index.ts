import { directors, GovtProjects, HealthProjects } from "../constants";

export async function getDirectors() {
  return directors;
}

export async function getDirector(id: number) {
  let director = directors.find((director) => director.id === id);
  return director ?? null;
}

export async function getHealthProject(id: number) {
  let project = HealthProjects.find((project) => project.id === id);
  return project ?? null;
}

export async function getGovernanceProject(id: number) {
  let project = GovtProjects.find((project) => project.id === id);
  return project ?? null;
}
