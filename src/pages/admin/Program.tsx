import { NavHeader, ProgramTab, SelectedProgramView } from "@/src/components";
import { getProgramAreas, getProjects } from "@/src/data";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const programs = await getProgramAreas();
  const projects = await getProjects();
  return { programs, projects };
}

const Program = () => {
  const { programs, projects }: any = useLoaderData();
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isProgram, setIsProgram] = useState(true);

  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[100px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white mb-5">
        <NavHeader title="Program Areas" />
      </div>

      <div className="p-3 lg:px-8 lg:py-4 overflow-y-scroll">
        <div className="grid lg:grid-cols-4 gap-3 ">
          <div className="lg:col-span-3 ">
            <ProgramTab
              programs={programs}
              projects={projects}
              setSelectedItem={setSelectedItem}
              setIsProgram={setIsProgram}
            />
          </div>
          <SelectedProgramView
            programs={programs}
            item={selectedItem}
            setSelectedItem={setSelectedItem}
            isProgram={isProgram}
          />
        </div>
      </div>
    </div>
  );
};

export default Program;
