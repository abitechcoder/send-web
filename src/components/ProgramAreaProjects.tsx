import { styles, layout } from "../styles";
import ProgramAreaProject from "./ProgramAreaProject";
import { ProjectType } from "../types";

const ProgramAreaProjects = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <section
      className={`${layout.section} bg-[url("/src/assets/report-on-projects-art.png")] bg-no-repeat bg-white bg-top`}
    >
      <div className="grid gap-4">
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center text-black uppercase`}
          >
            OUR PROJECTS
          </h2>
        <p
          className={`w-full md:w-3/4 lg:w-2/4 text-center mx-auto text-black ${styles.paragraph2}`}
        >
          The ethos and commitment of SEND sierra Leone is to improve the
          quality of lives throughout the country.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 mt-8">
        {projects.map((project) => (
          <ProgramAreaProject
            key={project?.id}
            id={project?.id}
            title={project?.name}
            text={project?.description}
            status={project?.status}
          />
        ))}
      </div>
    </section>
  );
};

export default ProgramAreaProjects;
