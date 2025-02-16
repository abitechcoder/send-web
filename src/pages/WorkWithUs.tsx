import {
  Header,
  ContactUs,
  Footer,
  SearchJobs,
  CustomerSupport,
} from "../components";
import { useLoaderData } from "react-router-dom";
import { HeroBG } from "../assets";

const WorkWithUs = () => {
  const { jobs, jobClassifications, regions }: any = useLoaderData();
  
  return (
    <main className="h-full relative">
      <Header
        parent_link="Home"
        child_link="Work With Us"
        title="Work With Us"
        image={HeroBG}
      />
      <SearchJobs
        regions={regions}
        jobs={jobs}
        jobClassifications={jobClassifications}
      />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default WorkWithUs;
