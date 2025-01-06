import { gallery } from "@/src/assets";
import styles from "@/src/styles";
import { TeamMemberProps } from "@/src/types";
import { DeleteItemButton, EditTeam } from "..";
import React from "react";
import { deleteTeamMember } from "@/src/data";

const SelectedTeamMemberView = ({
  member,
  setSelectedMember,
}: {
  member: TeamMemberProps;
  setSelectedMember: React.Dispatch<
    React.SetStateAction<TeamMemberProps | null>
  >;
}) => {
  return (
    <div className="bg-white w-full h-60 lg:h-full p-4 font-nunito">
      {member ? (
        <div className="w-full grid gap-8">
          <h3 className="font-bold text-xl">Detail Report</h3>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Member Name
            </h5>
            <p>{member.name}</p>
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Role</h5>
            <p>{member.role}</p>
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Image</h5>
            <img
              src={member.image}
              alt=""
              className="h-[150px] w-[150px] object-cover object-center"
            />
          </div>

          <div className="flex gap-4">
            <DeleteItemButton
              itemId={member.id}
              handleSelectedItem={setSelectedMember}
              itemType="Team Member"
              navigateTo="/admin/team"
              deleteItem={deleteTeamMember}
            />
            <EditTeam member={member} setSelectedMember={setSelectedMember} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-[300px]">
          <img src={gallery} className="w-16 h-16 mb-5 rounded-md" />
          <p
            className={`${styles.paragraph} text-xs  text-center text-[#849299]`}
          >
            Select a member to get more information
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectedTeamMemberView;
