import styles from "../styles";
import { ProgramCardArt } from "../assets";
import { ProgramCardProps } from "../types";
import { Link } from "react-router-dom";

const ProgramCard = ({ image, title, link_url }: ProgramCardProps) => {
  return (
    <Link to={link_url}>
      <div className="lg:w-[300px] w-full relative shadow-md">
        <div className="bg-primary w-full h-[300px] lg:h-[250px]">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="h-[100px] bg-white p-4 relative">
          <div className="flex flex-col gap-1">
            <h3 className={`${styles.paragraph3} text-secondary`}>Program</h3>
            <p className={`${styles.paragraph2} font-bold w-[70%]`}>{title}</p>
            <img
              src={ProgramCardArt}
              alt=""
              className="h-[100px] absolute top-0 right-0 z-5"
            />
          </div>
        </div>
        <div
          className={`absolute w-[50px] h-[50px] bg-secondary ${styles.flexCenter} top-[275px] lg:top-[275px] right-[30px] z-10`}
        >
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
    </Link>
  );
};

export default ProgramCard;
