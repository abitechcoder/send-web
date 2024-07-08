import { CustomerSupportIcon } from "../assets";

const CustomerSupport = () => {
  return (
    <div className="fixed bottom-[30px] right-[30px] lg:bottom-[60px] lg:right-[60px] z-50">
      <img
        src={CustomerSupportIcon}
        className="w-[70px] lg:w-[100px]"
        alt="Customer Support Icon"
      />
    </div>
  );
};

export default CustomerSupport;
