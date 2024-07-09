import { AnnualReports } from "../constants";
import { styles, layout } from "../styles";
import ReportCard from "./ReportCard";

const ReportsOnProject = () => {
  return (
    <section
      className={`${layout.section} bg-[url("/src/assets/report-on-projects-art.png")] bg-no-repeat bg-white bg-top`}
    >
      <div className="grid gap-4">
        <div>
          <h2
            className={`${styles.heading3} text-secondary text-center uppercase`}
          >
            Publication
          </h2>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center text-black uppercase`}
          >
            REPORTS ON PROJECT
          </h2>
        </div>
        <p
          className={`w-full md:w-3/4 lg:w-2/4 text-center mx-auto text-black ${styles.paragraph2}`}
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
        {AnnualReports.map((report) => (
          <ReportCard
            key={report.title}
            title={report.title}
            text={report.text}
            year={report.year}
            report_url={report.report_url}
          />
        ))}
      </div>
    </section>
  );
};

export default ReportsOnProject;
