import { AdminHeader, ProgramTab, SelectGallery } from "@/src/components";

const Program = () => {
  const searchBarEnable = true;
  const filterEnable = true;
  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      <AdminHeader
        page="Program / governance & Woman Empowerment"
        button="Add Project"
        searchBar={searchBarEnable}
        filter={filterEnable}
        placeholder="Search Project"
        sortBy="descending"
      />
      <div className="p-3 lg:px-8 lg:py-4 overflow-y-scroll">
        <div className="grid  lg:grid-cols-4 gap-3 ">
          <div className="lg:col-span-3 ">
            <ProgramTab />
          </div>
          <SelectGallery />
        </div>
      </div>
    </div>
  );
};

export default Program;
