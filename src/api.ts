import {
  getAllGallery,
  getAllJobs,
  getHomeData,
  getIdentity,
  getPartners,
  getProgramAreaById,
  getProgramAreas,
  getProjectById,
  getProjects,
  getReports,
  getTeamMembers,
  getTestimonials,
} from "./data";

export const fetchHomeData = async () => {
  return await getHomeData(1);
};

export const fetchIdentity = async () => {
  return await getIdentity(1);
};

export const fetchProgramAreas = async () => {
  return await getProgramAreas();
};

export const fetchProgramById = async (id: number) => {
  return await getProgramAreaById(id);
};

export const fetchProjects = async () => {
  return await getProjects();
};

export const fetchProjectById = async (id: number) => {
  return await getProjectById(id);
};

export const fetchCaseStories = async () => {
  return await getTestimonials();
};

export const fetchPartners = async () => {
  return await getPartners();
};

export const fetchReports = async () => {
  return await getReports();
};

export const fetchTeamMembers = async () => {
  return await getTeamMembers();
};

export const fetchGalleries = async () => {
  return await getAllGallery();
};

export const fetchRecruitments = async () => {
  return await getAllJobs();
};
