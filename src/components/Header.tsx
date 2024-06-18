import NavBar from "./NavBar";
import styles from "../styles";

const Header = ({
  parent_link,
  child_link,
  title,
}: {
  parent_link: string;
  child_link: string;
  title: string;
}) => {
  return (
    <header
      className={`bg-[url('/src/assets/hero-bg.png')] bg-center bg-cover w-full px-4 md:px-[40px]  lg:px-[80px] h-[300px]
        lg:h-[500px] grid grid-rows-[auto_1fr]`}
    >
      <NavBar fill={false} />
      <div className="text-white flex flex-col justify-center gap-2">
        <h3 className="font-bold">
          {parent_link} / <span className="text-activelink">{child_link}</span>
        </h3>
        <h1 className={`${styles.heading1}`}>{title}</h1>
      </div>
    </header>
  );
};

export default Header;
