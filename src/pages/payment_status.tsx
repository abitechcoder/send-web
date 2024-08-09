import { Link } from "react-router-dom";
import { NavBar } from "../components";
import styles from "../styles";

const payment_status = () => {
  return (
    <div className="h-full grid grid-cols-1 grid-rows-[82px_1fr] lg:grid-rows-[92px_1fr]">
      <div className="px-4 md:px-[40px] lg:px-[80px] bg-white">
        <NavBar />
      </div>
      <div className="h-full grid place-items-center">
        <div className="w-[90%] md:w-[70%] lg:w-[50%] bg-white py-4 px-8 rounded-lg flex flex-col gap-4 items-center">
          <img src="/assets/icons/check.png" alt="" />
          <h1 className={`${styles.heading3Manrope}`}>Payment Successful</h1>
          <p className={`${styles.paragraph3Barlow}`}>
            Thank you for your voluntary donation.
          </p>
          <div>
            <Link to={"/"}>
              <div className="bg-secondary text-white py-2 px-4 rounded-lg">
                <p>Back to home</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default payment_status;
