import { notif, ProfilePic, search, sort } from "../../assets";
import styles from "../../styles";
import { Admin } from "../../types";
import AddGallery from "./AddGallery";

const AdminHeader = ({
  page,
  button,
  filter,
  searchBar,
  sortBy,
  placeholder,
}: Admin) => {
  return (
    <div className="p-3 lg:px-8 lg:py-4 bg-white mb-5">
      <div className=" flex items-center justify-between ">
        <div>
          <h1
            className={`${styles.heading3} leading-normal font-semibold tracking-wide font-nunito`}
          >
            {page}
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
      <div
        className={`grid  ${
          searchBar ? "grid-cols-1 lg:grid-cols-2 lg:gap-10" : "ml-auto"
        } mt-10`}
      >
        {searchBar ? (
          <div className="flex items-center border-[1px] py-3 px-5 bg-[#D8DDE4] justify-between rounded-xl">
            <input
              type="text"
              placeholder={placeholder}
              className={`${styles.paragraph4} text-[#849299] bg-transparent outline-0 flex-1`}
            />
            <img src={search} className="w-5 h-5" />
          </div>
        ) : (
          ""
        )}
        <div
          className={`grid ${
            filter ? "grid-cols-2" : "ml-auto"
          } gap-3 mt-5 lg:mt-0`}
        >
          <AddGallery title={button} />
          {filter ? (
            <button className="flex items-center gap-2 py-3 px-7 border-[1px] rounded-xl border-[#D8DDE4]">
              <img src={sort} className="w-6 h-6" />
              <p className="text-sm font-semibold text-[#849299]">
                Sort By: {sortBy}
              </p>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
