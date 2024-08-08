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
        child_link="Education"
        title="Education"
      />
      <ProjectOverview
        banner_image="/src/assets/strategic-direction-1.jpg"
        text="In line with SDG 4 on the provision of quality education, we work to ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. We will focus on rural communities with limited access to quality education and will strengthen access in such communities. We will implement targeted interventions that address rural schools and students’ unique challenges, thereby fostering inclusive and equitable learning opportunities for all. By prioritizing quality, we will work collaboratively with stakeholders to transform education in rural areas. "
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
