import { styles, layout } from "../styles";
import ReportCard from "./ReportCard";

const ReportsOnProject = () => {
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
            REPORTS ON PROJECT
          </h2>
        </div>
        <p
          className={`w-full text-center mx-auto text-black ${styles.paragraph2}`}
        >
          The ethos and commitment of SEND sierra Leone is to improve the
          quality of lives throughout the country.
        </p>
      </div>

      <div className="w-full lg:w-[70%] lg:mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 mt-8">
        <button className="bg-secondary text-white py-2 px-4">
          Annual Reports
        </button>
        <button className="bg-lightgrey text-darkgrey py-2 px-4">
          Newsletters
        </button>
        <button className="bg-lightgrey text-darkgrey py-2 px-4">
          Training Manuals
        </button>
        <button className="bg-lightgrey text-darkgrey py-2 px-4">
          Project Reports
        </button>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 mt-8">
        <ReportCard
          title="Report 01"
          text="SEND SL Annual"
          year="Report 2017"
        />
        <ReportCard
          title="Report 02"
          text="SEND SL Annual"
          year="Report 2018"
        />
        <ReportCard
          title="Report 03"
          text="SEND SL Annual"
          year="Report 2019"
        />
        <ReportCard
          title="Report 04"
          text="SEND SL Annual"
          year="Report 2020"
        />
        <ReportCard
          title="Report 05"
          text="SEND SL Annual"
          year="Report 2021"
        />
        <ReportCard
          title="Report 06"
          text="SEND SL Annual"
          year="Report 2022"
        />
        <ReportCard
          title="Report 07"
          text="SEND SL Annual"
          year="Report 2023"
        />
        <ReportCard
          title="Report 08"
          text="SEND SL Annual"
          year="Report 2024"
        />
      </div>
    </section>
  );
};

export default ReportsOnProject;
