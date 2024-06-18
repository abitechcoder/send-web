import { Header, ContactUs, Footer, SeniorMgtTeam } from "../components";

const ManagementTeam = () => {
  return (
    <main>
      <Header parent_link="Who We Are" child_link="Management Team" title="Management Team" />
      <SeniorMgtTeam/>
      <ContactUs />
      <Footer/>
    </main>
  );
};

export default ManagementTeam;
