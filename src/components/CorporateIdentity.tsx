import { styles, layout } from "../styles";

const CorporateIdentity = () => {
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
          <p
            className={`w-full text-center lg:text-left mx-auto text-black ${styles.paragraph2}`}
          >
            We are a non-governmental organisation that is dedicated to creating
            a Sierra Leone where there is respect for human rights ,accountable
            governance ,food and nutrition security as well as equal
            opportunities for men and women to thrive. We liaise with
            communities, traditional authorities, government institutions and
            foreign partners to combine resources that will develop innovative
            solutions to alleviate poverty and enhance quality self-reliance.
          </p>
          <p
            className={`w-full text-center lg:text-left mx-auto text-black ${styles.paragraph2}`}
          >
            With our strategic approach SEND Sierra Leone has adopted the global
            Sustainable Development Goals (SDGS) to guide national development
            planning and implementation. The pursuit of economic equality and
            social equity are mainstreamed in the SDGs. Our commitment to the
            government is to improve the delivery of social services and
            prioritize the education sector.
          </p>
          <p
            className={`w-full text-center lg:text-left mx-auto text-black ${styles.paragraph2}`}
          >
            Through this collaborative approach, we hope that our Strategic Plan
            will enable the target beneficiaries and communities to realize the
            SDGs for the sake of empowered people led by responsible Government.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CorporateIdentity;
