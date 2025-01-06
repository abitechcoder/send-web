import { useQuery } from "@tanstack/react-query";
import { ManualProfileCard } from ".";
import { styles, layout } from "../styles";
import { fetchReports } from "../api";
import { useEffect, useState } from "react";
import { ReportType } from "../types";

const ManualProfiles = () => {
  const { data: reports } = useQuery(["reports"], fetchReports);
  const [manuals, setManuals] = useState<ReportType[] | null>(null);

  useEffect(() => {
    const filteredManuals = reports?.filter(
      (report: ReportType) => report.report_type === "manual"
    );
    setManuals(filteredManuals);
  }, [reports]);

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
            MANUALS & PROFILES
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10 mt-8">
        {manuals?.map((manual) => (
          <ManualProfileCard
            key={manual.id}
            image={manual.image_url}
            link_url={manual.report_url}
          />
        ))}
      </div>
    </section>
  );
};

export default ManualProfiles;
