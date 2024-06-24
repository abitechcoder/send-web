import { styles } from "../styles";
import { ManualsIcon } from "../assets";

const JobCard = () => {
  return (
    <div className="border border-lightgrey rounded-md">
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        <div>
          <img src={ManualsIcon} alt="" className={"w-[100px] lg:w-[150px]"} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className={`${styles.heading3Manrope}`}>Security Officer - Freetown</h3>
          <p className={`${styles.paragraph3} text-darkgrey`}>
            SEND Sierra Leone seeks the services of an experienced Security
            Officer to join our organisation and be stationed at the Freetown
            Program Office located along Spur Road”
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_auto] items-center p-4 gap-2 border-t border-t-lightgrey">
        <p className={styles.paragraph3}>Application Deadline: 10 May 2024</p>
        <button className="bg-secondary py-2 px-4 text-white flex items-center gap-2">
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
        </button>
      </div>
    </div>
  );
};

export default JobCard;
