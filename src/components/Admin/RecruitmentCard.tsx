import { file, left } from "@/src/assets";
import styles from "@/src/styles";
import { JobPropsType } from "@/src/types";

const RecruitmentCard = ({ job }: {job: JobPropsType}) => {
  return (
    <div className="mb-7 ">
      <div className="border-[1px] py-7 px-5 border-[#E0E0E0] gap-5 flex">
        <img src={file} className="w-14 h-14" />
        <div>
          <h6 className={`${styles.heading2}  text-base lg:text-xl mb-2`}>
            {job.title}
          </h6>
          <p className={`${styles.heading2} text-sm text-[#849299]`}>
            {job.description}
          </p>
        </div>
      </div>
      <div className="border-[1px] py-3 px-5 border-[#E0E0E0] gap-5 flex items-center justify-between">
        <p className="font-manrope font-normal text-sm">
          Application Deadline: {job.deadline}
        </p>
        <a href={job.link_url} className="py-2 px-5 bg-[#1B43C6] font-manrope text-sm  flex items-center gap-3 text-white ">
          Read More <img src={left} className="w-2 h-3" />
        </a>
      </div>
    </div>
  );
};

export default RecruitmentCard;
