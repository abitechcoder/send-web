import { Header, ContactUs, Footer, ProjectCaseStories, CustomerSupport } from "../components";

const CaseStories = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Publications"
        child_link="Case Stories"
        title="Case Stories"
      />
      <ProjectCaseStories />
      <ContactUs />
      <Footer />
      <CustomerSupport/>
    </main>
  );
};

export default CaseStories;
