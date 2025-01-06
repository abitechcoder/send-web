import { useQuery } from "@tanstack/react-query";
import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  ReportsOnProject,
  OurPrograms,
  // CustomerSupport,
} from "../components";
import { useLoaderData } from "react-router-dom";
import { fetchReports } from "../api";

const ProjectReports = () => {
  const initialData: any = useLoaderData();
  const { data: reports } = useQuery(["reports"], fetchReports, {
    initialData: initialData.reports,
  });
  return (
    <main className="h-full relative">
      <Header
        parent_link="Publications"
        child_link="Reports On Project"
        title="Reports On Project"
        image={HeroBG}
      />
      <ReportsOnProject reports={reports} />
      <OurPrograms />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport/> */}
    </main>
  );
};

export default ProjectReports;
