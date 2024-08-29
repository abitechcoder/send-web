import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  ReportsOnProject,
  OurPrograms,
  CustomerSupport,
} from "../components";

const ProjectReports = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Publications"
        child_link="Reports On Project"
        title="Report On Project"
        image={HeroBG}
      />
      <ReportsOnProject />
      <OurPrograms />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport/> */}
    </main>
  );
};

export default ProjectReports;
