import styles from "../styles";
// import { LatestNewsCard } from ".";
// import { LatestNewsCard1, LatestNewsCard2, LatestNewsCard3 } from "../assets";
import { Newsletters } from "../constants";
import NewsletterCard from "./NewsLetterCard";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <section className="bg-[#F9FAFC] py-[40px] px-[40px] lg:px-[80px] lg:py-[80px]">
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4`}>
        Newsletters
      </h2>
      <p className="lg:w-[500px] w-full text-center mx-auto pb-[40px]">
        Explore all our amazing project images & Videos
      </p>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <LatestNewsCard image={LatestNewsCard1} />
        <LatestNewsCard image={LatestNewsCard2} />
        <LatestNewsCard image={LatestNewsCard3} />
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10 mt-8">
        {Newsletters.slice(0, 3).map((newsletter) => (
          <NewsletterCard
            key={newsletter.id}
            title={newsletter.title}
            image={newsletter.image}
            url={newsletter.url}
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
