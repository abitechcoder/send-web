import { styles } from "../styles";
import { ManualsIcon } from "../assets";

const SearchItemCard = ({ item }: { item: any }) => {
  return (
    <div className="border border-lightgrey rounded-md">
      <div className="flex flex-col lg:grid lg:grid-cols-[100px_1fr] gap-2 lg:gap-4 p-4">
        <div>
          <img src={ManualsIcon} alt="" className={"w-[100px] lg:w-[100px]"} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className={`${styles.heading3Manrope}`}>{item.title}</h3>
          {item?.description ? (
            <p className={`${styles.paragraph3} text-darkgrey`}>
              {item.description}
            </p>
          ) : item?.text ? (
            <p className={`${styles.paragraph3} text-darkgrey`}>{item.text}</p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex justify-start items-center p-4 gap-2 border-t border-t-lightgrey">
        {/* <p className={styles.paragraph3}>
          Application Deadline: {job.deadline}
        </p> */}
        <a
          href={item?.link_url || item?.url || item?.report_url}
          target="_blank"
          className="bg-secondary py-4 px-6 text-white flex items-center gap-4"
        >
          <p className={styles.paragraph3}>Read More</p>
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 0.5L7 6.5L1 12.5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SearchItemCard;
