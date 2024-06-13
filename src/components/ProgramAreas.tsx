import ProgramCard from "./ProgramCard";
import styles from "../styles";
import { ProgramCards } from "../constants";

const ProgramAreas = () => {
  return (
    <section className="bg-[#F9FAFC] py-[40px] px-4 lg:px-0 lg:py-[80px]">
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4`}>YOUR PROGRAM AREAS</h2>
      <p className="md:w-[80%] w-full text-center mx-auto pb-[40px]">
        The ethos and commitment of SEND sierra Leone is to improve the quality
        of lives throughout the country.
      </p>
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-4 place-items-center">
        {ProgramCards.map((program) => (
          <ProgramCard
            key={program.id}
            title={program.title}
            image={program.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProgramAreas;
