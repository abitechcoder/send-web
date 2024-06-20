import {
  Header,
  ContactUs,
  Footer,
  ReportsOnProject,
  OurPrograms,
} from "../components";

const ProjectReports = () => {
  return (
    <main>
      <Header
        parent_link="Publications"
        child_link="Report On Project"
        title="Report On Project"
      />
      <ReportsOnProject />
      <OurPrograms />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default ProjectReports;
