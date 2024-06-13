import { HeroBG } from "../assets";
import { NavBar } from "../components";

const CorporateIdentity = () => {
  return (
    <div>
      <header className="bg-black w-full px-4 md:px-[40px] lg:px-[80px] h-[500px] relative">
        <img
          src={HeroBG}
          alt=""
          className="absolute top-0 left-0 bottom-0 right-0 object-cover h-[500px] z-0"
        />
        <div className="z-20">
          <NavBar fill={true} />
        </div>
      </header>
    </div>
  );
};

export default CorporateIdentity;
