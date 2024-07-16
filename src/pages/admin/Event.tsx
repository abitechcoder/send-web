import { event1, event2, event3, event4 } from "@/src/assets";
import { AdminHeader, SelectGallery } from "@/src/components";

const Event = () => {
  const searchBarEnable = true;
  const filterEnable = true;
  return (
    <div className="w-full h-full bg-[#FAFAFA]  grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      <AdminHeader
        page="Event"
        button="Add Event"
        searchBar={searchBarEnable}
        filter={filterEnable}
        placeholder="Search Event"
        sortBy="descending"
      />
      <div className="p-3 lg:px-8 lg:py-4 overflow-y-scroll">
        <div className="grid  lg:grid-cols-4 gap-3 ">
          <div className="lg:col-span-3 ">
            <div className=" grid grid-cols-1 p-5 lg:grid-cols-2 gap-5 bg-white ">
              <img src={event1} className="w-full h-56" />
              <img src={event2} className="w-full h-56" />
              <img src={event3} className="w-full h-56" />
              <img src={event4} className="w-full h-56" />
            </div>
          </div>

          <SelectGallery />
        </div>
      </div>
    </div>
  );
};

export default Event;
