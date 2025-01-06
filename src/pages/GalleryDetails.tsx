import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  // CustomerSupport,
} from "../components";
import { layout } from "../styles";
import { useLoaderData, useParams } from "react-router-dom";
import { fetchGalleries } from "../api";
import { useQuery } from "@tanstack/react-query";
import { GalleryPropsType } from "../types";

const GalleryDetails = () => {
  const initialData: any = useLoaderData();
  const { galleryId } = useParams();
  const { data: allGallery } = useQuery(["gallery"], fetchGalleries, {
    initialData: initialData.gallery,
  });

  const gallery: GalleryPropsType = allGallery.find(
    (gallery: GalleryPropsType) => gallery.id === Number(galleryId)
  );

  return (
    <main className="h-full relative">
      <Header
        parent_link="Gallery"
        child_link={gallery?.title || ""}
        title={gallery?.title || ""}
        image={HeroBG}
      />
      {gallery?.photos && (
        <section className={layout.section}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[80px] md:gap-x-10 mt-8 pb-12">
            {JSON.parse(gallery.photos).map((photo: string) => (
              <img
                src={photo}
                className="object-cover object-center h-[350px] w-full"
                alt=""
              />
            ))}
          </div>
        </section>
      )}
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default GalleryDetails;
