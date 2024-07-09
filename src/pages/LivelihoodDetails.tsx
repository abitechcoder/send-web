import {
  Header,
  ContactUs,
  Footer,
  GWEContent,
  CustomerSupport,
} from "../components";
import { getLivelihoodProject } from "../data";
import { useLoaderData } from "react-router-dom";

export async function LivelihoodProjectsLoader({ params }: any) {
  const project = await getLivelihoodProject(Number(params.projectId));
  return { project };
}

const LivelihoodDetails = () => {
  let { project }: any = useLoaderData();
  return (
    <main className="h-full relative">
      <Header
        parent_link="Strategic Direction"
        child_link="Health & Education"
        title="Health & Education"
      />
      <GWEContent project={project} />
      <ContactUs />
      <Footer />
      <CustomerSupport />
    </main>
  );
};

export default LivelihoodDetails;
