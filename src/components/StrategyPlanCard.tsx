import { Ledger } from "../assets";

const StrategyPlanCard = () => {
  return (
    <div className="relative bg-[#F9FAFC] bg-[url(/src/assets/strategy-plan-card-art.png)] px-8 py-8 mb-7 flex flex-col w-[250px] md:w-[200px] gap-4">
      <img src={Ledger} className="h-[80px] w-[80px]" alt="" />
      <h3 className="uppercase font-barlow font-bold text-xl">
        Strategic Plan
      </h3>
      <p className={`text-sm font-barlow`}>
        2019 - 2023 <br /> Strategic Plan PDF
      </p>
      <div className="bg-white w-[50px] h-[50px] absolute -bottom-[25px] left-8 grid place-items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.1735 12H20.8691" stroke="#141414" stroke-width="2" />
          <path
            d="M20.8691 12C16.2588 12 12.5213 15.9073 12.5213 20.7273"
            stroke="#141414"
            stroke-width="2"
          />
          <path
            d="M20.8691 11.9997C16.2588 11.9997 12.5213 8.0924 12.5213 3.27246"
            stroke="#141414"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default StrategyPlanCard;
