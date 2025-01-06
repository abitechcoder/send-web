import styles from "../styles";
import ProgramAreasCards from "./ProgramAreasCards";
import { layout } from "../styles";

const ProgramAreas = ({ programs }: any) => {
  return (
    <section className={`bg-[#F9FAFC] ${layout.section}`}>
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4`}>
        OUR PROGRAM AREAS
      </h2>
      <p className="md:w-[80%] w-full text-center mx-auto pb-[40px]">
        Through different development programs we aim to improve the lives of
        every life in Sierra Leone
      </p>
      <ProgramAreasCards programs={programs} />
    </section>
  );
};

export default ProgramAreas;
