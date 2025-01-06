import { useQuery } from "@tanstack/react-query";
import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  GWEContent,
  CustomerSupport,
} from "../components";
import { useLoaderData, useParams } from "react-router-dom";
import { fetchProjectById } from "../api";

const ProjectDetails = () => {
  const { projectId }: any = useParams();
  const id = parseInt(projectId, 10);
  const initialData: any = useLoaderData();
  const { data: project } = useQuery(
    ["project", id],
    () => fetchProjectById(id),
    { initialData: initialData?.project }
  );
  
  return (
    <main className="h-full relative">
      <Header
        parent_link="Program Areas"
        child_link="Project"
        title={project?.name}
        image={HeroBG}
      />
      <GWEContent project={project} />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default ProjectDetails;
