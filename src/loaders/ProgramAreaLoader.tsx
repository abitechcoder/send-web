import { QueryClient } from "@tanstack/react-query";
import { fetchProgramById } from "../api";

export interface LoaderParams {
  params: {
    programId: string;
  };
}

export const ProgramAreaLoader =
  (queryClient: QueryClient, { params }: LoaderParams) =>
  async () => {
    try {
      const id = parseInt(params.programId, 10);

      if (isNaN(id)) {
        throw new Error("Invalid program ID");
      }

      const programArea = await queryClient.fetchQuery(
        ["program", id],
        () => fetchProgramById(id)
      );
      

      return { program: programArea};
    } catch (error) {
      console.error("Error loading program:", error);
      throw error; // or handle it as appropriate for your app
    }
  };
