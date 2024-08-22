import {
  HeroSection,
  ProgramAreas,
  OurIdentity,
  OurPartner,
  LatestNews,
  TopStories,
  BuildBetterWork,
  TrainingManuals,
  ContactUs,
  Footer,
  NavBar,
  CustomerSupport,
} from "../components";
const LandingPage = () => {
  return (
    <div className="h-full relative">
      <div className="px-4 md:px-[40px] lg:px-[80px] bg-white">
        <NavBar />
      </div>
      <HeroSection />
      <ProgramAreas />
      <OurIdentity />
      <TopStories />
      <OurPartner />
      <BuildBetterWork />
      <TrainingManuals />
      <LatestNews />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </div>
  );
};

export default LandingPage;
