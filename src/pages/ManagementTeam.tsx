import { HeroBG } from "../assets";
import {
  Header,
  ContactUs,
  Footer,
  SeniorMgtTeam,
  CustomerSupport,
} from "../components";

const ManagementTeam = () => {
  return (
    <main className="h-full relative">
      <Header
        parent_link="Who We Are"
        child_link="Management Team"
        title="Management Team"
        image={HeroBG}
      />
      <SeniorMgtTeam />
      <ContactUs />
      <Footer />
      <CustomerSupport />
    </main>
  );
};

export default ManagementTeam;
