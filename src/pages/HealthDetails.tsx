import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  GWEContent,
  CustomerSupport,
} from "../components";
import { getHealthProject } from "../data";
import { useLoaderData } from "react-router-dom";

export async function HealthProjectsLoader({ params }: any) {
  const project = await getHealthProject(Number(params.projectId));
  return { project };
}

const HealthDetails = () => {
  let { project }: any = useLoaderData();
  return (
    <main className="h-full relative">
     <Header
        parent_link="Program Areas"
        child_link="Health, Nutrition & WaSH"
        title="Health, Nutrition & WaSH"
        image={HeroBG}
      />
      <GWEContent project={project}/>
      <ContactUs />
      <Footer />
      <CustomerSupport />
    </main>
  );
};

export default HealthDetails;
