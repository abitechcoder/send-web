import { QueryClient } from "@tanstack/react-query";
import { fetchReports } from "../api";

export const ReportsLoader = (queryClient: QueryClient) => async () => {
  try {
    const reports = await queryClient.fetchQuery(["reports"], fetchReports);

    return { reports };
  } catch (error) {
    console.error("Error loading reports:", error);
    throw error;
  }
};
