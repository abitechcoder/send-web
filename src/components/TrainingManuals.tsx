import { TrainingManualsImg1, TrainingManualsImg2 } from "../assets";
import styles from "../styles";
import Button2 from "./Button2";
import TrainingManualsCard from "./TrainingManualsCard";

const TrainingManuals = () => {
  return (
    <section className="bg-white py-[40px] px-4 lg:px-[80px] lg:py-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <img
            src={TrainingManualsImg1}
            className="w-full h-[280px] bg-cover"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="w-[70%] md:w-full lg:w-[70%]">
            <Button2 text="Annual Reports" url="/" />
          </div>
        </div>
        <div>
          <img src={TrainingManualsImg2} className="w-full bg-cover" alt="" />
        </div>
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-[2px] w-6 bg-secondary"></div>
            <h2 className={`${styles.paragraph3} text-secondary`}>
              Project Report
            </h2>
          </div>
          <h2 className={`${styles.heading1} mt-2`}>TRAINING MANUALS</h2>
          <div className="w-full md:w-[450px] mx-auto mt-8">
            <TrainingManualsCard text="VSLA Manual" />
            <hr />
            <TrainingManualsCard text="Woman Leaders Manual" />
            <hr />
            <TrainingManualsCard text="Health & Hygiene Manual" />
            <hr />
            <TrainingManualsCard text="Food & Nutrition Manual" />
            <hr />
            <TrainingManualsCard text="Gender Model Family Manual" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingManuals;
