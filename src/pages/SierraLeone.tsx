import { Header, ContactUs, Footer, SierraLeoneHistory } from "../components";

const SierraLeone = () => {
  return (
    <main>
      <Header parent_link="Who We Are" child_link="Sierra Leone" title="Sierra Leone" />
      <SierraLeoneHistory />
      <ContactUs />
      <Footer/>
    </main>
  );
};

export default SierraLeone;
