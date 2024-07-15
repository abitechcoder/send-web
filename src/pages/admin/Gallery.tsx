import { AdminHeader, PhotoCard } from "@/src/components";
import { gallery } from "@/src/assets";
import styles from "@/src/styles";
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
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 ">
          <div className="md:col-span-2  lg:col-span-3 ">
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

          <div className="bg-white flex flex-col items-center justify-center">
            <img src={gallery} className="w-16 h-16 mb-5 rounded-md" />
            <p
              className={`${styles.paragraph} text-xs  text-center text-[#849299]`}
            >
              Select a single gallery to get more information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
