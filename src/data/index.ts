import { directors, jobClassification, jobs, regions } from "../constants";

export async function getDirectors() {
  return directors;
}

export async function getDirector(id: number) {
  let director = directors.find((director) => director.id === id);
  return director ?? null;
}

export async function getJobClassification() {
  return jobClassification;
}

export async function getJobs() {
  return jobs;
}

export async function getRegions() {
  return regions;
}
