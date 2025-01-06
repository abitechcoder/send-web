import { styles, layout } from "../styles";
import {
  ChevronLeft,
  corporate_identity2,
  corporate_identity_image2,
} from "../assets";
import { IdentityPropsType } from "../types";

const CoreValue = ({ identity }: { identity: IdentityPropsType }) => {
  return (
    <section className={`${layout.section} bg-[#F9FAFC]`}>
      {/* <div className="hidden md:block col-span-2 bg-[url('/src/assets/corporate-identity-image.png')] bg-center bg-cover w-full h-[350px]"></div>     */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-[420px] md:h-[510px] relative">
          <div className="bg-secondary w-5 absolute top-0 left-0 h-[360px] lg:h-[430px]"></div>
          <img
            src={corporate_identity2}
            className="absolute top-0 left-5 w-[85%] lg:w-[70%] h-[350px] lg:h-[420px]"
          />
          <img
            src={corporate_identity_image2}
            className="absolute bottom-[30px] md:bottom-[100px] lg:bottom-[50px] right-0 lg:right-[100px] w-[150px] lg:w-[200px] h-[150px] lg:h-[250px] z-10"
          />
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
            {identity.value.split(":")[0]}:
          </p>
          <div>
            {identity.value
              ?.split(":")[1]
              ?.split("- ")
              .map((text, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <img src={ChevronLeft} className="w-[60px] h-[60px]" alt="" />
                  <p
                    className={`w-full text-left mx-auto text-black ${styles.paragraph3}`}
                  >
                    {text}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValue;
