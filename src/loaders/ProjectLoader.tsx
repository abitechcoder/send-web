import { QueryClient } from "@tanstack/react-query";
import { fetchProjectById } from "../api";

export interface LoaderParams {
  params: {
    projectId: string;
  };
}

export const ProjectLoader =
  (queryClient: QueryClient, { params }: LoaderParams) =>
  async () => {
    try {
      const id = parseInt(params.projectId, 10);

      if (isNaN(id)) {
        throw new Error("Invalid project ID");
      }

      const project = await queryClient.fetchQuery(
        ["project", id],
        () => fetchProjectById(id)
      );
      

      return { project: project};
    } catch (error) {
      console.error("Error loading project:", error);
      throw error; // or handle it as appropriate for your app
    }
  };
