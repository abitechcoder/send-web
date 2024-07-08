import { styles, layout } from "../styles";
import { IdentityCard } from ".";
import { IdentityCards } from "../constants";
import { OurIdentityImage } from "../assets";

const OurIdentity = () => {
  return (
    <section className={`bg-white ${layout.section}`}>
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4`}>
        OUR IDENTITY
      </h2>
      <p className="md:w-[80%] w-full text-center mx-auto pb-[40px]">
        The ethos and commitment of SEND sierra Leone is to improve the quality
        of lives throughout the country.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
        <div>
          <img
            src={OurIdentityImage}
            className="h-[300px] bg-cover bg-center w-full md:h-[500px]"
            alt=""
          />
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
