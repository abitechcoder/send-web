import styles from "../styles";
import ProgramAreasCards from "./ProgramAreasCards";

const ProgramAreas = () => {
  return (
    <section className="bg-[#F9FAFC] py-[40px] px-4 lg:px-0 lg:py-[80px]">
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
