import styles from "../styles";
import ProgramAreasCards from "./ProgramAreasCards";
import { layout } from "../styles";

const ProgramAreas = () => {
  return (
    <section className={`bg-[#F9FAFC] ${layout.section}`}>
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4`}>
        YOUR PROGRAM AREAS
      </h2>
      <p className="md:w-[80%] w-full text-center mx-auto pb-[40px]">
        The ethos and commitment of SEND sierra Leone is to improve the quality
        of lives throughout the country.
      </p>
      <ProgramAreasCards/>
    </section>
  );
};

export default ProgramAreas;
