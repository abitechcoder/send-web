import { styles, layout } from "../styles";
import Button from "./Button";
// import TopStoriesCard from "./TopStoriesCard";
import TopStoriesSlider from "./TopStoriesSlider";
const OurIdentity = ({ stories }: any) => {
  return (
    <section className={`bg-black ${layout.section} flex flex-col gap-8`}>
      <div className="flex flex-col md:flex-row gap-4">
        <h2
          className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center md:text-left pb-3 md:pb-4 text-white uppercase`}
        >
          Top stories from our empowered beneficiaries and stakeholders
        </h2>
        <div className="flex flex-col items-center md:items-start md:justify-center gap-4">
          <p
            className={`lg:w-[500px] w-full text-center md:text-left mx-auto text-white ${styles.paragraph3}`}
          >
            The ethos and commitment of SEND Sierra Leone is to improve the
            quality of lives throughout the country.
          </p>
          <Button text="See More" url="/publications/case-stories" />
        </div>
      </div>
      <TopStoriesSlider stories={stories} />
    </section>
  );
};

export default OurIdentity;
