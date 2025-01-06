import styles from "../styles";
import { LogoSlider } from ".";

const OurPartner = ({ partners }: any) => {
  return (
    <section className="bg-[#F9FAFC] py-[40px] px-4 lg:px-[80px] lg:py-[80px]">
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4 mb-8`}>
        OUR PARTNERS
      </h2>
      <LogoSlider partners={partners} />
    </section>
  );
};

export default OurPartner;
