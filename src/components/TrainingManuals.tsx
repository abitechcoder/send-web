import { TrainingManualsImg1, TrainingManualsImg2 } from "../assets";
import styles from "../styles";
import Button2 from "./Button2";
import TrainingManualsCard from "./TrainingManualsCard";

const TrainingManuals = () => {
  return (
    <section className="bg-white py-[40px] px-4 lg:px-[80px] lg:py-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col md:justify-center gap-4">
          <img
            src={TrainingManualsImg1}
            className="w-full h-[350px] md:h-[280px] bg-cover bg-center"
            alt=""
          />
          <p className="text-sm">
          The ethos and commitment of SEND sierra Leone is to improve the quality of lives throughout the country.
          </p>
          <div className="w-[70%] md:w-full lg:w-[70%]">
            <Button2 text="Annual Reports" url="/publications/project-reports" />
          </div>
        </div>
        <div>
          <img src={TrainingManualsImg2} className="w-full bg-cover bg-center h-full" alt="" />
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
            <TrainingManualsCard
              text="VSLA Manual"
              pdf_url="https://www.sendsierraleone.com/Assets/documents/vsla%20manual.pdf"
            />
            <hr />
            <TrainingManualsCard
              text="Women Leaders Manual"
              pdf_url="https://www.sendsierraleone.com/Assets/documents/manual.pdf"
            />
            <hr />
            <TrainingManualsCard
              text="Health & Hygiene Manual"
              pdf_url="https://www.sendsierraleone.com/Assets/documents/Health%20and%20Hygiene%20Manual%20Final%20Design.pdf"
            />
            <hr />
            <TrainingManualsCard
              text="Food & Nutrition Manual"
              pdf_url="https://www.sendsierraleone.com/Assets/documents/food%20and%20nutrision%20manual.pdf"
            />
            <hr />
            <TrainingManualsCard
              text="Gender Model Family Manual"
              pdf_url="https://www.sendsierraleone.com/Assets/documents/GMF%20MANUAL%20for%20SEND%20final.pdf"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingManuals;
