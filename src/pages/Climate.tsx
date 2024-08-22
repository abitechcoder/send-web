import {
  Header,
  ContactUs,
  Footer,
  OurPrograms,
  CustomerSupport,
  ProjectOverview,
  StrategicLivelihoodProjects,
} from "../components";
import { HeroBG, SD3 } from "../assets";

const Livelihood = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Program Areas"
        child_link="Climate & Disaster Resilience"
        title="Climate & Disaster Resilience"
        image={HeroBG}
      />
      <ProjectOverview
        banner_image={SD3}
        text="We develop community-based adaptation programs involving residents in identifying climate and disaster risks and implementing solutions tailored to their needs and circumstances. Our focus is to develop interventions to help marginalized and excluded communities deal with the effects of climate change and disaster. We support the ‘just transition’ away from pathways that contribute to climate change. We hope to make a sustainable contribution to SDG 13, which calls for urgent action to combat climate change and its impacts."
      />
      <StrategicLivelihoodProjects />
      <OurPrograms />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default Livelihood;
