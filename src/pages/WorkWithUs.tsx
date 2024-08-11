import {
  Header,
  ContactUs,
  Footer,
  SearchJobs,
  CustomerSupport,
} from "../components";
import { getJobClassification, getJobs, getRegions } from "../data";
import { useLoaderData } from "react-router-dom";
import { GeneralList } from "../types";
import { HeroBG } from "../assets";

export async function loader() {
  const jobClassifications = await getJobClassification();
  const jobs = await getJobs();
  const regions = await getRegions();

  return { jobClassifications, jobs, regions };
}

const Gallery = () => {
  const { jobClassifications, jobs, regions }: GeneralList[] | null | any =
    useLoaderData();
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
      <CustomerSupport />
    </main>
  );
};

export default Gallery;
