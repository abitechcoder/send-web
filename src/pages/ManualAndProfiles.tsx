import { Header, ContactUs, Footer, ManualProfiles } from "../components";

const ManualAndProfiles = () => {
  return (
    <main>
      <Header
        parent_link="Publications"
        child_link="Manual & Profiles"
        title="Manual & Profiles"
      />
      <ManualProfiles />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default ManualAndProfiles;
