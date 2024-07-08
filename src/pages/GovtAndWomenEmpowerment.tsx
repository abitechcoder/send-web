import { Header, ContactUs, Footer, GWEContent, CustomerSupport } from "../components";

const GovtAndWomenEmpowerment = () => {
  return (
    <main className="h-full relative">
      <Header parent_link="Strategic Direction" child_link="Governance & Women Empowerment" title="Governance & Women Empowerment" />
      <GWEContent/>
      <ContactUs />
      <Footer/>
      <CustomerSupport/>
    </main>
  );
};

export default GovtAndWomenEmpowerment;
