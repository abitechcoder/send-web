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
        child_link="Report On Project"
        title="Report On Project"
      />
      <ReportsOnProject />
      <OurPrograms />
      <ContactUs />
      <Footer />
      <CustomerSupport/>
    </main>
  );
};

export default ProjectReports;
