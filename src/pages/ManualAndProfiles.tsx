import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  ManualProfiles,
  CustomerSupport,
} from "../components";

const ManualAndProfiles = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Publications"
        child_link="Manual & Profiles"
        title="Manual & Profiles"
        image={HeroBG}
      />
      <ManualProfiles />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport/> */}
    </main>
  );
};

export default ManualAndProfiles;
