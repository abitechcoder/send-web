import {
  HeroSection,
  ProgramAreas,
  OurIdentity,
  OurPartner,
  LatestNews,
  TopStories,
  BuildBetterWork,
  TrainingManuals,
  ContactUs,
  Footer,
  NavBar,
  CustomerSupport,
} from "../components";
import { useLoaderData } from "react-router-dom";
import {
  fetchCaseStories,
  fetchHomeData,
  fetchIdentity,
  fetchPartners,
  fetchProgramAreas,
  fetchReports,
} from "../api";
import { useQueries } from "@tanstack/react-query";
import { Spinnner } from "../assets";

const LandingPage = () => {
  const initialData = useLoaderData() as any;

  const queries = useQueries({
    queries: [
      {
        queryKey: ["homeData"],
        queryFn: fetchHomeData,
        initialData: initialData?.homeData,
      },
      {
        queryKey: ["identity"],
        queryFn: fetchIdentity,
        initialData: initialData?.identity,
      },
      {
        queryKey: ["programAreas"],
        queryFn: fetchProgramAreas,
        initialData: initialData?.programAreas,
      },
      {
        queryKey: ["stories"],
        queryFn: fetchCaseStories,
        initialData: initialData?.stories,
      },
      {
        queryKey: ["partners"],
        queryFn: fetchPartners,
        initialData: initialData?.partners,
      },
      {
        queryKey: ["reports"],
        queryFn: fetchReports,
        initialData: initialData?.reports,
      },
    ],
  });

  const [
    homeDataQuery,
    identityQuery,
    programAreasQuery,
    stories,
    partners,
    reports,
  ] = queries;

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
    <div className="h-full relative">
      <div className="px-4 md:px-[40px] lg:px-[80px] bg-white">
        <NavBar />
      </div>
      <HeroSection hero={homeDataQuery.data} />
      <ProgramAreas programs={programAreasQuery.data} />
      <OurIdentity identity={identityQuery.data} />
      <TopStories stories={stories.data} />
      <OurPartner partners={partners.data} />
      <BuildBetterWork />
      <TrainingManuals reports={reports.data} />
      <LatestNews reports={reports.data} />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </div>
  );
};

export default LandingPage;
