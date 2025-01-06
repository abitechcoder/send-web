import { QueryClient } from "@tanstack/react-query";
import { fetchGalleries } from "../api";

export const GalleryLoader = (queryClient: QueryClient) => async () => {
  try {
    const gallery = await queryClient.fetchQuery(["gallery"], fetchGalleries);

    return { gallery };
  } catch (error) {
    console.error("Error loading gallery:", error);
    throw error;
  }
};
