import { useEffect, useState } from "react";
import { styles, layout } from "../styles";
import StrategyPlanCardSlider from "./StrategyPlanCardSlider";
import { ReportType } from "../types";
import { useQuery } from "@tanstack/react-query";
import { fetchReports } from "../api";

const StrategicPlan = () => {
  const [strategicPlans, setStrategicPlans] = useState<ReportType[]>([]);

  const { data: reports } = useQuery(["reports"], fetchReports);

  useEffect(() => {
    const filteredStrategicPlans = reports?.filter(
      (report: ReportType) => report.report_type === "strategic_plan"
    );
    setStrategicPlans(filteredStrategicPlans);
  }, [reports]);

  return (
    <section
      className={`bg-[#F9FAFC] bg-[url('/src/assets/strategic-plan-art.png')] ${layout.section} flex flex-col gap-8`}
    >
      <div className="flex flex-col lg:flex-row gap-4">
        <div>
          <h2
            className={`${styles.heading3} text-secondary text-center lg:text-left`}
          >
            Who We Are
          </h2>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center lg:text-left text-black uppercase`}
          >
            Strategic Documents
          </h2>
        </div>
        <p
          className={`lg:w-[500px] w-full text-center lg:text-left mx-auto text-black ${styles.paragraph2}`}
        >
          SEND Sierra Leone is a non governmental organisation that aims at
          alleviating poverty and shaping lives with the support of families,
          traditional leaders, government and other developmental organisation.
        </p>
      </div>
      <div className="bg-white px-8 py-10">
        <StrategyPlanCardSlider strategicPlans={strategicPlans} />
      </div>
    </section>
  );
};

export default StrategicPlan;
