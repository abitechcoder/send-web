import styles from "../styles";
import NewsletterCard from "./NewsLetterCard";
import { Link } from "react-router-dom";
import { ReportType } from "../types";

const LatestNews = ({ reports }: { reports: ReportType[] }) => {
  const newsletters = reports.filter(
    (report) => report.report_type === "newsletter"
  );
  return (
    <section className="bg-[#F9FAFC] py-[40px] px-[40px] lg:px-[80px] lg:py-[80px]">
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4`}>
        Newsletters
      </h2>
      <p className="lg:w-[500px] w-full text-center mx-auto pb-[40px]">
        Read our newsletter for project updates
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10 mt-8">
        {newsletters?.slice(0, 3).map((newsletter) => (
          <NewsletterCard
            key={newsletter.id}
            id={newsletter.id}
            title={newsletter.title}
            image={newsletter.image_url}
            url={newsletter.report_url}
          />
        ))}
      </div>
      <Link to={"/publications/newsletter"}>
        <div className="p-4 bg-secondary text-white w-[150px] text-center mx-auto">
          See more...
        </div>
      </Link>
    </section>
  );
};

export default LatestNews;
