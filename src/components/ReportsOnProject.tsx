import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AnnualReports,
  GovtProjects,
  HealthProjects,
  LivelihoodProjects,
} from "../constants";
import { styles, layout } from "../styles";
import ReportCard from "./ReportCard";
import NewsLetterList from "./NewsLetterList";
import ProfileManualsList from "./ProfileManualsList";
import StrategicDirectionProject from "./StrategicDirectionProject";

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

      <Tabs defaultValue="annual_reports">
        <TabsList className="bg-transparent w-full lg:w-[70%] lg:mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 mt-8">
          <TabsTrigger
            className="data-[state=active]:bg-secondary bg-lightgrey data-[state=active]:text-white py-2 px-4"
            value="annual_reports"
          >
            Annual Reports
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-secondary bg-lightgrey data-[state=active]:text-white py-2 px-4"
            value="newsletters"
          >
            Newsletters
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-secondary bg-lightgrey data-[state=active]:text-white py-2 px-4"
            value="manuals"
          >
            Training Manuals
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-secondary bg-lightgrey data-[state=active]:text-white py-2 px-4"
            value="project_reports"
          >
            Project Reports
          </TabsTrigger>
        </TabsList>
        <TabsContent value="annual_reports">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 lg:mt-8 mt-16">
            {AnnualReports.map((report) => (
              <ReportCard
                key={report.id}
                image={report.image}
                title={report.title}
                report_url={report.report_url}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="newsletters">
          <NewsLetterList />
        </TabsContent>
        <TabsContent value="manuals">
          <ProfileManualsList />
        </TabsContent>
        <TabsContent value="project_reports">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 lg:mt-8 mt-16">
            {LivelihoodProjects.map((project) => (
              <ReportCard
                key={project.id}
                image={project.problem_image}
                title={project.text}
                report_url={project.link_url}
              />
            ))}
            {HealthProjects.map((project) => (
              <ReportCard
                key={project.id}
                image={project.problem_image}
                title={project.text}
                report_url={project.link_url}
              />
            ))}
            {GovtProjects.map((project) => (
              <ReportCard
                key={project.id}
                image={project.problem_image}
                title={project.text}
                report_url={project.link_url}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* <div className="w-full lg:w-[70%] lg:mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 mt-8">
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
      </div> */}
    </section>
  );
};

export default ReportsOnProject;
