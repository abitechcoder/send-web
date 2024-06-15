import NavBar from "./NavBar";
import styles from "../styles";

const Header = () => {
  return (
    <header
      className={`bg-[url('/src/assets/hero-bg.png')] bg-center bg-cover w-full px-4 md:px-[40px]  lg:px-[80px] h-[300px] :h-[500px]
        lg:h-[500px] grid grid-rows-[auto_1fr]`}
    >
      <NavBar fill={false} />
      <div className="text-white flex flex-col justify-center gap-2">
        <h3 className="font-bold">
          Who We Are /{" "}
          <span className="text-activelink">Corporate Identity</span>
        </h3>
        <h1 className={`${styles.heading1}`}>Corporate Identity</h1>
      </div>
    </header>
  );
};

export default Header;
