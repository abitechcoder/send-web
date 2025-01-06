import styles from "@/src/styles";
import { Photo } from "@/src/types";

const PhotoCard = ({ title, subtitle, image }: Photo) => {
  return (
    <div className="w-full mb-12 lg:mb-10 bg-white">
      <div className=" bg-[#F4F7FC] flex items-center rounded-md w-full h-[70%]">
        <img src={image} className="h-full w-full object-cover object-center" />
      </div>
      <div className="py-2 px-3">
        {subtitle ? (
          <p
            className={`${styles.paragraph3} text-[#1B43C6] text-base font-normal my-2`}
          >
            {title}
          </p>
        ) : (
          <></>
        )}
        <h6 className="font-manrope font-bold text-lg ">{subtitle}</h6>
      </div>
    </div>
  );
};

export default PhotoCard;
