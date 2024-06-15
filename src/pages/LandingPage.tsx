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
} from "../components";
const LandingPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default LandingPage;
