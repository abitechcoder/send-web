import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../index.css";
import PhotoCard from "./PhotoCard";
import { SelectGallery } from "..";
import { useEffect, useState } from "react";
import { ReportType } from "@/src/types";

const ReportTab = ({ reports, searchText }: any) => {
  const [annualReports, setAnnualReports] = useState<ReportType[]>([]);
  const [newsletters, setNewletters] = useState<ReportType[]>([]);
  const [manuals, setManuals] = useState<ReportType[]>([]);
  const [strategicPlans, setStrategicPlans] = useState<ReportType[]>([]);
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [filteredReports, setFilteredReports] = useState([]);

  useEffect(() => {
    const filtered = reports.filter((report: ReportType) =>
      report.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredReports(filtered);
  }, [searchText]);

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

    const filteredStrategicPlans = reports.filter(
      (report: ReportType) => report.report_type === "strategic_plan"
    );
    setStrategicPlans(filteredStrategicPlans);
  }, [reports]);

  return (
    <div className="p-3 grid grid-cols-[1fr_300px] gap-8 lg:px-8 lg:py-4 overflow-y-scroll">
      <Tabs className={"bg-white"}>
        <TabList className="custom-tab-list">
          <Tab className="custom-tab" selectedClassName="active">
            All
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Annual Report
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Newsletters
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Training Manuals
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Strategic Documents
          </Tab>
        </TabList>
        <TabPanel className="mt-5" id="custom-tab-panel">
          <div className="grid bg-white p-4">
            {filteredReports.length > 0 ? (
              <div className="grid gap-3 grid-cols-3 bg-white ">
                {filteredReports?.map((report: ReportType) => (
                  <div
                    className="cursor-pointer"
                    onClick={() => setSelectedReport(report)}
                    key={report.id}
                  >
                    <PhotoCard
                      title="Report"
                      subtitle={report?.title}
                      image={report?.image_url}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-200 grid place-items-center p-8">
                <p className="font-bold mb-3">No annual reports found</p>
                <p>
                  Click on <strong>add report button</strong> above to create a
                  report
                </p>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel className="mt-5" id="custom-tab-panel">
          <div className="grid bg-white p-4">
            {annualReports.length > 0 ? (
              <div className="grid gap-3 grid-cols-3 bg-white ">
                {annualReports?.map((report) => (
                  <div
                    className="cursor-pointer"
                    onClick={() => setSelectedReport(report)}
                    key={report.id}
                  >
                    <PhotoCard
                      title="Report"
                      subtitle={report?.title}
                      image={report?.image_url}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-200 grid place-items-center p-8">
                <p className="font-bold mb-3">No annual reports found</p>
                <p>
                  Click on <strong>add report button</strong> above to create an
                  annual report
                </p>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid bg-white p-4">
            {newsletters.length > 0 ? (
              <div className="grid gap-3 grid-cols-3 bg-white ">
                {newsletters?.map((report) => (
                  <div
                    className="cursor-pointer"
                    onClick={() => setSelectedReport(report)}
                    key={report.id}
                  >
                    <PhotoCard
                      title="Report"
                      subtitle={report?.title}
                      image={report?.image_url}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-200 grid place-items-center p-8">
                <p className="font-bold mb-3">No newsletters found</p>
                <p>
                  Click on <strong>add report button</strong> above to create a
                  newsletter
                </p>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid bg-white p-4">
            {manuals.length > 0 ? (
              <div className="grid gap-3 grid-cols-3 bg-white ">
                {manuals?.map((report) => (
                  <div
                    className="cursor-pointer"
                    onClick={() => setSelectedReport(report)}
                    key={report.id}
                  >
                    <PhotoCard
                      key={report.id}
                      title="Report"
                      subtitle={report?.title}
                      image={report?.image_url}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-200 grid place-items-center p-8">
                <p className="font-bold mb-3">No training manuals found</p>
                <p>
                  Click on <strong>add report button</strong> above to create a
                  training manual
                </p>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid bg-white p-4">
            {strategicPlans.length > 0 ? (
              <div className="grid gap-3 grid-cols-3 bg-white ">
                {strategicPlans?.map((report) => (
                  <div
                    className="cursor-pointer"
                    onClick={() => setSelectedReport(report)}
                    key={report.id}
                  >
                    <PhotoCard
                      key={report.id}
                      title="Report"
                      subtitle={report?.title}
                      image={report?.image_url}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-200 grid place-items-center p-8">
                <p className="font-bold mb-3">No training manuals found</p>
                <p>
                  Click on <strong>add report button</strong> above to create a
                  strategic plan document
                </p>
              </div>
            )}
          </div>
        </TabPanel>
      </Tabs>
      <div className="w-full">
        <SelectGallery
          report={selectedReport}
          setSelectedReport={setSelectedReport}
        />
      </div>
    </div>
  );
};

export default ReportTab;
