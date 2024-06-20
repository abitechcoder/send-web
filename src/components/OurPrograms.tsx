import ProgramCard from "./ProgramCard";
import styles from "../styles";
import { CardImage1, CardImage2, CardImage3 } from "../assets";

const OurPrograms = () => {
  return (
    <section className="bg-[#F9FAFC] py-[40px] px-4 lg:px-0 lg:py-[80px]">
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4`}>
        OUR PROJECT
      </h2>
      <p className="md:w-[80%] w-full text-center mx-auto pb-[40px]">
        The ethos and commitment of SEND sierra Leone is to improve the quality
        of lives throughout the country.
      </p>
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-4 place-items-center">
        <ProgramCard title={"Health & Education"} image={CardImage1} />
        <ProgramCard
          title={"Governance & woman empowerment"}
          image={CardImage2}
        />
        <ProgramCard
          title={"Livelihood, Food & Nutrition Security"}
          image={CardImage3}
        />
      </div>
    </section>
  );
};

export default OurPrograms;
