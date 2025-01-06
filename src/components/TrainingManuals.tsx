import { TrainingManualsImg1, TrainingManualsImg2 } from "../assets";
import styles from "../styles";
import { ReportType } from "../types";
import Button2 from "./Button2";
import TrainingManualsCard from "./TrainingManualsCard";

const TrainingManuals = ({ reports }: { reports: ReportType[] }) => {
  const filteredReports = reports.filter(
    (report) => report.report_type === "manual"
  );
  const manuals = filteredReports.filter((report) =>
    report.title.toLowerCase().includes("manual")
  );
  return (
    <section className="bg-white py-[40px] px-4 lg:px-[80px] lg:py-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col md:justify-center gap-4">
          <img
            src={TrainingManualsImg1}
            className="w-full h-[350px] md:h-[300px] bg-cover bg-center"
            alt=""
          />
          <p className="text-sm">
            The ethos and commitment of SEND sierra Leone is to improve the
            quality of lives throughout the country.
          </p>
          <div className="w-[70%] md:w-full lg:w-[70%]">
            <Button2
              text="Annual Reports"
              url="/publications/project-reports"
            />
          </div>
        </div>
        <div>
          <img
            src={TrainingManualsImg2}
            className="w-full bg-cover bg-center h-4/5"
            alt=""
          />
        </div>
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-[2px] w-6 bg-secondary"></div>
            <h2 className={`${styles.paragraph3} text-secondary`}>
              Project Report
            </h2>
          </div>
          <h2 className={`${styles.heading1} mt-2`}>TRAINING MANUALS</h2>
          <div className="w-full md:w-[450px] mx-auto mt-8">
            {manuals?.map((manual) => (
              <div key={manual.id}>
                <TrainingManualsCard
                  text={manual.title}
                  pdf_url={manual.report_url}
                />
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingManuals;
