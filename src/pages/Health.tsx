import { HealthImage, HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  OurPrograms,
  CustomerSupport,
  ProjectOverview,
  StrategicHealthProjects,
} from "../components";

const HealthAndEducation = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Program Areas"
        child_link="Health, Nutrition & WaSH"
        title="Health, Nutrition & WaSH"
        image={HeroBG}
      />
      <ProjectOverview
        banner_image={HealthImage}
        text="We address unique health challenges that rural populations face. We will work to improve rural populations’ health, nutrition, water, sanitation, and hygiene (WASH) outcomes by implementing comprehensive interventions that promote health and WASH infrastructure, health workforce development, preventive healthcare, and health promotion, and strengthening nutrition security and food systems. We will ensure sustained access to child health and nutrition services. Accordingly, we will contribute to SDG 3, which aims to ensure health and well-being for all, and SDG 2 focuses on creating a world free of hunger and food insecurity."
      />
      <StrategicHealthProjects />
      <OurPrograms />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default HealthAndEducation;
