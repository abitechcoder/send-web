import { styles, layout } from "../styles";
import NewsletterCard from "./NewsLetterCard";

const InTheNews = () => {
  return (
    <section
      className={`${layout.section} bg-graybg bg-[url(/src/assets/team-bg.png)] bg-center`}
    >
      <div className="grid gap-4">
        <div>
          <h2 className={`${styles.heading3} text-secondary text-center`}>
            Publication
          </h2>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center text-black uppercase`}
          >
            In the News
          </h2>
        </div>
        <p
          className={`w-full text-center mx-auto text-black ${styles.paragraph2}`}
        >
          Our ethical Board of Directors ensure that SEND Sierra Leone adheres
          strictly to Sierra Leonean legislation and the directives of all
          governmental stakeholders whiles ensuring that the quality of lives in
          Sierra Leone are improved through SEND implemented projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10 mt-8">
        <NewsletterCard
          title="NEWSLETTER 2022-IMPACTING TODAY FOR A..."
          image="news-image-1.png"
        />
        <NewsletterCard
          title="Nyapui Senior Secondary School of..."
          image="news-image-2.png"
        />
        <NewsletterCard
          title="Second Quarter Newsletter 2021..."
          image="news-image-3.png"
        />
      </div>
    </section>
  );
};

export default InTheNews;
