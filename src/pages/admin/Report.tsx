import { AdminHeader, ReportTab } from "@/src/components";

const Report = () => {
  const searchBarEnable = true;
  const filterEnable = true;
  return (
    <div className="w-full bg-[#FAFAFA] h-full  grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      <AdminHeader
        page="Report"
        button="Add Report"
        searchBar={searchBarEnable}
        filter={filterEnable}
        placeholder="Search Report"
        sortBy="descending"
      />
      <ReportTab />
    </div>
  );
};

export default Report;
