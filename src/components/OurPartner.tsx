import styles from "../styles";
import { LogoSlider } from ".";

const OurPartner = () => {
  return (
    <section className="bg-[#F9FAFC] py-[40px] px-4 lg:px-[80px] lg:py-[80px]">
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4 mb-8`}>
        OUR PARTNER
      </h2>
      <LogoSlider />
    </section>
  );
};

export default OurPartner;
