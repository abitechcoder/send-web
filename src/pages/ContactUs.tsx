import { Header, Footer, TalkToUs, CustomerSupport } from "../components";
import { HeroBG } from "../assets";

const Contact = () => {
  return (
    <main className="h-full relative">
      <Header parent_link="Home" child_link="Contact Us" title="Contact Us" image={HeroBG} />
      <TalkToUs/>
      <Footer/>
      <CustomerSupport/>
    </main>
  );
};

export default Contact;
