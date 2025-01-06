import { gallery } from "@/src/assets";
import styles from "@/src/styles";
import { DeleteItemButton, EditProgramArea, EditProject } from "..";
import React from "react";
import { deleteProgramArea, deleteProject } from "@/src/data";

const SelectedPartnerView = ({
  programs,
  item,
  setSelectedItem,
  isProgram,
}: {
  programs: any;
  item: any;
  setSelectedItem: React.Dispatch<React.SetStateAction<any>>;
  isProgram: boolean;
}) => {
  return (
    <div className="bg-white w-full h-60 lg:h-full p-4 font-nunito">
      {item ? (
        <div>
          {isProgram ? (
            <div className="w-full grid gap-8">
              <h3 className="font-bold text-xl">Program Details</h3>
              <div className="w-full">
                <h5 className="text-sm font-light text-gray-400 mb-2">title</h5>
                <p>{item.title}</p>
              </div>
              <div className="w-full">
                <h5 className="text-sm font-light text-gray-400 mb-2">image</h5>
                <img
                  src={item.image}
                  alt=""
                  className="h-[100px] w-[100px] object-contain object-center"
                />
              </div>

              <div className="w-full">
                <h5 className="text-sm font-light text-gray-400 mb-2">
                  Overview
                </h5>
                <p>{item.overview}</p>
              </div>

              <div className="flex gap-4">
                <DeleteItemButton
                  itemId={item.id}
                  handleSelectedItem={setSelectedItem}
                  itemType="program area"
                  navigateTo="/admin/program"
                  deleteItem={deleteProgramArea}
                />
                <EditProgramArea
                  program={item}
                  setSelectedProgram={setSelectedItem}
                />
              </div>
            </div>
          ) : (
            <div className="w-full grid gap-8">
              <h3 className="font-bold text-xl">Project Details</h3>
              <div className="w-full">
                <h5 className="text-sm font-light text-gray-400 mb-2">Name</h5>
                <p>{item.name}</p>
              </div>
              <div className="w-full">
                <h5 className="text-sm font-light text-gray-400 mb-2">
                  Program Area
                </h5>
                <p>{item.program_area}</p>
              </div>
              <div className="w-full">
                <h5 className="text-xs font-light text-gray-400 mb-2">
                  Description
                </h5>
                <p>{item.description}</p>
              </div>
              <div className="w-full">
                <h5 className="text-sm font-light text-gray-400 mb-2">Donor</h5>
                <p>{item.donor}</p>
              </div>
              <div className="w-full">
                <h5 className="text-sm font-light text-gray-400 mb-2">
                  Status
                </h5>
                <p>{item.status}</p>
              </div>
              <div className="w-full">
                <h5 className="text-sm font-light text-gray-400 mb-2">
                  Partner
                </h5>
                <p>{item.partner}</p>
              </div>
              <div className="w-full">
                <h5 className="text-sm font-light text-gray-400 mb-2">
                  Location
                </h5>
                <p>{item.location}</p>
              </div>
              <div className="w-full">
                <h5 className="text-sm font-light text-gray-400 mb-2">
                  Duration
                </h5>
                <p>{item.duration}</p>
              </div>
              <div className="w-full">
                <h5 className="text-sm font-light text-gray-400 mb-2">
                  Budget
                </h5>
                <p>{item.budget}</p>
              </div>
              <div className="w-full">
                <h5 className="text-sm font-light text-gray-400 mb-2">image</h5>
                <img
                  src={item.problem_image}
                  alt=""
                  className="h-[100px] w-[100px] object-contain object-center"
                />
              </div>

              <div className="flex gap-4">
                <DeleteItemButton
                  itemId={item.id}
                  handleSelectedItem={setSelectedItem}
                  itemType="project"
                  navigateTo="/admin/program"
                  deleteItem={deleteProject}
                />
                <EditProject
                  programs={programs}
                  project={item}
                  setSelectedProject={setSelectedItem}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-[300px]">
          <img src={gallery} className="w-16 h-16 mb-5 rounded-md" />
          <p
            className={`${styles.paragraph} text-xs  text-center text-[#849299]`}
          >
            Select an item to get more information
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectedPartnerView;
