import { Header, ContactUs, Footer} from "../components";

const Newsletter = () => {
  return (
    <main>
      <Header parent_link="Publications" child_link="Newsletter" title="Newsletter" />
      <ContactUs />
      <Footer/>
    </main>
  );
};

export default Newsletter;
