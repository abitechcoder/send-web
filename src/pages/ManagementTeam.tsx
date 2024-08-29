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
        child_link="Senior Management Team"
        title="Senior Management Team"
        image={HeroBG}
      />
      <SeniorMgtTeam />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default ManagementTeam;
