import { useQuery } from "@tanstack/react-query";
import { styles, layout } from "../styles";
import CaseStoryCard from "./CaseStoryCard";
import { fetchCaseStories } from "../api";
import { CaseStoryType } from "../types";

const ProjectCaseStories = () => {
  const { data: stories } = useQuery(["stories"], fetchCaseStories);
  console.log("Stories:", stories);

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
            PROJECT CASE STORIES
          </h2>
        </div>
        <p
          className={`w-full text-center mx-auto text-black ${styles.paragraph2}`}
        >
          Explore all our amazing project Images & Videos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10 mt-8">
        {stories?.map((story: CaseStoryType) => (
          <CaseStoryCard
            key={story.id}
            title={story.title}
            image={story.image}
            text={story.text}
            date={story.createdAt}
            linkUrl={story.link_url}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectCaseStories;
