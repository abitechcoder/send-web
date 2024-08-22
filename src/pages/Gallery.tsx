import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  EventGallery,
  CustomerSupport,
} from "../components";

const Gallery = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Home"
        child_link="Gallery"
        title="Gallery"
        image={HeroBG}
      />
      <EventGallery />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default Gallery;
