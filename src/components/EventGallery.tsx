import { GalleryIMG1, GalleryIMG2, GalleryIMG3 } from "../assets";
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
          title="Climate Action Conference 2024 Day 2"
          image={GalleryIMG1}
          link_url="https://myalbum.com/album/NKsAP4mLp9ZnrY/"
        />
        <GalleryCard
          title="Climate Action Conference 2024 Day 2"
          image={GalleryIMG2}
          link_url="hhttps://myalbum.com/album/U96CXxowg9TeGm/"
        />
        <GalleryCard
          title="SEND Sierra Leon 2023 Annual Report Exhibiton"
          image={GalleryIMG3}
          link_url="https://myalbum.com/album/Cv4U5GtTzQ4bjN/?invite=6f7af200-a0a5-407a-826f-eb5446bc329c"
        />
        <GalleryCard
          title="SEND Sierra Leone 2023 Annual Staff Meeting"
          image={GalleryIMG3}
          link_url="https://myalbum.com/album/Cv4U5GtTzQ4bjN/?invite=6f7af200-a0a5-407a-826f-eb5446bc329c"
        />
        <GalleryCard
          title="SEND Sierra Leone 2023 Staff Awards Night And Dinner"
          image={GalleryIMG3}
          link_url="https://myalbum.com/album/XmC7fmahHjSrnN/?invite=06b48367-f615-49b2-bb90-76784e074615"
        />
      </div>
    </section>
  );
};

export default EventGallery;
