import {
  Header,
  ContactUs,
  Footer,
  SearchFiles,
  // CustomerSupport,
} from "../components";

import { useLoaderData } from "react-router-dom";
import { HeroBG, Spinnner } from "../assets";
import { useQueries } from "@tanstack/react-query";
import { fetchRecruitments, fetchReports } from "../api";

const Search = () => {
  const initialData: any = useLoaderData();

  const queries = useQueries({
    queries: [
      {
        queryKey: ["recruitments"],
        queryFn: fetchRecruitments,
        initialData: initialData?.jobs,
      },
      {
        queryKey: ["reports"],
        queryFn: fetchReports,
        initialData: initialData?.reports,
      },
    ],
  });

  const [jobs, reports] = queries;

  const files = [...jobs.data, ...reports.data];

  if (queries.some((query) => query.isLoading)) {
    return (
      <div className="flex flex-col justify-center items-center h-full bg-white">
        <img src={Spinnner} className="h-8 w-8" alt="" />
        <p>Loading data...</p>
      </div>
    );
  }

  if (queries.some((query) => query.isError)) {
    return <div>Error loading data</div>;
  }

  return (
    <main className="h-full relative">
      <Header
        parent_link="Home"
        child_link="Search"
        title="Search"
        image={HeroBG}
      />
      <SearchFiles files={files} />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default Search;
