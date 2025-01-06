import { gallery } from "@/src/assets";
import styles from "@/src/styles";
import { ReportType } from "@/src/types";
import { DeleteReportButton, EditReport } from "..";
import React from "react";

const ReportPreview = ({
  report,
  setSelectedReport,
}: {
  report: ReportType;
  setSelectedReport: React.Dispatch<React.SetStateAction<null | ReportType>>;
}) => {
  return (
    <div className="bg-white w-full h-60 lg:h-full p-4 font-nunito">
      {report ? (
        <div className="w-full grid gap-8">
          <h3 className="font-bold text-xl">Detail Report</h3>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Title Report
            </h5>
            <p>{report.title}</p>
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Cover Image
            </h5>
            <img
              src={report.image_url}
              alt=""
              className="h-[200px] w-[200px] object-contain object-center"
            />
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">File</h5>
            <a
              className="text-blue-400 underline"
              target="blank"
              href={report.report_url}
            >
              {report.report_url.substring(0, 25)}...
            </a>
          </div>
          <div className="flex gap-4">
            {/* <button className="px-4 py-2 text-sm border border-blue-700 rounded-lg text-blue-700">
              Delete
            </button> */}
            <DeleteReportButton
              reportId={report.id}
              handleSelectedReport={setSelectedReport}
            />
            <EditReport report={report} setSelectedReport={setSelectedReport} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-[300px]">
          <img src={gallery} className="w-16 h-16 mb-5 rounded-md" />
          <p
            className={`${styles.paragraph} text-xs  text-center text-[#849299]`}
          >
            Select a report to get more information
          </p>
        </div>
      )}
    </div>
  );
};

export default ReportPreview;
