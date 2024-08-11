import NavBar from "./NavBar";
import styles from "../styles";

const Header = ({
  parent_link,
  child_link,
  title,
  image,
}: {
  parent_link: string;
  child_link: string;
  title: string;
  image?: string;
}) => {
  return (
    <header
      className={`px-4 md:px-[40px] lg:px-[80px] h-[300px]
        lg:h-[500px] grid grid-rows-[auto_1fr] relative`}
    >
      <img src={image} className="absolute top-0 left-0 z-0 w-full h-[300px]
        lg:h-[500px] object-cover object-top" alt="" />
        <div className="absolute top-0 left-0 z-10 w-full h-[300px]
        lg:h-[500px] bg-black bg-opacity-50"></div>
      <NavBar fill={false} />
      <div className="text-white flex flex-col justify-center gap-2 z-10">
        <h3 className="font-bold">
          {parent_link} / <span className="text-activelink">{child_link}</span>
        </h3>
        <h1 className={`${styles.heading1}`}>{title}</h1>
      </div>
    </header>
  );
};

export default Header;
