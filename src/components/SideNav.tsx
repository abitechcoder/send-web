import { Logo } from "../assets";
import styles from "../styles";
import { SideNavLinks } from "./";
// import { links } from '../constants'

const SideNav = () => {
  return (
    <div className={`bg-white h-full grid grid-rows-[70px_1fr]`}>
      <div className={`flex items-center justify-between pl-8 pr-3`}>
        <div className={`flex items-center gap-2`}>
          <img src={Logo} className="w-[40px]" alt="Logo Image" />
          <h1 className={`${styles.heading2}`}>SEND</h1>
        </div>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="14" width="26" height="3" rx="1.5" fill="#9490AE" />
          <rect x="10" y="22" width="26" height="3" rx="1.5" fill="#9490AE" />
          <rect x="10" y="30" width="14" height="3" rx="1.5" fill="#9490AE" />
        </svg>
      </div>
      <SideNavLinks />
    </div>
  );
};

export default SideNav;
