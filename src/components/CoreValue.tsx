import { styles, layout } from "../styles";
import { ChevronLeft, CorporateImage, AManDrawing } from "../assets";

const CoreValue = () => {
  return (
    <section className={`${layout.section} bg-[#F9FAFC]`}>
      {/* <div className="hidden md:block col-span-2 bg-[url('/src/assets/corporate-identity-image.png')] bg-center bg-cover w-full h-[350px]"></div>     */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-[420px] md:h-[510px] relative">
          <div className="bg-secondary w-5 absolute top-0 left-0 h-[360px] lg:h-[430px]"></div>
          <img src={CorporateImage} className="absolute top-0 left-5 w-[85%] lg:w-[70%] h-[350px] lg:h-[420px]"/>
          <img src={AManDrawing} className="absolute bottom-[30px] md:bottom-[100px] lg:bottom-[50px] right-0 lg:right-[100px] w-[150px] lg:w-[200px] h-[150px] lg:h-[250px] z-10"/>
          <div className="bg-[#9AD207] w-[150px] lg:w-[200px] absolute bottom-[20px] md:bottom-[90px] lg:bottom-[40px] right-[10px] lg:right-[110px] h-[50px] z-0"></div>
        </div>

        <div className="grid gap-4">
          <div>
            <h2
              className={`${styles.heading3} text-secondary text-center lg:text-left`}
            >
              Who We Are
            </h2>
            <h2
              className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center lg:text-left text-black uppercase`}
            >
              Core Value
            </h2>
          </div>
          <p
            className={`w-full text-left mx-auto text-black ${styles.paragraph2}`}
          >
            We believe in the potential of PEOPLE to champion their own
            development, characterized by:
          </p>
          <div>
            <div className="flex items-center gap-2">
              <img src={ChevronLeft} className="w-[60px] h-[60px]" alt="" />
              <p
                className={`w-full text-left mx-auto text-black ${styles.paragraph3}`}
              >
                Participatory decision-making and development
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={ChevronLeft} className="w-[60px] h-[60px]" alt="" />
              <p
                className={`w-full text-left mx-auto text-black ${styles.paragraph3}`}
              >
                Equality of women and men
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={ChevronLeft} className="w-[60px] h-[60px]" alt="" />
              <p
                className={`w-full text-left mx-auto text-black ${styles.paragraph3}`}
              >
                Openness and accountability
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={ChevronLeft} className="w-[60px] h-[60px]" alt="" />
              <p
                className={`w-full text-left mx-auto text-black ${styles.paragraph3}`}
              >
                Partnership for human development
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={ChevronLeft} className="w-[60px] h-[60px]" alt="" />
              <p
                className={`w-full text-left mx-auto text-black ${styles.paragraph3}`}
              >
                Learning, innovation and sharing of knowledge
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={ChevronLeft} className="w-[60px] h-[60px]" alt="" />
              <p
                className={`w-full text-left mx-auto text-black ${styles.paragraph3}`}
              >
                Enabling action based on information and evidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValue;
