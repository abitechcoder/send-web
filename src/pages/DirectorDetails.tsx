import {
  Header,
  ContactUs,
  Footer,
  CustomerSupport,
  DirectorInfo,
} from "../components";
import { useLoaderData, useParams } from "react-router-dom";
import { getDirector } from "../data";
import { HeroBG } from "../assets";
import { useQuery } from "@tanstack/react-query";
import { fetchTeamMembers } from "../api";
import { TeamMemberProps } from "../types";

const DirectorDetails = () => {
  const { directorId } = useParams();
  const initialData: any = useLoaderData();
  const { data: team } = useQuery(["team"], fetchTeamMembers, {
    initialData: initialData.team,
  });

  const director = team.find(
    (member: TeamMemberProps) => member.id === Number(directorId)
  );

  return (
    <main className="h-full relative">
      <Header
        parent_link="Who We Are"
        child_link="Board of Directors"
        title="Board of Directors"
        image={HeroBG}
      />
      <DirectorInfo director={director} team={team} />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default DirectorDetails;
