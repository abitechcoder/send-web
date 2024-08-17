import { styles, layout } from "../styles";
import { IdentityCard } from ".";
import { IdentityCards } from "../constants";
import {
  corporate_identity2,
  corporate_identity_image2,
  HappyChildren2,
  IdentityRect1,
  IdentityRect2,
} from "../assets";

const OurIdentity = () => {
  return (
    <section className={`bg-white ${layout.section}`}>
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4`}>
        OUR IDENTITY
      </h2>
      <p className="md:w-[80%] w-full text-center mx-auto pb-[40px]">
        The ethos and commitment of SEND Sierra Leone is to improve the quality
        of lives throughout the country.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
        <div className="h-[450px] w-full md:h-[500px] relative">
          <img
            src={corporate_identity2}
            className="h-[350px] md:h-[450px] lg:h-[90%] bg-cover bg-center w-[80%] md:w-[60%] lg:w-[76%] absolute top-0 left-[10%] md:left-[20%] lg:left-[12%] z-10"
            alt=""
          />
          <img
            src={corporate_identity_image2}
            className="h-[150px] w-[200px] md:h-[200px] md:w-[250px] bg-cover bg-center absolute bottom-0 lg:right-0 md:right-[10%] right-0 z-20"
            alt=""
          />
          <div className="w-[150px] h-[184px] absolute left-0 md:left-[11%] lg:left-0 bottom-[100px]">
            <p className="text-white absolute z-30 w-[60%] top-[35px] left-[30%]">
              <span className="font-manrope font-bold text-5xl">30</span>
              <br />
              Years of Experience
            </p>
            <img
              src={IdentityRect1}
              className="h-[150px] w-full bg-cover bg-center absolute z-20"
              alt=""
            />
            <img
              src={IdentityRect2}
              className="h-[36px] w-[70px] bg-cover bg-center absolute bottom-0 left-0"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          {IdentityCards?.map((card) => (
            <IdentityCard
              key={card.id}
              id={card.id}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurIdentity;
