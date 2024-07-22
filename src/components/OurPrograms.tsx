import {styles, layout} from "../styles";
import ProgramAreasCards from "./ProgramAreasCards";

const OurPrograms = () => {
  return (
    <section className={`bg-graybg bg-[url(/src/assets/team-bg.png)] py-[40px] ${layout.section}`}>
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4`}>
        OUR PROGRAMS
      </h2>
      <p className="md:w-[80%] w-full text-center mx-auto pb-[40px]">
        The ethos and commitment of SEND sierra Leone is to improve the quality
        of lives throughout the country.
      </p>
      <ProgramAreasCards/>
    </section>
  );
};

export default OurPrograms;
