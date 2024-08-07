import { Link } from "react-router-dom";
import { NavBar } from "../components";
import styles from "../styles";

const payment_failure = () => {
  return (
    <div className="h-full grid grid-cols-1 grid-rows-[82px_1fr] lg:grid-rows-[92px_1fr]">
      <div className="px-4 md:px-[40px] lg:px-[80px] bg-white">
        <NavBar />
      </div>
      <div className="h-full grid place-items-center">
        <div className="w-[90%] md:w-[70%] lg:w-[50%] bg-white p-4 md:p-8 rounded-lg flex flex-col gap-8 items-center">
          <img src="/src/assets/icons/close.png" className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]" alt="" />
          <div>
          <h1 className={`${styles.heading3Manrope} text-center`}>Payment failed</h1>
          <p className={`${styles.paragraph3Barlow} text-center`}>
            Sorry for the incovenience, please try again.
          </p>
          </div>
          <div>
            <Link to={"/donate"}>
              <div className="bg-secondary text-white py-2 px-4 rounded-lg">
                <p>Back to Donation page</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default payment_failure;
