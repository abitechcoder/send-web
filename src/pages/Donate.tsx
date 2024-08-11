import { Header, ContactUs, Footer, DonateListing, CustomerSupport} from "../components";
import { HeroBG } from "../assets";

const Donate = () => {
  return (
    <main className="h-full relative">
      <Header parent_link="Home" child_link="Donate" title="Donate" image={HeroBG} />
      <DonateListing/>
      <ContactUs />
      <Footer/>
      <CustomerSupport/>
    </main>
  );
};

export default Donate;
