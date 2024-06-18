import { Header, ContactUs, Footer, OrganogramChart } from "../components";

const OrganizationStructure = () => {
  return (
    <main>
      <Header parent_link="Who We Are" child_link="Organization Structure" title="Organization Structure" />
      <OrganogramChart/>
      <ContactUs />
      <Footer/>
    </main>
  );
};

export default OrganizationStructure;
