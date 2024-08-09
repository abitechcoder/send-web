import {
  Header,
  ContactUs,
  Footer,
  OurPrograms,
  CustomerSupport,
  ProjectOverview,
  StrategicGovernanceProjects,
} from "../components";

const Governance = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Strategic Direction"
        child_link="Governance & Women Empowerment"
        title="Governance & Women Empowerment"
      />
      <ProjectOverview
        banner_image="/src/assets/strategic-direction-2.jpg"
        text="In Sierra Leone, women and the girl child suffer from high levels of discrimination and marginalization based on societal stereotypes. SEND Sierra Leone is committed to ensuring that the girl child is able to have access to quality education without limitations. With education programs and projects tailored to empower the girl child, SEND Sierra Leone aims to help many girls achieve their dream of having an education and giving back to their community. With several models and projects running by SEND Sierra Leone, we continue to empower hundreds of women to be self-sufficient and independent of their husbands. This leads to increase livelihood security for their families as the women contribute to the household. We are not only committed to empowering women to be financially independent but also to take positions in governance on the national and local level to promote gender equity."
      />
      <StrategicGovernanceProjects />
      <OurPrograms />
      <ContactUs />
      <Footer />
      <CustomerSupport />
    </main>
  );
};

export default Governance;
