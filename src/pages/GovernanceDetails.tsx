import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  GWEContent,
  CustomerSupport,
} from "../components";
import { getGovernanceProject } from "../data";
import { useLoaderData } from "react-router-dom";

export async function GovernanceProjectsLoader({ params }: any) {
  const project = await getGovernanceProject(Number(params.projectId));
  return { project };
}

const GovernanceDetails = () => {
  let { project }: any = useLoaderData();
  return (
    <main className="h-full relative">
      <Header
        parent_link="Strategic Direction"
        child_link="Health & Education"
        title="Health & Education"
        image={HeroBG}
      />
      <GWEContent project={project}/>
      <ContactUs />
      <Footer />
      <CustomerSupport />
    </main>
  );
};

export default GovernanceDetails;
