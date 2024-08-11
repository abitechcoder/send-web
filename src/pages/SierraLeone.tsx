import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  SierraLeoneHistory,
  CustomerSupport,
} from "../components";

const SierraLeone = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Who We Are"
        child_link="About Sierra Leone"
        title="About Sierra Leone"
        image={HeroBG}
      />
      <SierraLeoneHistory />
      <ContactUs />
      <Footer />
      <CustomerSupport />
    </main>
  );
};

export default SierraLeone;
