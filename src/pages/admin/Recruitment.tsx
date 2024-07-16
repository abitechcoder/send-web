import { AdminHeader, RecruitmentCard, SelectGallery } from "@/src/components";

const Event = () => {
  const searchBarEnable = true;
  const filterEnable = true;
  return (
    <div className="w-full bg-[#FAFAFA] h-full  grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      <AdminHeader
        page="Recruitment"
        button="Add Event"
        searchBar={searchBarEnable}
        filter={filterEnable}
        placeholder="Search job"
        sortBy="descending"
      />
      <div className="p-3 lg:px-8 lg:py-4 overflow-y-scroll ">
        <div className="grid lg:grid-cols-4 gap-3 ">
          <div className="lg:col-span-3 ">
            <div className="p-5 bg-white ">
              <RecruitmentCard />
              <RecruitmentCard />
            </div>
          </div>
          <SelectGallery />
        </div>
      </div>
    </div>
  );
};

export default Event;
