import { Header, ContactUs, Footer, SearchJobs } from "../components";

const Gallery = () => {
  return (
    <main>
      <Header parent_link="Home" child_link="Work With Us" title="Work With Us" />
      <SearchJobs/>
      <ContactUs />
      <Footer/>
    </main>
  );
};

export default Gallery;
