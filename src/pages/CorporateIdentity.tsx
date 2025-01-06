import {
  Header,
  StrategicPlan,
  CorporateSection,
  VisionAndMission,
  CoreValue,
  Principles,
  ContactUs,
  Footer,
  // CustomerSupport,
} from "../components";
import { HeroBG } from "../assets";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchIdentity } from "../api";

const CorporateIdentity = () => {
  const initialData: any = useLoaderData();
  const { data: identity } = useQuery(["identity"], fetchIdentity, {
    initialData: initialData.identity,
  });
  return (
    <main className="h-full relative">
      <Header
        parent_link="Who We Are"
        child_link="Corporate Identity"
        title="Corporate Identity"
        image={HeroBG}
      />
      <StrategicPlan />
      <CorporateSection identity={identity} />
      <VisionAndMission identity={identity} />
      <CoreValue identity={identity} />
      <Principles identity={identity} />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default CorporateIdentity;
