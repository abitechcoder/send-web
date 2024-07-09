import { Ledger } from "../assets";
import styles from "../styles";
import { Link } from "react-router-dom";

const StrategicDirectionProject = ({
  title,
  text,
  status,
  project_url,
}: {
  title: string;
  text: string;
  status: string;
  project_url: string;
}) => {
  return (
    <div className="bg-white p-6 lg:p-8 flex flex-col gap-8 items-start shadow-lg">
      <div className="flex justify-end w-full">
        <div className="bg-lightgrey px-4 py-2">
          <p className={`uppercase ${styles.paragraph3} font-bold`}>{status}</p>
        </div>
      </div>
      <img src={Ledger} className="h-[50px] w-[50px]" alt="" />
      <div>
        <h2 className={`uppercase ${styles.heading3} mb-1`}>{title}</h2>
        <p>
          {text.substring(0, 50)} {text.length > 50 ? "..." : ""}
        </p>
      </div>
      <Link className="w-full" to={project_url}>
        <div className="p-4 bg-secondary text-white flex items-center justify-between w-full">
          <p>Read More</p>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 0L7 6L1 12"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default StrategicDirectionProject;
