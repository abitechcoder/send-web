import { useQuery } from "@tanstack/react-query";
import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  SeniorMgtTeam,
  CustomerSupport,
} from "../components";
import { fetchTeamMembers } from "../api";
import { useLoaderData } from "react-router-dom";
import { TeamMemberProps } from "../types";

const ManagementTeam = () => {
  const initialData: any = useLoaderData();
  const { data: team } = useQuery(["team"], fetchTeamMembers, {
    initialData: initialData.team,
  });

  const SMgtTeam = team.filter(
    (member: TeamMemberProps) => member.board_member === "no"
  );

  return (
    <main className="h-full relative">
      <Header
        parent_link="Who We Are"
        child_link="Senior Management Team"
        title="Senior Management Team"
        image={HeroBG}
      />
      <SeniorMgtTeam team={SMgtTeam} />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default ManagementTeam;
