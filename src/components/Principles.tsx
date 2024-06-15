import { styles, layout } from "../styles";
import { ChevronLeft, CorporateImage, AManDrawing } from "../assets";

const Principles = () => {
  return (
    <section className={`${layout.section} bg-white`}>
      {/* <div className="hidden md:block col-span-2 bg-[url('/src/assets/corporate-identity-image.png')] bg-center bg-cover w-full h-[350px]"></div>     */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              Principles
            </h2>
          </div>
          
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <img src={ChevronLeft} className="w-[60px] h-[60px]" alt="" />
              <p
                className={`w-full text-left mx-auto text-black ${styles.paragraph3}`}
              >
                Development is a human right that provides men and women with equal opportunity to actively participate in and contribute to the political, economic and social transformation of their communities.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={ChevronLeft} className="w-[60px] h-[60px]" alt="" />
              <p
                className={`w-full text-left mx-auto text-black ${styles.paragraph3}`}
              >
                Development is multi-dimensional, involving economic, political and social issues requiring integrated programming approaches to promote community- driven development initiatives, economic literacy and policy advocacy.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={ChevronLeft} className="w-[60px] h-[60px]" alt="" />
              <p
                className={`w-full text-left mx-auto text-black ${styles.paragraph3}`}
              >
                Forging strong partnerships with state and non-state actors that are characterized by mutual accountability, openness and effective communication, provide an enabling environment for innovative development programming.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={ChevronLeft} className="w-[60px] h-[60px]" alt="" />
              <p
                className={`w-full text-left mx-auto text-black ${styles.paragraph3}`}
              >
                Self-managed, community-based organizations are catalysts for promoting sustainability of development processes and initiatives.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[420px] md:h-[510px] relative">
          <div className="bg-secondary w-5 absolute top-0 left-[30px] h-[360px] lg:h-[430px]"></div>
          <img src={CorporateImage} className="absolute top-0 left-[50px] w-[85%] lg:w-[70%] h-[350px] lg:h-[420px]"/>
          <img src={AManDrawing} className="absolute bottom-[30px] md:bottom-[100px] lg:bottom-[50px] right-0 lg:right-[70px] w-[150px] lg:w-[200px] h-[150px] lg:h-[250px] z-10"/>
          <div className="bg-[#9AD207] w-[150px] lg:w-[200px] absolute bottom-[20px] md:bottom-[90px] lg:bottom-[40px] right-[10px] lg:right-[80px] h-[50px] z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
