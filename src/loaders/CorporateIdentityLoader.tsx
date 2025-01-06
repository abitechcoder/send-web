import { QueryClient } from "@tanstack/react-query";
import { fetchIdentity } from "../api";

export const CorporateIdentityLoader =
  (queryClient: QueryClient) => async () => {
    try {
      const identity = await queryClient.fetchQuery(
        ["identity"],
        fetchIdentity
      );

      return { identity };
    } catch (error) {
      console.error("Error loading identity:", error);
      throw error;
    }
  };
