import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../index.css";
import Button from "./Button";
import {
  AddProgramAreas,
  AddProject,
  PhotoCard,
  ProgramAreaCard,
} from "@/src/components";
import { SustainableGrowthImage } from "@/src/assets";
import { ProgramType, ProjectType } from "@/src/types";
import { useState } from "react";

const TabLists = ({ programs, projects, setSelectedItem, setIsProgram }: any) => {
  

  const handleProgramClick = (item: ProgramType) => {
    setIsProgram(true);
    setSelectedItem(item);
  };

  const handleProjectClick = (item: ProjectType) => {
    setIsProgram(false);
    setSelectedItem(item);
  };

  return (
    <div>
      <Tabs className="bg-white">
        <TabList className="custom-tab-list">
          <Tab className="custom-tab" selectedClassName="active">
            Program Areas
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Projects
          </Tab>
        </TabList>
        <TabPanel className="mt-4 px-8" id="custom-tab-panel">
          <div className="flex justify-end">
            <AddProgramAreas />
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4">
            {programs.map((program: ProgramType) => (
              <div
                key={program.id}
                onClick={() => handleProgramClick(program)}
                className="cursor-pointer"
              >
                <ProgramAreaCard title={program.title} image={program.image} />
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="mt-4 px-8">
          <div className="flex justify-end">
            <AddProject programs={programs} />
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4">
            {projects.map((project: ProjectType) => (
              <div key={project.id} onClick={() => handleProjectClick(project)}
              className="cursor-pointer">
                <PhotoCard
                  title="Project"
                  subtitle={`${project.name.substring(0,50)}...`}
                  image={project.problem_image}
                />
              </div>
            ))}
          </div>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default TabLists;
