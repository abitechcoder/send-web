import { Header, ContactUs, Footer, DonateListing, CustomerSupport} from "../components";

const Donate = () => {
  return (
    <main className="h-full relative">
      <Header parent_link="Home" child_link="Donate" title="Donate" />
      <DonateListing/>
      <ContactUs />
      <Footer/>
      <CustomerSupport/>
    </main>
  );
};

export default Donate;
