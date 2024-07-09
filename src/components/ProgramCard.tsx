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
            <p className={`${styles.paragraph2} font-bold`}>{title}</p>
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.1735 12H20.8691" stroke="white" strokeWidth="2" />
            <path
              d="M20.8691 12C16.2588 12 12.5213 15.9073 12.5213 20.7273"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M20.8691 11.9997C16.2588 11.9997 12.5213 8.0924 12.5213 3.27246"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ProgramCard;
