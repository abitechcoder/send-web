import NewsletterCard from "./NewsLetterCard";
import { ReportType } from "../types";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchReports } from "../api";

const NewsLetterList = () => {
  const { data: reports } = useQuery(["reports"], fetchReports);
  const [newsletters, setNewsletters] = useState<ReportType[] | null>(null);

  useEffect(() => {
    const filteredNewsletters = reports?.filter(
      (report: ReportType) => report.report_type === "newsletter"
    );
    setNewsletters(filteredNewsletters);
  }, [reports]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10 mt-8">
      {newsletters?.map((newsletter) => (
        <NewsletterCard
          key={newsletter.id}
          id={newsletter.id}
          title={newsletter.title}
          image={newsletter.image_url}
          url={newsletter.report_url}
        />
      ))}
    </div>
  );
};

export default NewsLetterList;
