import { QueryClient } from "@tanstack/react-query";
import { fetchTeamMembers } from "../api";

export const TeamMembersLoader = (queryClient: QueryClient) => async () => {
  try {
    const team = await queryClient.fetchQuery(["team"], fetchTeamMembers);

    return { team };
  } catch (error) {
    console.error("Error loading team members:", error);
    throw error;
  }
};
