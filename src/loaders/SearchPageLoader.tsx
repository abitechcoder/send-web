import { QueryClient } from "@tanstack/react-query";
import { fetchRecruitments, fetchReports } from "../api";

export const SearchPageLoader = (queryClient: QueryClient) => async () => {
  const queries = [
    {
      queryKey: ["recruitments"],
      queryFn: fetchRecruitments,
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
    jobs: results[0],
    reports: results[1],
  };
};
