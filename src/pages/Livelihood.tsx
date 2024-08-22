import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  OurPrograms,
  CustomerSupport,
  ProjectOverview,
  StrategicLivelihoodProjects,
} from "../components";

const Livelihood = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Strategic Direction"
        child_link="Livelihood, Food and Nutrition Security"
        title="Livelihood, Food and Nutrition Security"
        image={HeroBG}
      />
      <ProjectOverview
        banner_image="/src/assets/strategic-direction-3.jpg"
        text="With the recent Ebola epidemic to hit Sierra Leone, the standard of living Sierra Leone dwindled even further following decades of civil war. This led to high levels of under nutrition, malnutrition and even death in many communities. With generations lacking formal education, there is heavy dependency on subsistence farming in the rural communities. SEND Sierra Leone intends to improve livelihood security of target groups and beneficiaries by introducing them to sustainable alternatives of income generation to subsistence farming . We train individuals on new and improved agricultural practices to increase agricultural yield as well as diversify their agricultural yield. In an attempt to strengthen and increase income levels; we train people in business management skills, entrepreneurship, strengthen existing and establish credit groups and unions."
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
