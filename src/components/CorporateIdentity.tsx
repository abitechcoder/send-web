import { styles, layout } from "../styles";
import { IdentityPropsType } from "../types";

const CorporateIdentity = ({ identity }: { identity: IdentityPropsType }) => {
  return (
    <section className={`${layout.section} bg-[#F9FAFC]`}>
      <div className="grid grid-cols-5 gap-8 mb-8">
        <div className="col-span-5 md:col-span-2 bg-[url('/src/assets/corporate-identity.jpg')] bg-center bg-cover w-full h-[350px]"></div>
        <div className="hidden md:block bg-[url('/src/assets/corporate-identity4.jpg')] bg-center bg-cover w-full h-[350px]"></div>
        <div className="hidden md:block col-span-2 bg-[url('/src/assets/corporate-identity3.jpg')] bg-center bg-cover w-full h-[350px]"></div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h2
            className={`${styles.heading3} text-secondary text-center lg:text-left`}
          >
            Who We Are
          </h2>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center lg:text-left text-black uppercase`}
          >
            Corporate Identity
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {identity?.text?.split("- ").map((text, index) => (
            <p
              key={index}
              className={`w-full text-center lg:text-left mx-auto text-black ${styles.paragraph2}`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateIdentity;
