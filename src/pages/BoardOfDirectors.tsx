import { Header, ContactUs, Footer, Directors } from "../components";

const BoardOfDirectors = () => {
  return (
    <main>
      <Header parent_link="Who We Are" child_link="Board of Directors" title="Board of Directors" />
      <Directors/>
      <ContactUs />
      <Footer/>
    </main>
  );
};

export default BoardOfDirectors;
