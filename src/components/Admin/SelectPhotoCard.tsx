import { image, video } from "@/src/assets";
import styles from "@/src/styles";
import { PhotoCard } from "@/src/types";

const SelectPhotoCard = ({ ImgURL, description, Video }: PhotoCard) => {
  return (
    <div className="bg-[#F4F7FC] border-[1px] border-[#D8DDE4] h-20 flex items-center justify-center  flex-col rounded-md p-1">
      {ImgURL ? <img src={image} className="w-4 h-4" /> : ""}
      {Video ? <img src={video} className="w-4 h-4" /> : ""}

      <p
        className={`${styles.paragraph4} text-xs text-[#849299] mt-1 text-center`}
      >
        {description}
      </p>
    </div>
  );
};

export default SelectPhotoCard;
