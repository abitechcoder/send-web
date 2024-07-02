import { Header, ContactUs, Footer, DonateListing, CustomerSupport, DonateListingInfo} from "../components";

const Donate = () => {
  return (
    <main className="h-full relative">
      <Header parent_link="Home" child_link="Donate" title="Donate" />
      <DonateListingInfo/>
      <DonateListing/>
      <ContactUs />
      <Footer/>
      <CustomerSupport/>
    </main>
  );
};

export default Donate;
