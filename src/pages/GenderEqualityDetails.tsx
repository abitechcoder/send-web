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

const GenderEqualityDetails = () => {
  let { project }: any = useLoaderData();
  return (
    <main className="h-full relative">
      <Header
        parent_link="Program Areas"
        child_link="Gender Equality"
        title="Gender Equality"
        image={HeroBG}
      />
      <GWEContent project={project} />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default GenderEqualityDetails;
