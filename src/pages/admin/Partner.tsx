import { AdminHeader, PartnerCard, SelectGallery } from "@/src/components";
import { FedLogo, IrishAidLogo, SabiLogo, UndpLogo } from "@/src/assets";

const Partner = () => {
  const searchBarEnable = true;
  const filterEnable = true;

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen">
      <AdminHeader
        page="Partner"
        button="Add Partner"
        searchBar={searchBarEnable}
        filter={filterEnable}
        placeholder="Search Partner"
        sortBy="descending"
      />
      <div className="p-3 lg:px-8 lg:py-4 overflow-y-auto">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 ">
          <div className="md:col-span-2  lg:col-span-3 ">
            <div className=" grid grid-cols-2 p-5 lg:grid-cols-4 gap-5 bg-white ">
              <PartnerCard partnerLogo={IrishAidLogo} />
              <PartnerCard partnerLogo={FedLogo} />
              <PartnerCard partnerLogo={SabiLogo} />
              <PartnerCard partnerLogo={UndpLogo} />
            </div>
          </div>

          <SelectGallery />
        </div>
      </div>
    </div>
  );
};

export default Partner;
