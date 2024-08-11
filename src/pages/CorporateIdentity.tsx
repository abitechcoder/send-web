import {
  Header,
  StrategicPlan,
  CorporateSection,
  VisionAndMission,
  CoreValue,
  Principles,
  ContactUs,
  Footer,
  CustomerSupport,
} from "../components";
import { HeroBG } from "../assets";

const CorporateIdentity = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Who We Are"
        child_link="Corporate Identity"
        title="Corporate Identity"
        image={HeroBG}
      />
      <StrategicPlan />
      <CorporateSection />
      <VisionAndMission />
      <CoreValue />
      <Principles />
      <ContactUs />
      <Footer />
      <CustomerSupport />
    </main>
  );
};

export default CorporateIdentity;
