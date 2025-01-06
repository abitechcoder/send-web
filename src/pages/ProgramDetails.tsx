import { useQuery } from "@tanstack/react-query";
import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  OurPrograms,
  // CustomerSupport,
  ProjectOverview,
  ProgramAreaProjects,
} from "../components";
import { useLoaderData, useParams } from "react-router-dom";
import { fetchProgramById } from "../api";

const ProgramDetails = () => {
  const { programId }: any = useParams();
  const id = parseInt(programId, 10);
  const initialData: any = useLoaderData();
  const { data: program } = useQuery(
    ["program", id],
    () => fetchProgramById(id),
    { initialData: initialData?.program }
  );
  return (
    <main className="h-full relative">
      <Header
        parent_link="Program Areas"
        child_link={program?.title}
        title={program?.title}
        image={HeroBG}
      />
      <ProjectOverview banner_image={program?.image} text={program?.overview} />
      {program?.projects.length > 0 && (
        <ProgramAreaProjects projects={program?.projects} />
      )}
      <OurPrograms />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default ProgramDetails;
