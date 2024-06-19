import { styles, layout } from "../styles";
import GalleryCard from "./GalleryCard";

const EventGallery = () => {
  return (
    <section
      className={`${layout.section} bg-graybg bg-[url(/src/assets/team-bg.png)] bg-center`}
    >
      <div className="grid gap-4">
        <div>
          <h2 className={`${styles.heading3} text-secondary text-center`}>
            Gallery
          </h2>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center text-black uppercase`}
          >
            Gallery & Events
          </h2>
        </div>
        <p
          className={`w-full text-center mx-auto text-black ${styles.paragraph2}`}
        >
          Explore all our amazing project Images & Videos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[80px] md:gap-x-10 mt-8 pb-12">
        <GalleryCard
          title="SEND Sierra Leon 2023 Annual Report Exhibiton"
          image="gallery-image.png"
        />
        <GalleryCard
          title="SEND Sierra Leon 2023 Annual Report Exhibiton"
          image="gallery-image.png"
        />
        <GalleryCard
          title="SEND Sierra Leon 2023 Annual Report Exhibiton"
          image="gallery-image.png"
        />
      </div>
    </section>
  );
};

export default EventGallery;
