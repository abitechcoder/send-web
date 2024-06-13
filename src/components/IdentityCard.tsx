import styles from "../styles";
import { IdentityCardArt } from "../assets";
import { IdentityCardProps } from "../types";

const IdentityCard = ({ id, title, text }: IdentityCardProps) => {
  return (
    <div className="group relative bg-white py-6 px-12 shadow-lg rounded-xl hover:cursor-pointer hover:border-t-2 hover:border-t-secondary">
      <div className={`flex items-center gap-4`}>
        <div
          className={`h-[40px] w-[40px] rounded-full bg-[#1B43C60D] border border-[#1B43C633] ${styles.flexCenter}`}
        >
          <span className={`${styles.heading3} text-secondary`}>{id}</span>
        </div>
        <h2 className={`${styles.heading3} text-secondary`}>{title}</h2>
      </div>
      <p className={`${styles.paragraph2} pt-4 hidden group-hover:block`}>
        {text}
      </p>
      <img
        src={IdentityCardArt}
        className="h-100 hidden group-hover:block absolute top-0 right-0"
        alt=""
      />
    </div>
  );
};

export default IdentityCard;
