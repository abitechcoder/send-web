import OurProgramCard from "./OurProgramCard";
import {styles, layout} from "../styles";
import { CardImage1, CardImage2, CardImage3 } from "../assets";

const OurPrograms = () => {
  return (
    <section className={`bg-graybg bg-[url(/src/assets/team-bg.png)] py-[40px] ${layout.section}`}>
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4`}>
        OUR PROJECT
      </h2>
      <p className="md:w-[80%] w-full text-center mx-auto pb-[40px]">
        The ethos and commitment of SEND sierra Leone is to improve the quality
        of lives throughout the country.
      </p>
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 place-items-center">
        <OurProgramCard title={"Health & Education"} image={CardImage1} />
        <OurProgramCard
          title={"Governance & women empowerment"}
          image={CardImage2}
        />
        <OurProgramCard
          title={"Livelihood, Food & Nutrition Security"}
          image={CardImage3}
        />
      </div>
    </section>
  );
};

export default OurPrograms;
