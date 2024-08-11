import {
  Header,
  ContactUs,
  Footer,
  Directors,
  CustomerSupport,
} from "../components";
import { getDirectors } from "../data";
import { useLoaderData } from "react-router-dom";
import { Director } from "../types";
import { HeroBG } from "../assets";

export async function loader() {
  const directors = await getDirectors();
  return { directors };
}

const BoardOfDirectors = () => {
  const { directors }: Director[] | null | any = useLoaderData();
  return (
    <main className="h-full relative">
      <Header
        parent_link="Who We Are"
        child_link="Board of Directors"
        title="Board of Directors"
        image={HeroBG}
      />
      <Directors directors={directors} />
      <ContactUs />
      <Footer />
      <CustomerSupport />
    </main>
  );
};

export default BoardOfDirectors;
