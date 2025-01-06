import { QueryClient } from "@tanstack/react-query";
import {
  fetchCaseStories,
  fetchHomeData,
  fetchIdentity,
  fetchPartners,
  fetchProgramAreas,
  fetchReports,
} from "../api";

export const landingPageLoader = (queryClient: QueryClient) => async () => {
  const queries = [
    {
      queryKey: ["homeData"],
      queryFn: fetchHomeData,
    },
    {
      queryKey: ["identity"],
      queryFn: fetchIdentity,
    },
    {
      queryKey: ["programAreas"],
      queryFn: fetchProgramAreas,
    },
    {
      queryKey: ["stories"],
      queryFn: fetchCaseStories,
    },
    {
      queryKey: ["partners"],
      queryFn: fetchPartners,
    },
    {
      queryKey: ["reports"],
      queryFn: fetchReports,
    },
  ];

  const results = await Promise.all(
    queries.map((query) =>
      queryClient.fetchQuery(query.queryKey, query.queryFn)
    )
  );

  return {
    homeData: results[0],
    identity: results[1],
    programAreas: results[2],
    stories: results[3],
    partners: results[4],
    reports: results[5],
  };
};
