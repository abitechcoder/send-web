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
      <NavBar />
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
