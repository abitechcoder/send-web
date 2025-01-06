import { search } from "@/src/assets";
import {
  AddTeam,
  NavHeader,
  PhotoCard,
  SelectedTeamMemberView,
} from "@/src/components";
import { getTeamMembers } from "@/src/data";
import styles from "@/src/styles";
import { TeamMemberProps } from "@/src/types";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const team_members = await getTeamMembers();
  return { team_members };
}

const Team = () => {
  const { team_members }: any = useLoaderData();
  const [selectedTeamMember, setSelectedTeamMember] = useState<any>(null);
  const [searchText, setSearchText] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    const filtered = team_members.filter((member: TeamMemberProps) =>
      member.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMembers(filtered);
  }, [searchText]);

  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white mb-5">
        <NavHeader title="Team" />
        <div className="flex gap-8 py-4">
          <div className="flex items-center border-[1px] py-3 px-5 bg-[#D8DDE4] justify-between rounded-xl w-1/2">
            <input
              type="text"
              placeholder="Search team member"
              onChange={(e) => setSearchText(e.target.value)}
              className={`${styles.paragraph4} text-[#849299] bg-transparent outline-0 flex-1`}
            />
            <img src={search} className="w-5 h-5" />
          </div>
          <AddTeam />
        </div>
      </div>

      <div className="p-3 lg:px-8 lg:py-4 overflow-y-scroll grid grid-cols-[1fr_300px] gap-8">
        <div className="bg-white p-4">
          {team_members.length > 0 ? (
            <div className="grid grid-cols-3 gap-5">
              {searchText
                ? filteredMembers?.map((member: TeamMemberProps) => (
                    <div
                      key={member.id}
                      onClick={() => setSelectedTeamMember(member)}
                      className="cursor-pointer"
                    >
                      <PhotoCard
                        title={member.role}
                        subtitle={member.name}
                        image={member.image}
                      />
                    </div>
                  ))
                : team_members?.map((member: TeamMemberProps) => (
                    <div
                      key={member.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedTeamMember(member)}
                    >
                      <PhotoCard
                        title={member.role}
                        subtitle={member.name}
                        image={member.image}
                      />
                    </div>
                  ))}
            </div>
          ) : (
            <div className="bg-gray-200 grid place-items-center p-8">
              <p className="font-bold mb-3">No team members found</p>
              <p>
                Click on <strong>add member button</strong> above to create a
                member
              </p>
            </div>
          )}
        </div>

        <div className="w-full">
          <SelectedTeamMemberView
            member={selectedTeamMember}
            setSelectedMember={setSelectedTeamMember}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
