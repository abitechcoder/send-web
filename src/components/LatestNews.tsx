import styles from "../styles";
import { LatestNewsCard } from ".";
import { LatestNewsCard1, LatestNewsCard2, LatestNewsCard3 } from "../assets";

const LatestNews = () => {
  return (
    <section className="bg-[#F9FAFC] py-[40px] px-[40px] lg:px-[80px] lg:py-[80px]">
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4`}>
        LATEST NEWS
      </h2>
      <p className="lg:w-[500px] w-full text-center mx-auto pb-[40px]">
        Explore all our amazing project images & Videos
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <LatestNewsCard image={LatestNewsCard1} />
        <LatestNewsCard image={LatestNewsCard2} />
        <LatestNewsCard image={LatestNewsCard3} />
      </div>
    </section>
  );
};

export default LatestNews;
