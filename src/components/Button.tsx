import { Link } from "react-router-dom";
import styles from "../styles";

const Button = ({ text, url }: { text: string; url: string }) => {
  return (
    <Link
      to={url}
      className={`${styles.flexCenter} gap-2 bg-secondary py-3 px-6 justify-self-start`}
    >
      <span className="text-white">{text}</span>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.1735 12.5H20.8691" stroke="white" strokeWidth="2" />
        <path
          d="M20.8691 12.5C16.2588 12.5 12.5213 16.4073 12.5213 21.2273"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M20.8691 12.4997C16.2588 12.4997 12.5213 8.5924 12.5213 3.77246"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </Link>
  );
};

export default Button;
