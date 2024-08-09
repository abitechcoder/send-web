import {
  Header,
  ContactUs,
  Footer,
  SearchFiles,
  CustomerSupport,
} from "../components";
import { getAnnualReports, getJobs, getNewsLetters } from "../data";
import { useLoaderData } from "react-router-dom";
import { GeneralList } from "../types";

export async function loader() {
  const jobs = await getJobs();
  const newsletters = await getNewsLetters();
  const reports = await getAnnualReports();

  const files = [...jobs, ...newsletters, ...reports];

  return { files };
}

const Search = () => {
  const { files }: GeneralList[] | null | any = useLoaderData();

  console.log("All Files:", files);
  return (
    <main className="h-full relative">
      <Header parent_link="Home" child_link="Search" title="Search" />
      <SearchFiles files={files} />
      <ContactUs />
      <Footer />
      <CustomerSupport />
    </main>
  );
};

export default Search;
