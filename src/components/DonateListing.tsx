import { styles, layout } from "../styles";
import DonateListingCard from "./DonateListingCard";

const DonateListing = () => {
  return (
    <section
      className={`${layout.section} bg-graybg bg-[url(/src/assets/team-bg.png)] bg-center`}
    >
      <div className="grid gap-4">
        <div>
          <h2 className={`${styles.heading3} text-secondary text-center`}>
            Donate
          </h2>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center text-black uppercase`}
          >
            DONATE LISTING
          </h2>
        </div>
        <p
          className={`w-full text-center mx-auto text-black ${styles.paragraph2}`}
        >
          Explore all our amazing project Images & Videos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10 mt-8">
        <DonateListingCard
          title="little help can make a big difference"
          image="donate-listing-image.png"
        />
        <DonateListingCard
          title="little help can make a big difference"
          image="donate-listing-image.png"
        />
        <DonateListingCard
          title="little help can make a big difference"
          image="donate-listing-image.png"
        />
      </div>
    </section>
  );
};

export default DonateListing;
