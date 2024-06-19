import { Header, ContactUs, Footer, EventGallery } from "../components";

const Gallery = () => {
  return (
    <main>
      <Header parent_link="Home" child_link="Gallery" title="Gallery" />
      <EventGallery/>
      <ContactUs />
      <Footer/>
    </main>
  );
};

export default Gallery;
