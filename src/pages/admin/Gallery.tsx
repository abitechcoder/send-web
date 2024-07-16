import { AdminHeader, PhotoCard, SelectGallery } from "@/src/components";

const Gallery = () => {
  const searchBarEnable = true;
  const filterEnable = true;
  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      <AdminHeader
        page="Gallery"
        button="Add Photo"
        searchBar={searchBarEnable}
        filter={filterEnable}
        placeholder="Search Gallery"
        sortBy="descending"
      />

      <div className="p-3 lg:px-8 lg:py-4 overflow-y-scroll">
        <div className="grid  lg:grid-cols-4 gap-3 ">
          <div className="  lg:col-span-3 ">
            <div className=" grid grid-cols-2 p-5 lg:grid-cols-3 gap-5 bg-white ">
              <PhotoCard
                title="Gallery"
                subtitle="SEND Sierra Leon 2023 Annual Report Exhibito"
              />
              <PhotoCard
                title="Gallery"
                subtitle="SEND Sierra Leon 2023 Annual Report Exhibito"
              />
              <PhotoCard
                title="Gallery"
                subtitle="SEND Sierra Leon 2023 Annual Report Exhibito"
              />
              <PhotoCard
                title="Gallery"
                subtitle="SEND Sierra Leon 2023 Annual Report Exhibito"
              />
              <PhotoCard
                title="Gallery"
                subtitle="SEND Sierra Leon 2023 Annual Report Exhibito"
              />
              <PhotoCard
                title="Gallery"
                subtitle="SEND Sierra Leon 2023 Annual Report Exhibito"
              />
            </div>
          </div>

          <SelectGallery />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
