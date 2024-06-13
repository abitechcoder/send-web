import { HeroImage, HeroArtLeft, HeroArtBottomRight, HeroArtRight } from "../assets";
import styles from "../styles";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="bg-white sm:h-72 md:h-96 lg:h-[500px] grid grid-cols-1 md:grid-cols-2 relative">
        <img src={HeroArtLeft} className="hidden md:block h-[300px] absolute top-0 left-0" alt="" />
        <img src={HeroArtBottomRight} className="hidden md:block absolute bottom-0 right-0 z-10 md:h-32 lg:h-[250px]" alt="" />
        <img src={HeroArtRight} className="hidden md:block absolute top-0 right-0 z-20 md:h-32 lg:h-[250px]" alt="" />
        <img
          className="md:hidden absolute top-0 left-0 object-cover object-center h-[320px] z-0 opacity-20"
          src={HeroImage}
          alt="Good Governance and Equality"
        />
      <div className="py-8 md:py-0 pl-4 md:pl-[40px] lg:pl-[80px] grid h-full place-content-center gap-6 z-20">
        <div>
          <h3 className={`${styles.paragraph2} text-secondary text-center md:text-left font-bold`}>
            WELCOME TO SEND SIERRA LEONE
          </h3>
          <h1 className={"text-center md:text-left font-manrope text-2xl md:text-4xl lg:text-6xl leading-tight font-bold"}>
            Good Governance <br /> And Equality Of <br /> Men and Woman
          </h1>
          <p className={`${styles.paragraph2} text-center md:text-left`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-[50%] md:w-[200px] mx-auto md:mx-0"><Button text="Donate Now" url="/"/></div>
      </div>
      <div className="hidden md:block md:[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_25%_100%)]">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={HeroImage}
          alt="Good Governance and Equality"
        />
      </div>
    </section>
  );
};

export default HeroSection;
