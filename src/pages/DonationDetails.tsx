import { useLoaderData } from "react-router-dom";
import { Header, ContactUs, Footer, DonateListing, CustomerSupport, DonateListingInfo} from "../components";
import { getDonationDetails } from "../data";

export async function DonationDetailsLoader({ params }: any) {
  const donation = await getDonationDetails(Number(params.donationId));
  return { donation };
}

const DonationDetails = () => {
  let { donation }: any = useLoaderData();
  console.log("Donation Info:", donation);
  return (
    <main className="h-full relative">
      <Header parent_link="Home" child_link="Donate" title="Donate" image={donation.image} />
      <DonateListingInfo donation={donation}/>
      <DonateListing/>
      <ContactUs />
      <Footer/>
      <CustomerSupport/>
    </main>
  );
};

export default DonationDetails;
