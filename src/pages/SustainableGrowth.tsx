import { HeroBG, SD3 } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  OurPrograms,
  CustomerSupport,
  ProjectOverview,
  StrategicLivelihoodProjects,
} from "../components";

const SustainableGrowth = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Program Areas"
        child_link="Sustainable Growth"
        title="Sustainable Growth"
        image={HeroBG}
      />
      <ProjectOverview
        banner_image={SD3}
        text="We work to promote inclusive and sustainable growth in rural areas by addressing poverty, unemployment, and poor livelihoods through targeted interventions that leverage local resources, empower communities, and create opportunities for economic diversification and resilience. Accordingly, we will continue to work towards SDG 1 on ending poverty, SDG 2 on ending hunger and food insecurity, SDG 8 on decent work and economic growth, and SDG 12 on sustainable consumption and production patterns."
      />
      <StrategicLivelihoodProjects />
      <OurPrograms />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default SustainableGrowth;
