import { styles, layout } from "../styles";
import TeamCard from "./TeamCard";
import { CountryDirector, FinanceDirector, CEO } from "../assets";

const SeniorMgtTeam = () => {
  return (
    <section className={`${layout.section} bg-graybg bg-[url(/src/assets/team-bg.png)] bg-center`}>
      <div className="grid gap-4">
        <div>
          <h2
            className={`${styles.heading3} text-secondary text-center`}
          >
            Who We Are
          </h2>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center text-black uppercase`}
          >
            Senior Management Team
          </h2>
        </div>
        <p
          className={`w-full text-center mx-auto text-black ${styles.paragraph2}`}
        >
          Our senior management team are highly qualified professionals with
          decades of experience in impacting andempowering communities to be
          able to develop indigenuous solutions. These professionals support the
          organisation make critical internal decisions that are necessary to
          achieve the objectives of the organisations and implement the Board's
          regulatory direction on a quarterly basis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        <TeamCard name="Joseph Ayamga" title="Country Director" image={CountryDirector}/>
        <TeamCard name="Siapha Kamara" title="CEO of SEND West Africa" image={CEO} />
        <TeamCard name="Agnes Bockarie" title="Finance Director" image={FinanceDirector} />
      </div>
    </section>
  );
};

export default SeniorMgtTeam;
