import styles from "../styles";

const CaseStoryCard = ({ title, image }: { title: string; image?: string }) => {
  return (
    <div className={`w-full bg-white`}>
      <div className="h-[300px] relative">
      <div className="h-[75px] w-[75px] bg-white absolute bottom-0 left-0 z-10 grid place-content-center">
            <h2 className={`text-secondary ${styles.heading2}`}>22</h2>
            <p className={`${styles.paragraph2} text-secondary`}>mei</p>
          </div>
      <img
        src={image}
        className="object-cover object-center h-full w-full"
        alt=""
      />
      </div>
      <div className="p-4 md:p-8 grid gap-3">
        <h2 className={`${styles.paragraph} text-black font-bold uppercase`}>
          {title}
        </h2>
        <p className={`${styles.paragraph3}`}>
          Shadiatu Manyeh, a 22-year-old student from Kenema, has managed to
          shatter the glass ceiling and become a beacon of hope for young girls
          in her community
        </p>
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CaseStoryCard;
