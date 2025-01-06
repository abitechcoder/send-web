import {
  Header,
  ContactUs,
  Footer,
  Directors,
  // CustomerSupport,
} from "../components";
import { useLoaderData } from "react-router-dom";
import { TeamMemberProps } from "../types";
import { HeroBG } from "../assets";
import { useQuery } from "@tanstack/react-query";
import { fetchTeamMembers } from "../api";

const BoardOfDirectors = () => {
  const initialData: any = useLoaderData();
  const { data: team } = useQuery(["team"], fetchTeamMembers, {
    initialData: initialData.team,
  });

  const directors = team.filter(
    (member: TeamMemberProps) => member.board_member === "yes"
  );
  return (
    <main className="h-full relative">
      <Header
        parent_link="Who We Are"
        child_link="Board of Directors"
        title="Board of Directors"
        image={HeroBG}
      />
      <Directors directors={directors} />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default BoardOfDirectors;
