import {
  PartnerCard,
  AddPartner,
  SelectedPartnerView,
  NavHeader,
} from "@/src/components";
import { search } from "@/src/assets";
import styles from "@/src/styles";
import { getPartners } from "@/src/data";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { PartnerProps } from "@/src/types";

export async function loader() {
  const partners = await getPartners();
  return { partners };
}
const Partner = () => {
  const { partners }: any = useLoaderData();
  const [selectedPartner, setSelectedPartner] = useState<any>(null);
  const [searchText, setSearchText] = useState("");
  const [filteredPartners, setFilteredPartners] = useState([]);

  useEffect(() => {
    const filtered = partners.filter((partner: PartnerProps) =>
      partner.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPartners(filtered);
  }, [searchText]);

  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[140px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white">
        <NavHeader title="Partner" />
        <div className="flex gap-8 py-4">
          <div className="flex items-center border-[1px] py-3 px-5 bg-[#D8DDE4] justify-between rounded-xl w-1/2">
            <input
              type="text"
              placeholder="Search Partner"
              onChange={(e) => setSearchText(e.target.value)}
              className={`${styles.paragraph4} text-[#849299] bg-transparent outline-0 flex-1`}
            />
            <img src={search} className="w-5 h-5" />
          </div>
          <AddPartner />
        </div>
      </div>

      <div className="p-3 lg:px-8 lg:py-4 overflow-y-auto grid grid-cols-[1fr_300px] gap-8">
        <div className="bg-white p-4">
          {partners.length > 0 ? (
            <div className="grid grid-cols-3 gap-5">
              {searchText
                ? filteredPartners?.map((partner: PartnerProps) => (
                    <div
                      key={partner.id}
                      onClick={() => setSelectedPartner(partner)}
                      className="cursor-pointer"
                    >
                      <PartnerCard partnerLogo={partner.logo} />
                    </div>
                  ))
                : partners?.map((partner: PartnerProps) => (
                    <div
                      key={partner.id}
                      onClick={() => setSelectedPartner(partner)}
                      className="cursor-pointer"
                    >
                      <PartnerCard partnerLogo={partner.logo} />
                    </div>
                  ))}
            </div>
          ) : (
            <div className="bg-gray-200 grid place-items-center p-8">
              <p className="font-bold mb-3">No partners found</p>
              <p>
                Click on <strong>add partner button</strong> above to create a
                partner
              </p>
            </div>
          )}
        </div>

        <div className="w-full">
          <SelectedPartnerView
            partner={selectedPartner}
            setSelectedPartner={setSelectedPartner}
          />
        </div>
      </div>
    </div>
  );
};

export default Partner;
