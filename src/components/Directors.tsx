import { styles, layout } from "../styles";
import { Director } from "../types";
import DirectorCard from "./DirectorCard";

const Directors = ({ directors }: any) => {
  return (
    <section
      className={`${layout.section} bg-graybg bg-[url(/src/assets/team-bg.png)] bg-center`}
    >
      <div className="grid gap-4">
        <div>
          <h2 className={`${styles.heading3} text-secondary text-center`}>
            Who We Are
          </h2>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center text-black uppercase`}
          >
            Board Of Directors
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-10 mt-8 pb-8">
        {directors.map((director: Director) => (
          <DirectorCard
            key={director.id}
            id={director.id}
            name={director?.name}
            title={director.title}
            image={director.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Directors;
