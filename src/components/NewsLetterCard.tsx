import { Link } from "react-router-dom";
import styles from "../styles";
import { Newsletter } from "../types";

const NewsletterCard = ({ title, image, url }: Newsletter) => {
  return (
    <div className={`w-full relative bg-white`}>
      <img
        src={image}
        className="object-contain object-center h-[450px] w-full"
        alt=""
      />
      <div className="p-4 md:p-8 grid gap-3">
        <h2 className={`${styles.paragraph} text-black font-bold uppercase`}>
          {title}
        </h2>
        <Link to={url} target="_blank">
          <div className="bg-lightgrey px-4 md:px-8 py-2 md:py-4 flex items-center justify-between">
            <p className={`${styles.paragraph3}`}>Read More</p>
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0.9375L7 6.9375L1 12.9375"
                stroke="#141414"
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

export default NewsletterCard;
