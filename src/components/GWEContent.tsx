import { VisionIcon } from "../assets";
import { styles, layout } from "../styles";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GWEContent = () => {
  return (
    <section
      className={`${layout.section} bg-white grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-2 lg:gap-8 relative`}
    >
      <div className="bg-[url('/src/assets/project-fact-sheet-art.png')] bg-[#EFEEF3] bg-cover bg-center w-full absolute top-0 left-0 h-[420px] md:h-[520px] lg:h-[650px] z-10"></div>
      <section className="z-20">
        <div className="flex items-end gap-1 mb-4">
          <div className="w-4 h-full border-b-2 border-b-secondary"></div>
          <p className={`text-secondary ${styles.paragraph3Barlow}`}>
            Project Report
          </p>
        </div>
        <h2 className={`font-barlow lg:text-3xl text-xl font-bold mb-8`}>
          Strengthening Community Led Accountability to Improve Service Delivery
          (SABI)
        </h2>
        <div className="relative mb-8">
          <div className="bg-[url('/src/assets/happy-community.png')] w-full h-[250px] md:h-[300px] lg:h-[350px] bg-cover bg-center"></div>
          <div className="absolute bottom-0 -translate-y-[30%] -translate-x-[12px]">
            <div className="relative">
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 11L12 0V11H0Z" fill="#FF9901" />
              </svg>

              <div className="w-[100px] h-[50px] bg-black grid place-items-center">
                <p className="font-barlow text-xl text-primary font-bold">
                  ONGOING
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Tabs defaultValue="problem" className="w-full mb-4 lg:mb-0">
            <TabsList className="bg-transparent gap-4 grid grid-cols-2 md:flex lg:justify-start mb-12 md:mb-0">
              <TabsTrigger
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-primary"
                value="problem"
              >
                Project Problem
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-primary"
                value="solution"
              >
                Project Solution
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-primary"
                value="beneficiaries"
              >
                Target Beneficiaries
              </TabsTrigger>
            </TabsList>
            <TabsContent value="problem">
              <div className="grid gap-4 py-4">
                <h2 className={`${styles.heading3} uppercase`}>
                  Project Problem
                </h2>
                <div className="bg-[url('/src/assets/hanging-drip.png')] bg-cover bg-center h-[250px] md:h-[350px] w-full"></div>
                <div>
                  <p className={`text-darkgrey ${styles.paragraph3}`}>
                    - Lack of accountability in health service delivery
                    healthcare providers.
                    <br />
                    - Poor quality of healthcare service by healthcare
                    providers.
                    <br />
                    - Lack of public awareness on safe healthcare practices.
                    <br />- Lack of adequate healthcare structures and the lack
                    of trust between communities and institutions.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="solution">
              <div className="grid gap-8 py-4">
                <h2 className={`${styles.heading3} uppercase`}>
                  Project Solution
                </h2>
                <div className="grid gap-8">
                  <div className="flex gap-4 md:gap-6">
                    <img
                      src={VisionIcon}
                      className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                      alt="Vision Icon"
                    />
                    <div>
                      <h3 className={`${styles.heading3Manrope}`}>
                        Creating & Facilitating Citizen Feedback
                      </h3>
                      <p className={`text-darkgrey ${styles.paragraph3}`}>
                        Strengthening the citizens’ voice and interaction by
                        creating and facilitating citizen feedback forums and
                        platforms with service providers to discuss and share
                        ideas.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 md:gap-6">
                    <img
                      src={VisionIcon}
                      className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                      alt="Vision Icon"
                    />
                    <div>
                      <h3 className={`${styles.heading3Manrope}`}>
                        Healthcare Services
                      </h3>
                      <p className={`text-darkgrey ${styles.paragraph3}`}>
                        Educating citizens on the healthcare services available
                        and their right to access healthcare services.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 md:gap-6">
                    <img
                      src={VisionIcon}
                      className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                      alt="Vision Icon"
                    />
                    <div>
                      <h3 className={`${styles.heading3Manrope}`}>
                        Improvement Of Healthcare Services
                      </h3>
                      <p className={`text-darkgrey ${styles.paragraph3}`}>
                        Encourage the formulation of indigenous solutions to
                        improve accountability in the provision of healthcare
                        services
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 md:gap-6">
                    <img
                      src={VisionIcon}
                      className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                      alt="Vision Icon"
                    />
                    <div>
                      <h3 className={`${styles.heading3Manrope}`}>
                        Focus On Gender & Minority
                      </h3>
                      <p className={`text-darkgrey ${styles.paragraph3}`}>
                        Focus on gender and minority inclusion to help increase
                        their access to healthcare services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="beneficiaries">
              <div className="grid gap-4 py-4">
                <h2 className={`${styles.heading3} uppercase`}>
                  Project Beneficiaries
                </h2>
                <div className="bg-[url('/src/assets/bunch-of-women.png')] bg-cover bg-center h-[250px] md:h-[350px] w-full"></div>
                <div>
                  <p className={`text-darkgrey ${styles.paragraph3}`}>
                    - Citizens in the western area and eastern provinces of
                    Sierra Leone <br />- Women, children and other minority
                    groups such as PWDs
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <section className="z-20">
        <p className={`${styles.paragraph3} leading-relaxed`}>
          The Western Area Rural District in Sierra Leone is a prime example of
          the discrimination and unfair low representation of women in
          governance despite representing over 50% of the population. Out of the
          27 district councillors, only three are women. Of the 8 MPs, only 2
          are women, and only 5 women are among the 121 tribal heads who
          constitute the traditional governance structure in the District. Poor
          road networks coupled with unstable and inexistent electricity supply
          in some areas makes it difficult or impossible in some areas for women
          to diversify from subsistence farming as that is the only way to
          provide for their families. <a href="#">more...</a>
        </p>

        <div className="bg-dark bg-[url('/src/assets/project-fact-sheet-art.png')] bg-no-repeat bg-contain bg-right-top p-8 border-t-2 border-t-primary mt-8">
          <h3 className={`${styles.heading2Barlow} text-white`}>
            Project Fact Sheet
          </h3>
          <div className="py-8 grid gap-8">
            <div>
              <h5 className={`${styles.paragraph3} text-lightgrey`}>DONOR</h5>
              <p className={`${styles.paragraph3} font-bold text-white`}>
                Christian Aid
              </p>
            </div>

            <div>
              <h5 className={`${styles.paragraph3} text-lightgrey`}>
                PROJECT IMPLEMENTING PARTNER
              </h5>
              <p className={`${styles.paragraph3} font-bold text-white`}>
                SEND Sierra Leone
              </p>
            </div>

            <div>
              <h5 className={`${styles.paragraph3} text-lightgrey`}>
                PROJECT LOCATION
              </h5>
              <p className={`${styles.paragraph3} font-bold text-white`}>
                Western Area Rural District and the Eastern Province of Sierra
                Leone
              </p>
            </div>

            <div>
              <h5 className={`${styles.paragraph3} text-lightgrey`}>
                DURATION
              </h5>
              <p className={`${styles.paragraph3} font-bold text-white`}>-</p>
            </div>

            <div>
              <h5 className={`${styles.paragraph3} text-lightgrey`}>
                PROJECT BUDGET
              </h5>
              <p className={`${styles.paragraph3} font-bold text-white`}>-</p>
            </div>

            <div>
              <h5 className={`${styles.paragraph3} text-lightgrey`}>
                PROJECT THEMATIC AREAS
              </h5>
              <p className={`${styles.paragraph3} font-bold text-white`}>
                Governance
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-secondary text-white py-4 w-full">
              View Project Report
            </button>
            <button className="bg-primary text-white py-4 w-full">
              View Gallery Project
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default GWEContent;
