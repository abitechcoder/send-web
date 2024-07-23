import { home, notif, plus, ProfilePic } from "@/src/assets";
import {} from "@/src/components";
import styles from "../../styles";
import AddHomepage from "@/src/components/Admin/AddHomepage";

const Home = () => {
  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white mb-5">
        <div className=" flex items-center justify-between ">
          <div>
            <h1
              className={`${styles.heading3} leading-normal font-semibold tracking-wide font-nunito`}
            >
              Homepage
            </h1>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="border-[1px] rounded-full -left-10 flex items-center p-1">
              <img
                src={notif}
                alt="notification icon"
                className="w-[15px] h-[15px] rounded-full"
              />
            </div>
            <div>
              <img
                src={ProfilePic}
                alt="user profile picture"
                className="w-[35px] h-[35px] rounded-full"
              />
            </div>
          </div>
        </div>
        <div className=" mt-10 flex items-center justify-end">
          {/* <AddHomepage /> */}
          <button className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
            <img src={plus} className="w-6 h-6" />
            <p className="text-xs font-semibold font-nunito text-white">
              Add Homepage
            </p>
          </button>
        </div>
      </div>

      <div className=" p-3 lg:px-8 lg:py-4 overflow-y-scroll ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 ">
            <img
              src={home}
              alt="Homepage"
              className="w-full h-auto border-1 border-[#D8DDE4] "
            />
          </div>
          <div className="bg-white p-5 rounded-md md:col-span-1">
            <h6 className={`${styles.heading5}`}>Detail Homepage</h6>
            <div className="w-full h-64 bg-[#F4F7FC] my-5 rounded-md"></div>
            <form action="" className="flex flex-1 flex-col">
              <label className={`${styles.paragraph4} text-[#30354E]`}>
                Title 1
              </label>
              <div
                id="text-area"
                className="my-3 p-2 border-[1px] border-[#D8DDE4] rounded-2xl outline-none"
                contentEditable="true"
              >
                <p className={`${styles.paragraph4} text-base`}>
                  Welcome to Send Sierra Leone
                </p>
              </div>

              <label
                htmlFor=""
                className={`${styles.paragraph4} text-[#30354E]`}
              >
                Title 2
              </label>
              <div
                id="text-area"
                className="my-3 p-2 border-[1px] border-[#D8DDE4] rounded-2xl outline-none"
                contentEditable="true"
              >
                <p className={`${styles.paragraph4} text-base`}>
                  Good Governance And Equality Of Men And Woman In Sierra Leone
                </p>
              </div>
              <button className="bg-[#1B43C6] p-4 rounded-lg mt-40 text-white ">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
