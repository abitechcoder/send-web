import { notif } from "../assets";
import { Overviews, RecentDonation } from "../components";
import styles from "../styles";

const Dashboard = () => {
  return (
    <div className="w-full bg-[#FAFAFA] h-full ">
      <div className="p-3 lg:px-8 lg:py-4 bg-white flex items-center justify-between ">
        <div>
          <h1
            className={`${styles.heading3} leading-normal font-semibold tracking-wide font-nunito`}
          >
            Dashboard{" "}
          </h1>
        </div>
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="border-[1px] rounded-full -left-10 flex items-center p-1">
            <img src={notif} alt="notification" width={15} height={15} />
          </div>
          {/* <div>
            <img src={ellipse} alt="user" width={35} height={35} />
          </div> */}
        </div>
      </div>
      <div className="p-3 lg:px-8 lg:py-4">
        <div className="flex gap-2 flex-col lg:flex-row">
          <Overviews />
          <RecentDonation />
        </div>
        {/* <div className="mt-5 lg:-mt-[2rem]">
          <Donation />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
