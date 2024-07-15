import { partner } from "../../types";

const OurPartnerCard = ({ partnerLogo }: partner) => {
  return (
    <div className="w-36 h-32 bg-[#F4F7FC] flex items-center p-5 rounded-md">
      <img src={partnerLogo} className="w-full" />
    </div>
  );
};

export default OurPartnerCard;
