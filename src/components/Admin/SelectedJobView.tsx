import { gallery } from "@/src/assets";
import styles from "@/src/styles";
import { JobPropsType } from "@/src/types";
import { DeleteItemButton, EditJobs } from "..";
import React from "react";
import { deleteJob } from "@/src/data";

const SelectedJobView = ({
  item,
  setSelectedItem,
}: {
  item: JobPropsType;
  setSelectedItem: React.Dispatch<React.SetStateAction<null | JobPropsType>>;
}) => {
  return (
    <div className="bg-white w-full h-60 lg:h-full p-4 font-nunito">
      {item ? (
        <div className="w-full grid gap-8">
          <h3 className="font-bold text-xl">Detail Report</h3>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Title</h5>
            <p>{item.title}</p>
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Job Description
            </h5>
            <p>{item.description}</p>
          </div>

          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Document Url
            </h5>
            <a href={item.link_url} className="text-blue-600">
              {item.link_url.substring(0, 30)}...
            </a>
          </div>

          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Job Classification
            </h5>
            <p>{item.classification}</p>
          </div>

          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Job Region
            </h5>
            <p>{item.region}</p>
          </div>

          <div className="flex gap-4">
            <DeleteItemButton
              itemId={item.id}
              handleSelectedItem={setSelectedItem}
              itemType="Job Recruitment"
              navigateTo="/admin/recruitment"
              deleteItem={deleteJob}
            />
            <EditJobs job={item} setSelectedJob={setSelectedItem} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-[300px]">
          <img src={gallery} className="w-16 h-16 mb-5 rounded-md" />
          <p
            className={`${styles.paragraph} text-xs  text-center text-[#849299]`}
          >
            Select a Job to get more information
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectedJobView;
