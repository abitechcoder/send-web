import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { styles, layout } from "../styles";
import ReportCard from "./ReportCard";
import { ProjectType, ReportType } from "../types";
import { useEffect, useState } from "react";
import NewsletterCard from "./NewsLetterCard";
import ManualProfileCard from "./ManualProfileCard";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../api";

const ReportsOnProject = ({ reports }: { reports: ReportType[] }) => {
  const [annualReports, setAnnualReports] = useState<ReportType[]>([]);
  const [newsletters, setNewletters] = useState<ReportType[]>([]);
  const [manuals, setManuals] = useState<ReportType[]>([]);
  const {data: projects} = useQuery(["projects"], fetchProjects)

  useEffect(() => {
    const filteredAnnualReports = reports.filter(
      (report: ReportType) => report.report_type === "annual"
    );
    setAnnualReports(filteredAnnualReports);

    const filteredNewsletters = reports.filter(
      (report: ReportType) => report.report_type === "newsletter"
    );
    setNewletters(filteredNewsletters);

    const filteredManuals = reports.filter(
      (report: ReportType) => report.report_type === "manual"
    );
    setManuals(filteredManuals);
  }, [reports]);
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
            {annualReports.map((report) => (
              <ReportCard
                key={report.id}
                image={report.image_url}
                title={report.title}
                report_url={report.report_url}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="newsletters">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10 mt-8">
            {newsletters?.map((newsletter) => (
              <NewsletterCard
                key={newsletter.id}
                title={newsletter.title}
                image={newsletter.image_url}
                url={newsletter.report_url}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="manuals">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10 mt-8">
            {manuals.map((manual) => (
              <ManualProfileCard
                key={manual.id}
                image={manual.image_url}
                link_url={manual.report_url}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="project_reports">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 lg:mt-8 mt-16">
            {projects?.map((project: ProjectType) => (
              <ReportCard
                key={project?.id}
                image={project?.problem_image}
                title={project?.name}
                report_url={project?.report ? project.report : ""}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ReportsOnProject;
