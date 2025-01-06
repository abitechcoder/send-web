import { search } from "@/src/assets";
import { AddReport, NavHeader, ReportTab } from "@/src/components";
import styles from "@/src/styles";
import { getReports } from "@/src/data";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export async function loader() {
  const reports = await getReports();
  return { reports };
}

const Report = () => {
  const { reports }: any = useLoaderData();
  const [searchText, setSearchText] = useState("");

  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[160px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white">
        <NavHeader title="Report" />
        <div className="flex gap-8 py-6">
          <div className="flex items-center border-[1px] py-3 px-5 bg-[#D8DDE4] justify-between rounded-xl w-1/2">
            <input
              type="text"
              placeholder="Search report"
              onChange={(e) => setSearchText(e.target.value)}
              className={`${styles.paragraph4} text-[#849299] bg-transparent outline-0 flex-1`}
            />
            <img src={search} className="w-5 h-5" />
          </div>
          <AddReport />
        </div>
      </div>

      <ReportTab reports={reports} searchText={searchText} />
    </div>
  );
};

export default Report;
