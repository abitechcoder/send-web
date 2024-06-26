import { Header, ContactUs, Footer, SearchJobs, CustomerSupport } from "../components";

const Gallery = () => {
  return (
    <main className="h-full relative">
      <Header parent_link="Home" child_link="Work With Us" title="Work With Us" />
      <SearchJobs/>
      <ContactUs />
      <Footer/>
      <CustomerSupport/>
    </main>
  );
};

export default Gallery;
