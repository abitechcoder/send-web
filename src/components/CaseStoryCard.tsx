import { Link } from "react-router-dom";
import styles from "../styles";
import moment from "moment";

const CaseStoryCard = ({
  title,
  image,
  text,
  date,
  linkUrl,
}: {
  title: string;
  image?: string;
  text: string;
  date: string;
  linkUrl: string;
}) => {
  return (
    <div className={`w-full bg-white`}>
      <div className="h-[300px] relative">
        <div className="h-[75px] w-[75px] bg-white absolute bottom-0 left-0 z-10 grid place-content-center">
          <h2 className={`text-secondary ${styles.heading2}`}>
            {moment(date).format("DD")}
          </h2>
          <p className={`${styles.paragraph2} text-secondary`}>
            {moment(date).format("MMM")}
          </p>
        </div>
        <img
          src={image}
          className="object-cover object-center h-full w-full"
          alt=""
        />
      </div>
      <div className="p-4 md:p-8 flex flex-col gap-3">
        <div>
          <h2
            className={`font-manrope text-base text-black font-bold uppercase mb-3`}
          >
            {title}
          </h2>
          <p className={`${styles.paragraph3}`}>{`${text.slice(0, 300)} ${
            text.length > 300 ? "..." : ""
          }`}</p>
        </div>
        <Link target="_blank" to={linkUrl}>
          <div className="group bg-lightgrey hover:bg-secondary px-4 md:px-8 py-2 md:py-4 flex items-center justify-between">
            <p className={`${styles.paragraph3} group-hover:text-white`}>
              Read More
            </p>
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:stroke-white stroke-black"
            >
              <path
                d="M1 0.9375L7 6.9375L1 12.9375"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CaseStoryCard;
