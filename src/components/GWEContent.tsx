import { styles, layout } from "../styles";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GWEContent = () => {
  return (
    <section className={`bg-white ${layout.section} grid grid-cols-2 gap-4`}>
      <section className="grid gap-4">
        <div className="flex items-end gap-1">
          <div className="w-4 h-full border-b-2 border-b-secondary"></div>
          <p className={`text-secondary ${styles.paragraph3Barlow}`}>
            Project Report
          </p>
        </div>
        <h2 className={`font-barlow lg:text-3xl text-xl font-bold`}>
          Strengthening Community Led Accountability to Improve Service Delivery
          (SABI)
        </h2>
        <div className="relative">
          <div className="bg-[url('/src/assets/happy-community.png')] w-full h-[350px] bg-cover bg-center"></div>
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
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <section>
        <p className={`${styles.paragraph3}`}>
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
      </section>
    </section>
  );
};

export default GWEContent;
