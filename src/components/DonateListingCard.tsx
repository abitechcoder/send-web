import React from "react";
import styles from "../styles";
import { BlueProgress } from "@/components/ui/blue-progress";
import { Link } from "react-router-dom";
import { DonationListingType } from "../types";

const DonateListingCard = ({
  id,
  title,
  image,
}: DonationListingType) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Link to={`/donate/${id}`} className={`h-[520px] md:h-[550px] w-full relative`}>
      <img
        src={image}
        className="absolute top-0 left-0 object-cover object-center h-[250px] w-full"
        alt="image cover"
      />
      <div className="absolute bottom-0 left-0 w-full h-[270px] md:h-[300px] z-10 bg-white">
        <div className="p-4 md:p-8 h-full relative flex flex-col gap-4">
          <div className="absolute top-0 right-0 h-full w-[50%]">
            <img
              src="/src/assets/program-card-art.png"
              className="h-[60%] w-full"
              alt=""
            />
          </div>
          <div className="z-30 grid grid-cols-[1fr_60px]">
            <h2
              className={`${styles.paragraph} text-black font-bold capitalize`}
            >
              {title}
            </h2>
            <div></div>
          </div>
          <p className={`${styles.paragraph3}`}>
            We have covered many special events such as fireworks, fairs,
            parades, races, walks,
          </p>
          <div className="flex justify-between">
            <div className="z-30">
              <h3 className={`${styles.paragraph3} text-secondary`}>
                Our Goal
              </h3>
              <h2 className={`${styles.paragraph} text-black font-bold`}>
                $30,000
              </h2>
            </div>
            <div className="z-30">
              <h3 className={`${styles.paragraph3} text-secondary`}>Raised</h3>
              <h2 className={`${styles.paragraph} text-black font-bold`}>
                $25,000
              </h2>
            </div>
            <div className="z-30">
              <h3 className={`${styles.paragraph3} text-secondary`}>To Go</h3>
              <h2 className={`${styles.paragraph} text-black font-bold`}>
                $5,000
              </h2>
            </div>
          </div>
          <BlueProgress value={progress} className="w-full bg-darkgrey h-2" />
          <div className="bg-secondary w-[50px] h-[50px] grid place-items-center z-20 absolute -top-[25px] right-4 md:right-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DonateListingCard;
