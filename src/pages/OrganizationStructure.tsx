import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  OrganogramChart,
  CustomerSupport,
} from "../components";

const OrganizationStructure = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Who We Are"
        child_link="Organization Structure"
        title="Organization Structure"
        image={HeroBG}
      />
      <OrganogramChart />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default OrganizationStructure;
