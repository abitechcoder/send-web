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
        parent_link="Strategic Direction"
        child_link="Health & Education"
        title="Health & Education"
      />
      <ProjectOverview
        banner_image="/src/assets/strategic-direction-1.jpg"
        text="In reference to the Sustainable Development Goals (SDG) 3 and 6 which prioritizes Good Health and Water & Sanitation respectively, SEND Sierra Leone seeks to substantially reduce deaths and illnesses resulting from unhygienic environments. We hope to create a Sierra Leone where there is adequate and equitable sanitation and hygiene through our projects. By this we facilitate the construction of improved health facilities and services in difficult to reach rural communities. We also facilitate the training and sensitization of communities on sanitation as well as the training health workers on health service delivery."
      />
      <StrategicHealthProjects />
      <OurPrograms />
      <ContactUs />
      <Footer />
      <CustomerSupport />
    </main>
  );
};

export default HealthAndEducation;
