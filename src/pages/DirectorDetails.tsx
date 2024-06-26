import {
  Header,
  ContactUs,
  Footer,
  CustomerSupport,
  DirectorInfo,
} from "../components";
import { useParams } from "react-router-dom";

const DirectorDetails = () => {
  let { directorId } = useParams();
  console.log("Director Id:", directorId);
  return (
    <main className="h-full relative">
      <Header
        parent_link="Who We Are"
        child_link="Board of Directors"
        title="Board of Directors"
      />
      <DirectorInfo directorId={Number(directorId)} />
      <ContactUs />
      <Footer />
      <CustomerSupport />
    </main>
  );
};

export default DirectorDetails;
