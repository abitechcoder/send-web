import { ProgramType } from "../types";
import ProgramCard from "./ProgramCard";
import { useQuery } from "@tanstack/react-query";
import { fetchProgramAreas } from "../api";

const ProgramAreasCards = () => {
  const { data: programs } = useQuery(["programAreas"], fetchProgramAreas);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 place-items-center">
      {programs?.map((program: ProgramType) => (
        <ProgramCard
          key={program.id}
          id={program.id}
          title={program.title}
          image={program.image}
        />
      ))}
    </div>
  );
};

export default ProgramAreasCards;
