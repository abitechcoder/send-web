import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  SendEvolution,
  CustomerSupport,
} from "../components";

const EvolutionOfSend = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Who We Are"
        child_link="Evolution Of Send"
        title="Evolution Of Send"
        image={HeroBG}
      />
      <SendEvolution />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default EvolutionOfSend;
