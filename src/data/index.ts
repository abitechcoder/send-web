import {
  jobClassification,
  regions,
} from "../constants";
import axios from "../axios/index";

export async function getJobClassification() {
  return jobClassification;
}

export async function getRegions() {
  return regions;
}

export async function getPartners() {
  const { data } = await axios.get("/partners");
  return data;
}

export async function deletePartner(id: number) {
  const { data } = await axios.delete(`/partners/${id}`);
  return data;
}

export async function getReports() {
  const { data } = await axios.get("/reports");
  return data;
}

export async function deleteReport(id: number) {
  const { data } = await axios.delete(`/reports/${id}`);
  return data;
}

export async function getTeamMembers() {
  const { data } = await axios.get("/team");
  return data;
}

export async function deleteTeamMember(id: number) {
  const { data } = await axios.delete(`/team/${id}`);
  return data;
}

export async function getAllGallery() {
  const { data } = await axios.get("/gallery");
  return data;
}

export async function deleteGallery(id: number) {
  const { data } = await axios.delete(`/gallery/${id}`);
  return data;
}

export async function getAllJobs() {
  const { data } = await axios.get("/job");
  return data;
}

export async function deleteJob(id: number) {
  const { data } = await axios.delete(`/job/${id}`);
  return data;
}

export async function getIdentity(id: number) {
  const { data } = await axios.get(`/identity/${id}`);
  return data;
}

export async function updateIdentity(id: number, body: any) {
  const { data } = await axios.put(`/identity/${id}`, body);
  return data;
}

export async function getHomeData(id: number) {
  const { data } = await axios.get(`/home/${id}`);
  return data;
}

export async function updateHomeData(id: number, body: any) {
  const { data } = await axios.put(`/home/${id}`, body);
  return data;
}

export async function getTestimonials() {
  const { data } = await axios.get("/testimonials");
  return data;
}

export async function deleteTestimonial(id: number) {
  const { data } = await axios.delete(`/testimonials/${id}`);
  return data;
}

export async function getProgramAreas() {
  const { data } = await axios.get("/programs");
  return data;
}

export async function getProgramAreaById(id: number) {
  const { data } = await axios.get(`/programs/${id}`);
  return data;
}
export async function deleteProgramArea(id: number) {
  const { data } = await axios.delete(`/programs/${id}`);
  return data;
}

export async function getProjects() {
  const { data } = await axios.get("/projects");
  return data;
}

export async function getProjectById(id: number) {
  const { data } = await axios.get(`/projects/${id}`);
  return data;
}

export async function deleteProject(id: number) {
  const { data } = await axios.delete(`/projects/${id}`);
  return data;
}
