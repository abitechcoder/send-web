import { HeroBG, SD2 } from "../assets";
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
        parent_link="Program Areas"
        child_link="Gender Equality"
        title="Gender Equality"
        image={HeroBG}
      />
      <ProjectOverview
        banner_image={SD2}
        text="We advance our efforts to advance gender equality, contributing to the global development agenda on gender equality (SDG 5) and reducing inequality (SDG 10). We work with our partners to create more equal opportunities with an emphasis on women and girls. By recognizing the multidimensional and intersectional nature of gender inequality, we will work to promote gender equality by promoting women’s political empowerment across different levels of government. We will also work on narrowing the gender gap in education with interventions focused on promoting access and opportunities for girls in rural areas."
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
