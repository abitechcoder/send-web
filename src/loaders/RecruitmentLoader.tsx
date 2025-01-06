import { QueryClient } from "@tanstack/react-query";
import { fetchRecruitments } from "../api";
import { getJobClassification, getRegions } from "../data";

export const RecruitmentLoader = (queryClient: QueryClient) => async () => {
  try {
    const data = await queryClient.fetchQuery(
      ["recruitments"],
      fetchRecruitments
    );

    const jobs = data.sort(
      (a: { id: number }, b: { id: number }) => b.id - a.id
    );

    const jobClassifications = await getJobClassification();
    const regions = await getRegions();

    return { jobs, jobClassifications, regions };
  } catch (error) {
    console.error("Error loading recruitments:", error);
    throw error;
  }
};
