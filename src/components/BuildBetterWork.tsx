import { Beneficiaries, Communities } from "../assets";
import styles from "../styles";
import BetterWorkCard from "./BetterWorkCard";
import Button from "./Button";

const BuildBetterWork = () => {
  return (
    <section className="bg-[#EBF7F7] py-[40px] px-[40px] lg:px-[80px] lg:py-[80px] flex flex-col gap-8">
      <h2
        className={`${styles.heading1} text-center pb-3 md:pb-4 w-full md:w-[70%] mx-auto`}
      >
        BUILD BETTER WORK LIVES, BETTER ORGANIZATIONS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="grid gap-8">
          <div
            className={`h-[300px] w-full bg-green-700 ${styles.clipPathSquare} rounded-xl`}
          >
            <img
              src={Beneficiaries}
              className="object-cover h-full w-full"
              alt=""
            />
          </div>
          <BetterWorkCard
            title="1,088,433"
            subtitle="Beneficiaries supported"
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-8">
          <div
            className={`h-[300px] w-full bg-black ${styles.clipPathRect} rounded-xl`}
          >
            <img
              src={Communities}
              className="object-cover h-full w-full"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between">
            <BetterWorkCard title="1,655" subtitle="Communities reached" />
            <div className="flex justify-end">
              <BetterWorkCard title="155,490" subtitle="Households supported" />
            </div>
            <BetterWorkCard
              title="15"
              subtitle="Operational 
Districts"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="md:w-[80%] w-full text-center">
          We are a non-governmental organisation that is dedicated to creating a
          Sierra Leone where there is respect for human rights ,accountable
          governance ,food and nutrition security as well as equal opportunities
          for men and women to thrive.
        </p>
        <Button text="Donate Now" url="/donate" />
      </div>
    </section>
  );
};

export default BuildBetterWork;
