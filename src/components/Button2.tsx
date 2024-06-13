import { Link } from "react-router-dom";

const Button2 = ({ text, url }: { text: string; url: string }) => {
  return (
    <Link
      to={url}
      className={`w-full grid grid-cols-[1fr_8px] items-center gap-2 bg-secondary py-3 px-6`}
    >
      <span className="text-white">{text}</span>
      <svg
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-2 w-2"
      >
        <path
          d="M1 0L7 6L1 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

export default Button2;
