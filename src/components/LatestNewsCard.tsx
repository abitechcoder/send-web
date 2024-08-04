import styles from "../styles";
import { SmallTriangle } from "../assets";
import Button2 from "./Button2";

const LatestNewsCard = ({ image }: { image: string }) => {
  return (
    <div className="md:w-[300px] w-full relative">
      <div className="w-full h-[300px] lg:h-[250px]">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="h-[200px] bg-white p-4 grid gap-3 relative">
        <div className="flex flex-col gap-1">
          <h3 className={`${styles.paragraph2} font-bold font-barlow`}>
            Defying Stereotypes: The Empowering Spirit of Shadiatu
          </h3>
          <p className={`${styles.paragraph3} font-manrope`}>
            Shadiatu Manyeh, a 22-year-old student from Kenema, has managed to
            shatter...
          </p>
        </div>
        <div className="w-[70%]">
          <Button2 text="Read More" url="/publications/newsletter" />
        </div>
        <div className="h-[100px] w-[5px] bg-black absolute top-[50px] -left-[5px]"></div>
      </div>
      <div className="absolute top-[150px] -left-3">
        <div className="h-[85px] w-[75px] relative">
          <div className="h-[75px] w-full bg-black absolute bottom-0 left-0 z-10 grid place-content-center">
            <h2 className={`text-primary ${styles.heading2}`}>30</h2>
            <p className={`${styles.paragraph2} text-white`}>mei</p>
          </div>
          <img
            src={SmallTriangle}
            className="absolute top-0 left-0 h-3 w-3"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LatestNewsCard;
