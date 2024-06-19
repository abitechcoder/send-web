import { Header, ContactUs, Footer, ProjectCaseStories } from "../components";

const CaseStories = () => {
  return (
    <main>
      <Header
        parent_link="Publications"
        child_link="Case Stories"
        title="Case Stories"
      />
      <ProjectCaseStories />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default CaseStories;
