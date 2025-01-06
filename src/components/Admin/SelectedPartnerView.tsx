import { gallery } from "@/src/assets";
import styles from "@/src/styles";
import { PartnerProps } from "@/src/types";
import { DeleteItemButton } from "..";
import React from "react";
import { deletePartner } from "@/src/data";
import EditPartner from "./EditPartner";

const SelectedProgramView = ({
  partner,
  setSelectedPartner,
}: {
  partner: PartnerProps;
  setSelectedPartner: React.Dispatch<React.SetStateAction<null | PartnerProps>>;
}) => {
  return (
    <div className="bg-white w-full h-60 lg:h-full p-4 font-nunito">
      {partner ? (
        <div className="w-full grid gap-8">
          <h3 className="font-bold text-xl">Detail Report</h3>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Partner Name
            </h5>
            <p>{partner.name}</p>
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Logo</h5>
            <img
              src={partner.logo}
              alt=""
              className="h-[100px] w-[100px] object-contain object-center"
            />
          </div>

          <div className="flex gap-4">
            <DeleteItemButton
              itemId={partner.id}
              handleSelectedItem={setSelectedPartner}
              itemType="partner"
              navigateTo="/admin/partner"
              deleteItem={deletePartner}
            />
            <EditPartner
              partner={partner}
              setSelectedPartner={setSelectedPartner}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-[300px]">
          <img src={gallery} className="w-16 h-16 mb-5 rounded-md" />
          <p
            className={`${styles.paragraph} text-xs  text-center text-[#849299]`}
          >
            Select a partner to get more information
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectedProgramView;
