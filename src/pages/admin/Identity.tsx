import { AdminHeader } from "@/src/components";
import TabLists from "@/src/components/Admin/TabLists";

const Identity = () => {
  const searchBarEnable = true;
  const filterEnable = true;
  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      <AdminHeader
        page="Identity"
        button="Add Project"
        searchBar={searchBarEnable}
        filter={filterEnable}
        placeholder="Search Project"
        sortBy="descending"
      />
      <div className=" p-3 lg:px-8 lg:py-4 overflow-y-scroll">
        <TabLists />
      </div>
    </div>
  );
};

export default Identity;
