import { search } from "@/src/assets";
import { AddJobs, NavHeader, RecruitmentCard } from "@/src/components";
import SelectedJobView from "@/src/components/Admin/SelectedJobView";
import { getAllJobs } from "@/src/data";
import styles from "@/src/styles";
import { JobPropsType } from "@/src/types";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const jobs = await getAllJobs();
  return { jobs };
}

const Recruitment = () => {
  const { jobs }: any = useLoaderData();
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [searchText, setSearchText] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const filtered = jobs.filter((job: JobPropsType) =>
      job.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [searchText]);

  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white mb-5">
        <NavHeader title="Recruitment" />
        <div className="flex gap-8 py-4">
          <div className="flex items-center border-[1px] py-3 px-5 bg-[#D8DDE4] justify-between rounded-xl w-1/2">
            <input
              type="text"
              placeholder="Search recruitment"
              onChange={(e) => setSearchText(e.target.value)}
              className={`${styles.paragraph4} text-[#849299] bg-transparent outline-0 flex-1`}
            />
            <img src={search} className="w-5 h-5" />
          </div>
          <AddJobs />
        </div>
      </div>

      <div className="p-3 lg:px-8 lg:py-4 overflow-y-auto grid grid-cols-[1fr_300px] gap-8">
        <div className="bg-white p-4">
          {jobs.length > 0 ? (
            <div className="grid grid-cols-1">
              {searchText
                ? filteredJobs?.map((job: JobPropsType) => (
                    <div
                      key={job.id}
                      onClick={() => setSelectedItem(job)}
                      className="cursor-pointer"
                    >
                      <RecruitmentCard job={job} />
                    </div>
                  ))
                : jobs?.map((item: JobPropsType) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className="cursor-pointer"
                    >
                      <RecruitmentCard job={item} />
                    </div>
                  ))}
            </div>
          ) : (
            <div className="bg-gray-200 grid place-items-center p-8">
              <p className="font-bold mb-3">No job recuitment found</p>
              <p>
                Click on <strong>add jobs button</strong> above to create a job
                recruitment
              </p>
            </div>
          )}
        </div>

        <div className="w-full">
          <SelectedJobView
            item={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
