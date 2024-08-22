import {
  Header,
  ContactUs,
  Footer,
  CustomerSupport,
  DirectorInfo,
} from "../components";
import { useLoaderData } from "react-router-dom";
import { getDirector } from "../data";
import { HeroBG } from "../assets";

export async function loader({ params }: any) {
  const director = await getDirector(Number(params.directorId));
  return { director };
}

const DirectorDetails = () => {
  let { director }: any = useLoaderData();
  return (
    <main className="h-full relative">
      <Header
        parent_link="Who We Are"
        child_link="Board of Directors"
        title="Board of Directors"
        image={HeroBG}
      />
      <DirectorInfo director={director} />
      <ContactUs />
      <Footer />
      {/* <CustomerSupport /> */}
    </main>
  );
};

export default DirectorDetails;
