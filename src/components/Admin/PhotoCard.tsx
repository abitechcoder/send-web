import styles from "@/src/styles";
import { Photo } from "@/src/types";

const PhotoCard = ({ title, subtitle }: Photo) => {
  return (
    <div className="w-full h-64 mb-20 bg-white">
      <div className=" bg-[#F4F7FC] flex items-center p-5 rounded-md w-full h-56 ">
        {/* this is the containers for images  */}
      </div>
      <div className="py-2 px-3">
        <p
          className={`${styles.paragraph3} text-[#1B43C6] text-base font-normal`}
        >
          {title}
        </p>
        <h6 className="font-manrope font-bold text-lg ">{subtitle}</h6>
      </div>
    </div>
  );
};

export default PhotoCard;
