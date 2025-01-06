import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  EventGallery,
  CustomerSupport,
} from "../components";
import { useLoaderData } from "react-router-dom";
import { fetchGalleries } from "../api";
import { useQuery } from "@tanstack/react-query";

const Gallery = () => {
  const initialData: any = useLoaderData();
  const { data: gallery } = useQuery(["gallery"], fetchGalleries, {
    initialData: initialData.gallery,
  });
  return (
    <main className="h-full relative">
      <Header
        parent_link="Home"
        child_link="Gallery"
        title="Gallery"
        image={HeroBG}
      />
      <EventGallery gallery={gallery} />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default Gallery;
