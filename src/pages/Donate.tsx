import {
  Header,
  ContactUs,
  Footer,
  CustomerSupport,
  DonateListingInfo,
} from "../components";
import { HeroBG } from "../assets";

const Donate = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Home"
        child_link="Donate"
        title="Donate"
        image={HeroBG}
      />
      <DonateListingInfo />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport/> */}
    </main>
  );
};

export default Donate;
