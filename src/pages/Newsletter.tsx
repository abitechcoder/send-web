import { Header, ContactUs, Footer, InTheNews } from "../components";

const Newsletter = () => {
  return (
    <main>
      <Header
        parent_link="Publications"
        child_link="Newsletter"
        title="Newsletter"
      />
      <InTheNews />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Newsletter;
