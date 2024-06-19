import { Header, ContactUs, Footer, DonateListing} from "../components";

const Donate = () => {
  return (
    <main>
      <Header parent_link="Home" child_link="Donate" title="Donate" />
      <DonateListing/>
      <ContactUs />
      <Footer/>
    </main>
  );
};

export default Donate;
