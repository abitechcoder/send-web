import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  InTheNews,
  CustomerSupport,
} from "../components";

const Newsletter = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Publications"
        child_link="Newsletter"
        title="Newsletter"
        image={HeroBG}
      />
      <InTheNews />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport/> */}
    </main>
  );
};

export default Newsletter;
