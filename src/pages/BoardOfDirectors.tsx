import { Header, ContactUs, Footer, Directors, CustomerSupport } from "../components";

const BoardOfDirectors = () => {
  return (
    <main className="h-full relative">
      <Header parent_link="Who We Are" child_link="Board of Directors" title="Board of Directors" />
      <Directors/>
      <ContactUs />
      <Footer/>
      <CustomerSupport/>
    </main>
  );
};

export default BoardOfDirectors;
